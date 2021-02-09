let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL/Axis [083804374105]
│ • Telkomsel [081284706942]
│ • Gopay [088296741078]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281284706942
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
