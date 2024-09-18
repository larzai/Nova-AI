require("./config.js")
const { menuMessages } = require('./config.js');
require("./msg.js")
const fs = require("fs")

const {
    getGroupAdmins,
} = require("./lib/library.js")

module.exports = async (fell, m) => {
    try {
        const body = (
            (m.mtype === 'conversation' && m.message.conversation) ||
            (m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
            (m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
            (m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
            (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
            (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
        ) ? (
            (m.mtype === 'conversation' && m.message.conversation) ||
            (m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
            (m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
            (m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
            (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
            (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
        ) : '';
        const budy = (typeof m.text === 'string') ? m.text : '';
        const prefixRegex = /^[$!.#/]|\b/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = isCmd ? body.slice(prefix.length).trim().split(' ')[0].toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const sender = m.key.fromMe ? (fell.user.id.split(':')[0] + '@s.whatsapp.net' || fell.user.id) : (m.key.participant || m.key.remoteJid)
        const botNumber = await fell.decodeJid(fell.user.id)
        const senderNumber = sender.split('@')[0]
        const pushname = m.pushName || `${senderNumber}`
        const isBot = botNumber.includes(senderNumber)
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
        const qmsg = (quoted.m || quoted)
        const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;

        const groupMetadata = m.isGroup ? await fell.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        
        //Plugin
        let date = new Date();
        let options = {timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        };
        
        let hours = date.getHours();
        let timeOfDay;
        if (hours < 12) {
          timeOfDay = 'pagi';
        } else if (hours < 17) {
          timeOfDay = 'siang';
        } else if (hours < 19) {
          timeOfDay = 'sore';
        } else {
          timeOfDay = 'malam';
        }
        
        let time = date.toLocaleString('id-ID', options);
        let day = date.toLocaleDateString('id-ID', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        
        let reactionMessWait = {
          react: {
            text: "⌛",
            key: m.key
          }
        };
        
        let reactionMessSuccess = {
          react: {
            text: "✅",
            key: m.key
          }
        };
        
        let reactionMessFail = {
          react: {
            text: "❌",
            key: m.key
          }
        };
        
        let reactionMessConfused = {
          react: {
            text: "❔",
            key: m.key
          }
        };
        
        
        
        
        
        if (isCmd) console.log("~> [CMD]", m.text, "from", pushname, "in", m.isGroup ? "Group Chat" : "Private Chat", '[' + args.length + ']');
        
        // Start of if-else conversion
        if (command === '@6285669690653') {
          m.reply('Halo, ada yang bisa saya bantu?');
          setTimeout(function() {
            m.reply('Silahkan ketik .menu untuk mengetahui info/fitur kami')
          }, 1500);
        }
        
        if (command === 'menu') {
          await fell.sendMessage(m.chat, reactionMessWait);
          await setTimeout(function() {
            reactionMessSuccess.react.text
            fell.sendMessage(m.chat, reactionMessSuccess);
          }, 2000);
          await fell.sendMessage(m.chat, {
            image: { url: './media/thumbnail-nova-ai.png' },
            caption: `══════════𓊈 Nova AI 𓊉══════════
╭───────────────────────
│   *Botname* : ®Nova
│   *Made by* : Kezt.id
│   *Waktu* : ${timeOfDay}, ${hours}
│   *Tanggal* : ${day}
│   *Website* : www.kezt.my.id
│   *Prefix* : #$ /.!
│   *Status* : 
│   *About* : ( ⧽ Member ) ( ⧽⧽ Pro )
│                 ( ✪ Premium ) 
│                 ( 𖤍 Super Premium )
│                 ( 🜲 Admin )
│                 ( 𓅛 Epic )
╰───────────────────────


_Ketik .allmenu untuk mendapatkan semua menu yang ada_
_Atau ketik .listmenu untuk mendapatkan list menu dari kami_

> ©Kezt.id
            `
          }, { quoted });
        }
        
        if (command === 'allmenu') {
          await fell.sendMessage(m.chat, reactionMessWait);
          await setTimeout(function() {
            reactionMessSuccess.react.text
            fell.sendMessage(m.chat, reactionMessSuccess);
          }, 2000);
          await fell.sendMessage(m.chat, {
            image: { url: './media/thumbnail-nova-ai.png' },
            caption: `══════════𓊈 Nova AI 𓊉══════════
╭───────────────────────
│   *Botname* : ®Nova
│   *Made by* : Kezt.id
│   *Waktu* : ${timeOfDay}, ${hours}
│   *Tanggal* : ${day}
│   *Website* : www.kezt.my.id
│   *Prefix* : #$ /.!
│   *Status* : 
│   *About* : ( ⧽ Member ) ( ⧽⧽ Pro )
│                 ( ✪ Premium ) 
│                 ( 𖤍 Super Premium )
│                 ( 🜲 Admin )
│                 ( 𓅛 Epic )
╰───────────────────────


${groupMenu}

> ©Kezt.id
            `
          }, { quoted });
        }
        
        //Group Menu
        
        if (command === 'groupmenu') {
          await fell.sendMessage(m.chat, reactionMessWait);
          await setTimeout(function() {
            reactionMessSuccess.react.text
            fell.sendMessage(m.chat, reactionMessSuccess);
          }, 2000);
          await fell.sendMessage(m.chat, {
            image: { url: './media/thumbnail-nova-ai.png' },
            caption: `══════════𓊈 Nova AI 𓊉══════════

${groupMenu}

> ©Kezt.id
            `
          }, { quoted });
        }
        
        
        if (command === 'tes') {
            m.reply('Bot berjalan dengan baik! ' + sender);
        }
        
        if (command2 === 'desk') {
          let restText = text.slice(command2.length + -4).trim();
          if (isAdmins) {
            await fell.groupUpdateDescription(m.chat, restText);
            await fell.sendMessage(m.chat, reactionMessSuccess);
            m.reply('Deskripsi telah diganti.');
          } else {
            await fell.sendMessage(m.chat, reactionMessFail);
            m.reply('Maaf, fitur ini khusus admin.');
          }
        }
        
        if (command === 'open') {
          if (isAdmins && isBotAdmins) {
            await fell.groupSettingUpdate(m.chat, 'not_announcement');
            await fell.sendMessage(m.chat, reactionMessSuccess);
            m.reply('Berhasil membuka group');
          } else {
            await fell.sendMessage(m.chat, reactionMessFail);
            m.reply('Maaf, terjadi kesalahan pastikan kamu adalah admin, dan bot telah menjadi admin.');
          }
        }
        
        if (command === 'close') {
          if (isAdmins && isBotAdmins) {
            await fell.groupSettingUpdate(m.chat, 'announcement');
            await fell.sendMessage(m.chat, reactionMessSuccess);
            m.reply('Berhasil menutup group');
          } else {
            await fell.sendMessage(m.chat, reactionMessFail);
            m.reply('Maaf, terjadi kesalahan pastikan kamu adalah admin, dan bot telah menjadi admin.');
          }
        }
        
        if (command === 'antitoxic') {
          let optionAntitoxic = args[0];
          if (optionAntitoxic === 'on') {
            await fell.sendMessage(m.chat, reactionMessSuccess);
            m.reply('Berhasil menghidupkan fitur Antitoxic.');
          } else if (optionAntitoxic === 'off') {
            await fell.sendMessage(m.chat, reactionMessSuccess);
            m.reply('Berhasil mematikan fitur Antitoxic.');
          } else {
            await fell.sendMessage(m.chat, reactionMessConfused);
            m.reply('Maaf, salah satu dari 2 opsi on atau off.');
          }
        }
        
        if (global.belumBisaDigunakan.includes(command)) {
          m.reply('Maaf untuk saat ini fitur ini belum dapat digunakan.')
          
        }
        
        
        
        
        
        
        //Action Messages
        
        if (badWords.some(badWord => budy.toLowerCase().split(' ').includes(badWord))) {
          await m.reply(`
        ⚠️ *Terdeteksi Kata Kasar* ⚠️

*Nama Pelaku:* ${m.pushName}
*Nomor Pelaku:* ${senderNumber}
*Waktu:* ${time}
*Tanggal:* ${day}
*Pesan:* ${m.text}

_Dilarang keras berkata kasar, menghina, bersikap rasis, atau melakukan tindakan tidak baik dalam bentuk apapun._
          `);
          fell.sendMessage(m.chat, {
            delete: m.key
          });
        }
        
        // if (action == "add") {
//           m.reply('Hello World')
//         }
        
        
        
        
        
        
        if (budy.startsWith('=>')) {
            if (!isCreator) return;
            function Return(sul) {
                sat = JSON.stringify(sul, null, 2);
                bang = require('util').format(sat);
                if (sat == undefined) {
                    bang = require('util').format(sul);
                }
                return m.reply(bang);
            }
            try {
                m.reply(require('util').format(eval(`(async () => { return ${budy.slice(3)} })()`)));
            } catch (e) {
                m.reply(String(e));
            }
        } else if (budy.startsWith('>')) {
            if (!isCreator) return;
            let kode = budy.trim().split(/ +/)[1];
            let teks;
            try {
                teks = /await/i.test(kode) ? eval("(async() => { " + kode + " })()") : eval(kode);
            } catch (e) {
                teks = e;
            } finally {
                await m.reply(require('util').format(teks));
            }
        } else if (budy.startsWith('$')) {
            if (!isCreator) return;
            exec(budy.slice(2), (err, stdout) => {
                if (err) return m.reply(`${err}`);
                if (stdout) return m.reply(stdout);
            });
        }
        // End of if-else conversion

    } catch (err) {
        console.log(require('util').format(err));
    }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});