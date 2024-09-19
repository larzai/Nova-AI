const fs = require("fs")

global.owner = ["6285768019887"]

//watermark 
global.packname = 'Kezt Nova'
global.author = 'AI'
global.idcennel = '<id_saluran>@newsletter'
global.thumb = './media/thumbnail-nova-ai.png' // Your Thumbnail

global.mess = {
    success: 'Dona Abangku 🔥',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*⏳ Sedang Di Proses !*_',
}





global.peringatanToxic = `
⚠️ *Terdeteksi Kata Kasar* ⚠️

Pelaku : {sender}
Waktu : 
Tanggal : 09-09-2024
Pesan : {key}

Dilarang keras berkata kasar, menghina, bersikap rasis, atau melakukan tindakan tidak baik dalam bentuk apapun. Perilaku seperti ini tidak hanya melanggar norma kesopanan, tetapi juga dapat memicu konflik dan merusak hubungan baik antara individu.

Setiap bentuk ucapan yang tidak pantas, termasuk hinaan atau komentar rasis, memiliki dampak negatif yang besar, baik secara pribadi maupun sosial.
`;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});

