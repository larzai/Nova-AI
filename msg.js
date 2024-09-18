const fs = require("fs")

global.badWords = ['tolol', 'dongo', 'bodoh', 'orang hitam', 'yatim', 'piatu', 'memek', 'kontol', 'anjing', 'anj', 'anjg', 'ajg', 'titit', 'bokep', 'bajingan', 'asu', 'colai', 'coli', 'colmek', 'porno', 'porn', 'pentil', 'tempek', 'raimu', 'matamu', 'cok', 'jancok', 'jelek', 'njing', 'anjeng'];


global.groupMenu = `
╭───╸ _「 Menu 」_╺────────
│ ✩ /open 🜲 
│ ✩ /close 🜲 
│ ✩ /deks _text_ 🜲 
│ ✩ /antitoxic _on/off_ 🜲 
│ ✩ /antilink _on/off_ 🜲 
│ ✩ /antilinkwa _on/off_ 🜲 
│ ✩ /promote _number/tag_ 🜲 
│ ✩ /demote _number/tag_ 🜲 
│ ✩ /add _number/tag_ 🜲 
│ ✩ /romove _number/tag_ 🜲 
╰───────────────
`;

global.belumBisaDigunakan = ['add', 'remove', 'promote', 'demote'];

let file = require.resolve(__filename);

fs.watchFile(file, () => {

    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
