/*
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    let userId = m.sender
    let { exp, coin, level, role } = global.db.data.users[userId] || { exp: 0, coin: 0, level: 0, role: 'Sin rango' }
    let { min, xp, max } = xpRange(level, global.multiplier || 1)
    let name = await conn.getName(userId)
    
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/g6u1f5.jpg')
    let taguser = '@' + userId.split("@s.whatsapp.net")[0]

    let images = [
      'https://files.catbox.moe/mfcqs7.jpg',
      'https://files.catbox.moe/v6ksr6.jpg',
      'https://files.catbox.moe/ljmjmj.jpg',
      'https://files.catbox.moe/dzo7sc.jpg',
      'https://files.catbox.moe/u65da1.jpg',
      'https://files.catbox.moe/t7bwy4.jpg'
    ]
    let randomImage = images[Math.floor(Math.random() * images.length)]  

    let botname = '⏤͟͟͞͞⋆⬪࣪ꥈ⚔️★ ׄ ꒱ 𝑺𝒉𝒂𝒅𝒐𝒘 - 𝑴𝑫୭'
    let dev = 'Powered •By ꧁⟣٭𝙽𝙻𝙰٭⟢꧂'
    let redes = 'https://whatsapp.com/channel/0029VawF8fBBvvsktcInIz3m'
        let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    let emojis = '🍁'
    let error = '❌'

    let menu = `
           ⏜፝֟꯬𝆂𝆂݊݊︵᮫ׄᜓ𝆂߭⏜᮫֟፝߭ᜓꥇ︵ᜓ᮫𝆂߭݊꯬ꥇ⏜֟፝ᜓ᮫߭︵ꥇ𝆂݊
            𓆩⿻⃟🍒 ꙲𝑺꯭ℋ꯭𝗔꯭𝗗꯭𝗢꯭𝗪𓆪          
      ⏝፝֟꯬ꥇ᮫𝆂݊ᜓ߭ׄ︶᮫߭⏝֟፝ᜓ᮫𝆂߭ׄ݊ꥇᜓ᮫߭︶ᜓ᮫߭⏝֟፝ᜓ᮫𝆂߭݊ꥇ︶ᜓ᮫߭ꥇ⏝᮫𝆂֟፝߭݊ꥇ︶⏝ᜓ᮫߭.

╭━━❍ 𝗦𝗛𝗔𝗗𝗢𝗪-𝗕𝗢𝗧
┃╭──────────────
┃┃ *❤️ Hola @${userId.split('@')[0]} Soy ${botname}*
┃╰──────────────
┃╭━━━▢     『 \`𝗜𝗡𝗙𝗢\` 』
┃┃⋄🍓 𝑶𝒘𝒏𝒆𝒓: ᴏғᴄ
┃┃⋄🍭 𝑩𝒐𝒕: ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
┃┃⋄🍜 𝑴𝒐𝒅𝒐: Privado vip
┃┃⋄🍩 𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔 » ${totalreg}
┃┃⋄🍹 𝑨𝒄𝒕𝒊𝒗𝒐 » ${uptime}
┃┃⋄🍒 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 » ${totalCommands}
┃╰━━━━━━━━━━━━━━━━╾•* 
╰━━━╼╌ׂ╼✧⬪🍓࣪⬪࣪✧╾ׂ╌╾━━━╯* 


╭╼⬪࣪━━━━━━━━━━━━━━━    
┃֪࣪    ✧. \`𝗨𝗦𝗨𝗔𝗥𝗜𝗢\` .✧
┣┅⟣━━━━━━━━━━━━━━━
├ׁ̟̇.਼ ⃝֟፝˖᜔݊✰ *𝑪𝒍𝒊𝒆𝒏𝒕𝒆:* ${name}
├ׁ̟̇.਼ ⃝֟፝˖᜔݊✰ *𝑬𝒙𝒑:* ${exp}
├ׁ̟̇.਼ ⃝֟፝˖᜔݊✰ *𝑪𝒐𝒊𝒏𝒔:* ${coin}
├ׁ̟̇.਼ ⃝֟፝˖᜔݊✰ *𝑵𝒊𝒗𝒆𝒍:* ${level}
├ׁ̟̇.਼ ⃝֟፝˖᜔݊✰ *𝑹𝒂𝒏𝒈𝒐:* ${role}
╰╼⬪࣪ ּּּ ּ｡･ﾟ♡ﾟ･｡.｡･ﾟ♡ﾟ･｡.｡･ﾟ♡ﾟ･｡
‎‎‎


*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
*ꪶ፝֟͢͢꙰꙰ꫂ🍧̵̄͟͞𝗟𝗜𝗦𝗧𝗔𝗦 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦᯾̲🔥̵̄͟*
  *⋅⋅⋅⭑★                        ★⭑⋅⋅⋅*

*✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧*
> ᥴrᥱᥲ ᥙᥒ *sᥙᑲ-ᑲ᥆𝗍* ᥴ᥆ᥒ 𝗍ᥙ ᥒúmᥱr᥆ ᥙ𝗍іᥣіzᥲᥒძ᥆ *#qr* o *#code*
ׅׄ︶ٜٜٜٜׄ߭ׄ߭ׄ߭ׄ߭⏝ׅׄ︶ٜٜׄ߭ׄ߭⏝ׄ.ׅ︶ٜٜׄ߭ׄ߭⏝ׅׄ︶ٜٜׄ߭ׄ߭⏝ٜׄׄ߭⏝ׅׄ.︶ٜٜٜٜׄ߭ׄ߭ׄ߭ׄ߭

╭──╼•⌠ ɪɴғᴏ ʙᴏᴛ ⌡•╾──╮
*│* ✎ .menu
*│* ✎ .uptime
*│* ✎ .script
*│* ✎ .staff
*│* ✎ .creador
*│* ✎ .grupos
*│* ✎ .estado
*│* ✎ .infobot
*│* ✎ .sug
*│* ✎ .ping
*│* ✎ .reportar *<text>*
*│* ✎ .reglas
*│* ✎ .speed
*│* ✎ .sistema
*│* ✎ .usuarios
*│* ✎ .ds
*│* ✎ .funciones
*│* ✎ .editautoresponder
╰───────────────╯

╭──╼•⌠  sᴇᴀʀᴄʜ  ⌡•╾──╮
*│* ✎ .animeinfo
*│* ✎ .animesearch
*│* ✎ .cuevana
*│* ✎ .githubsearch
*│* ✎ .searchhentai
*│* ✎ .google <búsqueda>
*│* ✎ .imagen <query>
*│* ✎ .infoanime
*│* ✎ .githubstalk <query>
*│* ✎ .soundcloudsearch <txt>
*│* ✎ .pinterest
*│* ✎ .pornhubsearch
*│* ✎ .npmjs
*│* ✎ .tiktoksearch <txt>
*│* ✎ .tweetposts
*│* ✎ .xnxxs
*│* ✎ .xvsearch
*│* ✎ .yts
╰───────────────╯

╭──╼•⌠ sᴜʙ ʙᴏᴛ ⌡•╾──╮
*│* ✎ .qr
*│* ✎ .code
*│* ✎ .token
*│* ✎ .sockets
*│* ✎ .deletesesion
*│* ✎ .pausarai
╰───────────────╯

╭──╼•⌠  ✦ғᴜɴ✦  ⌡•╾──╮
*│* ✎ .gay <@tag> | <nombre> 
*│* ✎ .lesbiana <@tag> | <nombre> 
*│* ✎ .pajero <@tag> | <nombre> 
*│* ✎ .pajera <@tag> | <nombre> 
*│* ✎ .puto <@tag> | <nombre> 
*│* ✎ .puta <@tag> | <nombre> 
*│* ✎ .manco <@tag> | <nombre> 
*│* ✎ .manca <@tag> | <nombre> 
*│* ✎ .rata <@tag> | <nombre>
*│* ✎ .prostituta <@tag> | <nombre> 
*│* ✎ .amigorandom
*│* ✎ .jalamela
*│* ✎ .chiste
*│* ✎ .consejo
*│* ✎ .doxear <mension>
*│* ✎ .facto
*│* ✎ .prostituto <@tag> | <nombre>
*│* ✎ .formarpareja
*│* ✎ .formarpareja5
*│* ✎ .frase
*│* ✎ .huevo @user
*│* ✎ .chupalo <mencion>
*│* ✎ .aplauso <mencion>
*│* ✎ .marron <mencion>
*│* ✎ .suicidar
*│* ✎ .iqtest <mencion>
*│* ✎ .meme
*│* ✎ .morse
*│* ✎ .nombreninja *<texto>*
*│* ✎ .paja
*│* ✎ .personalidad <mencion>
*│* ✎ .pregunta 
*│* ✎ .piropo 
*│* ✎ .zodiac *2002 02 25*
*│* ✎ .ship 
*│* ✎ .sorte 
*│* ✎ .top [texto]
*│* ✎ .formartrio <mencion>
*│* ✎ .tt 
╰───────────────╯

╭──╼•⌠  .ɢᴀᴍᴇ.  ⌡•╾──╮
*│* ✎ .ahorcado
*│* ✎ .delxo
*│* ✎ .genio *<pregunta>*
*│* ✎ .math <mode>
*│* ✎ .ppt 
*│* ✎ .pvp
*│* ✎ .sopa
*│* ✎ .ttt
╰───────────────╯

╭──╼•⌠• ᴀɴɪᴍᴇ •⌡•╾──╮
*│* ✎ .angry/enojado @tag
*│* ✎ .bath/bañarse @tag
*│* ✎ .bite/morder @tag
*│* ✎ .bleh/lengua @tag
*│* ✎ .blush/sonrojarse @tag
*│* ✎ .bored/aburrido @tag
*│* ✎ .nights/noches
*│* ✎ .dias/days
*│* ✎ .coffe/cafe @tag
*│* ✎ .cry/llorar @tag
*│* ✎ .cuddle/acurrucarse @tag
*│* ✎ .dance/bailar @tag
*│* ✎ .drunk/borracho @tag
*│* ✎ .eat/comer @tag
*│* ✎ .facepalm/palmada @tag
*│* ✎ .happy/feliz @tag
*│* ✎ .hello/hola @tag
*│* ✎ .hug/abrazar @tag
*│* ✎ .kill/matar @tag
*│* ✎ .kiss2/besar2 @tag
*│* ✎ .kiss/besar @tag
*│* ✎ .laugh/reirse @tag
*│* ✎ .lick/lamer @tag
*│* ✎ .love2/enamorada @tag
*│* ✎ .patt/acariciar @tag
*│* ✎ .poke/picar @tag
*│* ✎ .pout/pucheros @tag
*│* ✎ .ppcouple
*│* ✎ .preg/embarazar @tag
*│* ✎ .punch/golpear @tag
*│* ✎ .run/correr @tag
*│* ✎ .sad/triste @tag
*│* ✎ .scared/asustada @tag
*│* ✎ .seduce/seducir @tag
*│* ✎ .shy/timida @tag
*│* ✎ .slap/bofetada @tag
*│* ✎ .sleep/dormir @tag
*│* ✎ .smoke/fumar @tag
*│* ✎ .think/pensando @tag
*│* ✎ .undress/encuerar @tag
*│* ✎ .waifu
╰───────────────╯

╭──╼•⌠  ᴘᴇʀғɪʟ  ⌡•╾──╮
*│* ✎ .reg
*│* ✎ .unreg
*│* ✎ .profile
*│* ✎ .marry [mension / etiquetar]
*│* ✎ .divorce
*│* ✎ .setgenre <text>
*│* ✎ .delgenre
*│* ✎ .setbirth <text>
*│* ✎ .delbirth
*│* ✎ .setdesc <text>
*│* ✎ .deldesc
╰───────────────╯

╭──╼•⌠ᴅᴏᴡɴʟᴏᴀᴅ⌡•╾──╮
*│* ✎ .animedl
*│* ✎ .fb
*│* ✎ .sound
*│* ✎ .gitclone *<url git>*
*│* ✎ .gdrive
*│* ✎ .ig
*│* ✎ .mediafire <url>
*│* ✎ .mega
*│* ✎ .apk <nombre>
*│* ✎ .pinvid *<link>*
*│* ✎ .apk2 <busqueda>
*│* ✎ .npmdl
*│* ✎ .tt2
*│* ✎ .play
*│* ✎ .play2
*│* ✎ .tiktokrandom
*│* ✎ .spotify
*│* ✎ .tiktokhd
*│* ✎ .terabox
*│* ✎ .tiktok *<url>*
*│* ✎ .tiktokmp3 *<url>*
*│* ✎ .tiktokimg <url>
*│* ✎ .twitter <url>
*│* ✎ .xvideosdl
*│* ✎ .xnxxdl
*│* ✎ .pindl
╰───────────────╯

╭──╼•⌠ • sᴛᴀʟᴋ• ⌡•╾──╮
*│* ✎ .tiktokstalk *<usuario>*
*│* ✎ .kwaistalk *<usuario>*
╰───────────────╯

╭──╼•⌠•ᴘʀᴇᴍɪᴜᴍ•⌡•╾──╮
*│* ✎ .comprarpremium
*│* ✎ .premium
*│* ✎ .vip
*│* ✎ .spamwa <number>|<mesage>|<no of messages>
╰───────────────╯

╭──╼•⌠•ᴇᴄᴏɴᴏᴍɪᴀ•⌡•╾──╮
*│* ✎ .aventura
*│* ✎ .baltop
*│* ✎ .bank / bal
*│* ✎ .cazar 
*│* ✎ .codigo <cantida de coins>
*│* ✎ .canjear <código>
*│* ✎ .cartera
*│* ✎ .apostar *<cantidad>*
*│* ✎ .cf
*│* ✎ .cofre
*│* ✎ .crimen
*│* ✎ .daily
*│* ✎ .depositar 
*│* ✎ .explorar
*│* ✎ .gremio
*│* ✎ .halloween
*│* ✎ .heal
*│* ✎ .inventario 
*│* ✎ .mensual
*│* ✎ .mazmorra
*│* ✎ .minar
*│* ✎ .navidad
*│* ✎ .retirar
*│* ✎ .robar
*│* ✎ .robarxp
*│* ✎ .ruleta *<cantidad> <color>*
*│* ✎ .buyall
*│* ✎ .buy
*│* ✎ .protituirse
*│* ✎ .work
*│* ✎ .pay / transfer 
*│* ✎ .semanal
*│* ✎ .levelup
*│* ✎ .lvl @user
*│* ✎ .slot <apuesta>
╰───────────────╯

╭──╼•⌠  ɢᴀᴄʜᴀ  ⌡•╾──╮
*│*  .rw
*│*  .reclamar 
*│*  .harem
*│*  .waifuimage
*│*  .charinfo
*│*  .topwaifus [pagina]
*│*  .regalar <nombre del personaje> @usuario
*│*  .vote <personaje>
╰───────────────╯

╭──╼•⌠ sᴛɪᴄᴋᴇʀs ⌡•╾──╮
*│* ✎ .sticker <img>
*│* ✎ .sticker <url>
*│* ✎ .setmeta
*│* ✎ .delmeta
*│* ✎ .bratvid <texto>
*│* ✎ .pfp @user
*│* ✎ .qc
*│* ✎ .toimg (reply)
*│* ✎ .brat
*│* ✎ .bratvid <texto>
*│* ✎ .emojimix  *<emoji+emoji>*
*│* ✎ .wm <packname>|<author>
╰───────────────╯

╭──╼•⌠ • ᴛᴏᴏʟs • ⌡•╾──╮
*│* ✎ .letra *<texto>*
*│* ✎ .fake
*│* ✎ .hd
*│* ✎ .detectar
*│* ✎ .clima *<ciudad/país>*
*│* ✎ .join
*│* ✎ .nuevafotochannel
*│* ✎ .nosilenciarcanal
*│* ✎ .silenciarcanal
*│* ✎ .noseguircanal
*│* ✎ .seguircanal 
*│* ✎ .avisoschannel 
*│* ✎ .resiviravisos 
*│* ✎ .inspect 
*│* ✎ .inspeccionar 
*│* ✎ .eliminarfotochannel 
*│* ✎ .reactioneschannel 
*│* ✎ .reaccioneschannel 
*│* ✎ .nuevonombrecanal 
*│* ✎ .nuevadescchannel
*│* ✎ .setavatar
*│* ✎ .setbanner
*│* ✎ .seticono
*│* ✎ .setmoneda
*│* ✎ .setname nombre1/nombre2
*│* ✎ .cal *<ecuacion>*
*│* ✎ .horario
*│* ✎ .read
*│* ✎ .traducir <idoma>
*│* ✎ .say
*│* ✎ .whatmusic <audio/video>
*│* ✎ .paisinfo
*│* ✎ .ssweb
*│* ✎ .tamaño *<cantidad>*
*│* ✎ .document *<audio/video>*
*│* ✎ .translate
*│* ✎ .up
*│* ✎ .enhance
*│* ✎ .wikipedia
╰───────────────╯

╭──╼•⌠• ɢʀᴜᴘᴏs •⌡•╾──╮
*│* ✎ .admins
*│* ✎ .agregar
*│* ✎ .advertencia <@user>
*│* ✎ .delwarn
*│* ✎ .grupo abrir / cerrar
*│* ✎ .group open / close
*│* ✎ .delete
*│* ✎ .demote <@user>
*│* ✎ .promote <@user>
*│* ✎ .encuesta <text|text2>
*│* ✎ .kickfantasmas
*│* ✎ .gpbanner
*│* ✎ .gpdesc
*│* ✎ .gpname
*│* ✎ .hidetag
*│* ✎ .infogrupo
*│* ✎ .kick <@user>
*│* ✎ .kicknum
*│* ✎ .listonline
*│* ✎ .link
*│* ✎ .listadv
*│* ✎ .mute
*│* ✎ .unmute
*│* ✎ .config
*│* ✎ .restablecer
*│* ✎ .setbye
*│* ✎ .setwelcome
*│* ✎ .testwelcome
*│* ✎ .setemoji <emoji>
*│* ✎ .invocar *<mensaje opcional>*
╰───────────────╯

╭──╼•⌠ • ɴsғᴡ • ⌡•╾──╮
*│* ✎ .sixnine/69 @tag
*│* ✎ .anal/culiar @tag
*│* ✎ .blowjob/mamada @tag
*│* ✎ .boobjob/rusa @tag
*│* ✎ .cum/leche @tag
*│* ✎ .fap/paja @tag
*│* ✎ .follar @tag
*│* ✎ .fuck/coger @tag
*│* ✎ .footjob/pies @tag
*│* ✎ .fuck2/coger2 @tag
*│* ✎ .grabboobs/agarrartetas @tag
*│* ✎ .grop/manosear @tag
*│* ✎ .penetrar @user
*│* ✎ .lickpussy/coño @tag
*│* ✎ .r34 <tag>
*│* ✎ .sexo/sex @tag
*│* ✎ .spank/nalgada @tag
*│* ✎ .suckboobs/chupartetas @tag
*│* ✎ .violar/perra @tag
*│* ✎ .lesbianas/tijeras @tag
*│* ✎ .pack
*│* ✎ .tetas
*│* ✎ .undress/encuerar
╰───────────────╯

╭──╼•⌠• ᴏᴡɴᴇʀ •⌡•╾──╮
*│* ✎ .addcoins *<@user>*
*│* ✎ .addowner / delowner
*│* ✎ .addprem [@user] <days>
*│* ✎ .añadirxp
*│* ✎ .copia
*│* ✎ .autoadmin
*│* ✎ .banuser <@tag> <razón>
*│* ✎ .banlist
*│* ✎ .bcgc
*│* ✎ .block / unblock
*│* ✎ .blocklist
*│* ✎ .chetar *@user* / *<número>*
*│* ✎ .cleartmp
*│* ✎ .creargc
*│* ✎ .deletefile
*│* ✎ .delprem <@user>
*│* ✎ .deschetar *@user* / *<número>*
*│* ✎ .dsowner
*│* ✎ .=>
*│* ✎ .>
*│* ✎ .$
*│* ✎ .fetch
*│* ✎ .getplugin
*│* ✎ .grouplist
*│* ✎ .salir
*│* ✎ .let
*│* ✎ .prefix [prefix]
*│* ✎ .quitarcoin *<@user>* / all
*│* ✎ .quitarxp *<@user>*
*│* ✎ .resetprefix
*│* ✎ .restablecerdatos
*│* ✎ .restart / reiniciar
*│* ✎ .reunion
*│* ✎ .savefile <ruta/nombre>
*│* ✎ .saveplugin
*│* ✎ .setcmd *<texto>*
*│* ✎ .delcmd
*│* ✎ .listcmd
*│* ✎ .setimage
*│* ✎ .setstatus <teks>
*│* ✎ .spam2
*│* ✎ .unbanuser <@tag>
*│* ✎ .ip <alamat ip>
*│* ✎ .update / fix
╰───────────────╯

╭──╼•⌠• ɪᴀ - ᴀɪ •⌡•╾──╮
*│* ✎ .dalle
*│* ✎ .demo *<texto>*
*│* ✎ .flux *<texto>*
*│* ✎ .gemini
*│* ✎ .ia
*│* ✎ .llama
*│* ✎ .simi
╰───────────────╯

╭╼•⌠•ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs•⌡•╾╮
*│* ✎ .tourl <imagen>
*│* ✎ .catbox
*│* ✎ .tourl3
*│* ✎ .togifaud
*│* ✎ .tomp3
*│* ✎ .tovideo
*│* ✎ .tts
*│* ✎ .tts2
╰───────────────╯

> ${dev}
  `.trim();

    await conn.sendMessage(m.chat, {
      image: { url: randomImage },
      caption: menu,
      contextInfo: { 
        mentionedJid: [m.sender], 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
          newsletterJid: 'channel@example.com', 
          newsletterName: 'Canal Oficial', 
          serverMessageId: -1, 
        }, 
        forwardingScore: 999, 
        externalAdReply: { 
          title: botname, 
          body: dev, 
          thumbnailUrl: perfil, 
          sourceUrl: redes, 
          mediaType: 1, 
          renderLargerThumbnail: false 
        }
      }
    })

    await m.react(emojis)    
    
    /*let menuText = textFinal.trim() + "\n\n🔹 Selecciona una opción:";

    const buttons = [
      {
        buttonId: `${_p}owner`,
        buttonText: { displayText: "🍭 Ｃ Ｒ Ｅ Ａ Ｄ Ｏ Ｒ" },
        type: 1,
      },
      {
        buttonId: `${_p}code`,
        buttonText: { displayText: "🍓 Ｓ Ｅ Ｒ Ｂ Ｏ Ｔ" },
        type: 1,
      },      {
        buttonId: `${_p}grupos`,
        buttonText: { displayText: "🍹 Ｇ Ｒ Ｕ Ｐ Ｏ Ｓ" },
        type: 1,
      },
    ];

    //let img = 'https://qu.ax/JznsE.jpg';
    //await m.react('⚽️');

    await conn.sendMessage(
      m.chat,
      {
        image: { url: images },
        caption: menu,
        buttons: buttons,
        footer: "WHATSAPP BOT",
        viewOnce: true,
      },
      { quoted: m }
    ); */
  } catch (e) {
    await m.reply(`✘ Ocurrió un error al enviar el menú\n\n${e}`)
    await m.react(error)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}