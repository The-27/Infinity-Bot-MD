import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['51969214380', '𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 🜲', true],
  ['51988013368'], // support 
  ['51994114690'],
  ['51919199620']
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['51969214380']
global.suittag = ['51969214380'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = '𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚𝑩𝒐𝒕-𝑴𝑫'
global.namebot = '◟𝕀𝕟𝕗𝕚𝕟𝕚𝕥𝕪 𝕄𝔻◞'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.infinityJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𒆜꙰ꫂ𝐈𝐍♤𝐅𝐈𝐍𝐈𝐓𝐘•-𝄟≛⃝𝐁𝐎𓆩𝐓𝄟≛'
global.botname = 'ᬊᬁ࿔᭄ྀเɳƒเɳเƭყ ✿ꦿ🌈ℬ𝒪𝒯᭄✿'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🍁★ ׄ ꒱ 𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚- 𝑴𝑫୭'
global.author = 'mᥲძᥱ ᑲᥡ : 🌈ᵀ͢ᴴᴱ𝄟⏤͟͟͞͞⃝Black'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ ꧁𓊈𒆜𝖙𝖍𝖊•𝒃𝒍𝒂𝒄𝒌𒆜𓊉꧂'
global.textbot = '「 🍓 𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕐 - 𝐁𝐨𝐭 🌴 」• By ꧁⟣٭𝖙𝖍𝖊_𝚋𝚕𝚊𝚌𝚔٭⟢꧂'
global.etiqueta = '✦ ꧁⟣٭𝚋𝚕𝚊𝚌𝚔٭⟢꧂ ✰'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'coins'
global.welcom1 = '❍ Edita Con El Comando *#setwelcome*'
global.welcom2 = '❍ Edita Con El Comando #setbye*'
global.banner = 'https://files.catbox.moe/71hbqs.jpg'
global.avatar = 'https://files.catbox.moe/dpjivg.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.comunidad1 = ''
global.channel = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.channel2 = 'https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i'
global.md = 'https://github.com/The-27/Infinity-Bot-MD'
global.correo = 'blackoficial2025@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vb6BDQc0lwgsDN1GJ31i';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363417186717632@newsletter',
}
global.multiplier = 70

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
