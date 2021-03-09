const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { nsfwmenu } = require('./lib/nsfwmenu')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./language')
const { apikey } = JSON.parse(fs.readFileSync('./config.json'))
const FormData = require('form-data')
/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:MRoy25\n' 
            + 'ORG: OWNER AZKABOT;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6281215524272:+62 812-1552-4272\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '+'
limitawal = 20
memberlimit = 2
cr = '*BOT INI SUDAH TERVERIFIKASI*'
/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["6281215524272@s.whatsapp.net","6281215524272@s.whatsapp.net"] 
/************************************/

/******** PREM NUMBER**********/
const premNumber = ["6282171732892@s.whatsapp.net"]
/************************************/
       
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const anime = JSON.parse(fs.readFileSync('./database/group/anime.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/group/bucin.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
               
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		}
		
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('ampibi gaming','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}*  . jangan lupa baca rule . yg sopan ama sepuh .yang betah ya di sini \n ┗━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━━┛`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const speed = require('performance-now')
            const auto = budy.toLowerCase()
            const argsjoin = args.join(' ')
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBadWord = isGroup ? badword.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		if (auto.match('@6289625570900')){
	        const magw = fs.readFileSync('./src/tag.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('bokep')){
	        const magw = fs.readFileSync('./src/bokep.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('kok bisa')){
	        const magw = fs.readFileSync('./src/wah kok bisa.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('tolol')){
	        const magw = fs.readFileSync('./src/bot5.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('goblok')){
	        const magw = fs.readFileSync('./src/bot5.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('gblk')){
	        const magw = fs.readFileSync('./src/bot5.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('bangsat')){
	        const magw = fs.readFileSync('./src/bot5.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('lolicon')){
	        const magw = fs.readFileSync('./src/lolicon.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
	if (auto.match('bgst')){
	        const magw = fs.readFileSync('./src/bot5.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
			     if (auto.match('bot')){
		        const magw = fs.readFileSync('./src/bot2.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		        }
		     if (auto.match('ultah')){
		        const ultah = fs.readFileSync('./src/ultah.opus');
                        client.sendMessage(from, ultah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		        }
		     if (auto.match('gaktau')){
		        const gaktau = fs.readFileSync('./src/gaktau.opus');
                        client.sendMessage(from, gaktau, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		        }
		if (auto.match('azka')){
		        const magw = fs.readFileSync('./src/azka.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
			if (auto.match('ara ara')){
		        const magw = fs.readFileSync('./src/ara ara.m4a');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
			if (auto.match('gak bisa basa')){
		        const magw = fs.readFileSync('./src/gakbisa.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
			if (auto.match('iri bilang bos')){
		        const magw = fs.readFileSync('./src/iri bilang bos.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
			if (auto.match('tapi boong')){
		        const magw = fs.readFileSync('./src/tapi boong.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
			if (auto.match('yamet')){
		        const magw = fs.readFileSync('./src/yamette.m4a');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
			if (auto.match('oni chan')){
		        const magw = fs.readFileSync('./src/bot2.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
                        if (auto.match('memek')){
		        const magw = fs.readFileSync('./src/megammek.mp3');
                        client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                        }
		if (auto.match('bot')){
        client.sendMessage(from, 'pasti mau nyuruh 🐦.\n tekan  +menu  untuk melihat menu ','ada masalah apa bro, tekan  ${prefix}menu  untuk melihat menu', text, { quoted: mek })
		}
		if (auto.match('cekprefix')){
        client.sendMessage(from, '*Prefix yang digunakan saat ini adalah ❬ + ❭* ', text, { quoted: mek })
		}
		if (auto.match('@6281215524272')){
        client.sendMessage(from, 'ngapain kamu tag pacarku !', text, { quoted: mek })
		}
		if (auto.match('asalamu')){
        client.sendMessage(from, 'waalaikumussalam senpai ! ', text, { quoted: mek })
		}
		if (auto.match('assalamu')){
        client.sendMessage(from, 'waalaikumussalam senpai !', text, { quoted: mek })
		}
		if (auto.match('astolfo')){
        client.sendMessage(from, 'Hmm... wangyy wangyy !!! ', text, { quoted: mek })
		}
		if (auto.match('roy')){
        client.sendMessage(from, 'kimoochi ! ', text, { quoted: mek })
		}
		if (auto.match('terima kasih')){
        client.sendMessage(from, 'Sama-sama senpai ! ', text, { quoted: mek })
		}
		if (auto.match('terima ksh')){
        client.sendMessage(from, 'Sama-sama senpai ! ', text, { quoted: mek })
		}
		if (auto.match('trims')){
        client.sendMessage(from, 'Sama-sama senpai ! ', text, { quoted: mek })
		}
		if (auto.match('thx')){
        client.sendMessage(from, 'Sama-sama senpai ! ', text, { quoted: mek })
		}
		if (auto.match('thank')){
        client.sendMessage(from, 'Sama-sama senpai ! ', text, { quoted: mek })
		}
		if (auto.match('arigat')){
        client.sendMessage(from, 'Sama-sama senpai ! ', text, { quoted: mek })
		}
		if (auto.match('wibu')){
        client.sendMessage(from,'dasar bau bawang ! ', text, { quoted: mek })
		}
		if (auto.match('pagi')){
        client.sendMessage(from, 'Selamat pagi juga senpai 🌞 ', text, { quoted: mek })
		}
		if (auto.match('malam')){
        client.sendMessage(from, 'Selamat malam juga senpai 🌚 ', text, { quoted: mek })
		}
		if (auto.match('ajg')){
        client.sendMessage(from, 'lu mau gw pukul ', text, { quoted: mek })
		}
	        /*****************END SCURITY FEATURE ********/
			
			expiredCheck()
			
   
			var premi = '*X*'
			if (isPrem) {
				premi = '*✓*'
			} 
			if (isOwner) {
				premi = '*owner*'
			}
			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
      //function Badword
 	   	if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! Nanti dipukul nangis")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan. nanti admin dipukul nangis")
                }
            }
        }

            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 100
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
           
           //function antilink 
				if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (!isOwner) return reply(satu percubaan yg mantap. Tidak bisa kick owner)
					if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`)
						client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}
 	       
            
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'speed':
                case 'ping':
                    const timestampp = speed();
                    const latensii = speed() - timestampp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `🏓 PONG! •\n\n Speed: *${latensii.toFixed(4)} Sec`, text, { quoted: mek})
                    break
             case 'pong':
                    const tmestampp = speed();
                    const ltensii = speed() - tmestampp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `🏓 PING! •\n\n Speed: *${ltensii.toFixed(4)} Sec`, text, { quoted: mek})
                    break
				case 'bug':
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const zeks = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: zeks,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6281215524272@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Laporan kamu telah di sampaikan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    await limitAdd(sender)
                    break
               case 'req':
                     const request = body.slice(5)
                      if (request.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const tuks = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan Request : ${request}`
                      var options = {
                         text: tuks,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6281215524272@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Request kamu telah di laporkan ke owner BOT, Nanti akan ditindak lanjuti')
                    await limitAdd(sender)
                    break
             case 'runtime':
                                        runtime = process.uptime()
						ttuks = `${(`━━━━「 *RUNTIME* 」━━━━\n\n◪ ${kyun(runtime)}`)}`
						client.sendMessage(from, `${ttuks}`, MessageType.text, {quoted: mek})
    						break
         case 'join':
				if (isGroup) return  reply( 'cuman bisa di personal chat,kalo di grup nanti kenak marah admin :v')
					client.sendMessage(from, join(), text)
					break
		 case 'nsfwmenu':
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        client.sendMessage(from, nsfwmenu(), text)
                                        break
           //textmaker
           case 'ytkomen':
                                         if (isLimit(sender)) return reply(ind.limitend(pusname))
                                                if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
                 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ytcomment?apikey=${apikey}&username=${kk1}&comment=${kk2}&img=https://
i.ibb.co/TMnMvhS/IMG-20210226-WA0118.jpg`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
    case 'ytkomen1':
                                         if (isLimit(sender)) return reply(ind.limitend(pusname))
                                                if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
                 kk2 = txt.split("|")[1];
                 kk3 = txt.split("|")[2];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ytcomment?apikey=${apikey}&username=${kk1}&comment=${kk2}&img=${kk3}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'valorant':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    kk3 = txt.split("|")[2];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=${apikey}&text1=${kk1}&text2=${kk2}&text3=${kk3}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
         case 'codwarzone':
         case 'juventusshirt':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto2/${command}?apikey=${apikey}&text1=${kk1}&text2=${kk2}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
		case 'tiktok':
		case 'battlefield4':
		case 'pubg':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy2/${command}?apikey=${apikey}&text1=${kk1}&text2=${kk2}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
		case 'bannerlol':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy3/${command}?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
		case 'ttp2':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    await limitAdd(sender)
                    break
              case 'ttp':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp2?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                case 'christmas':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
          case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break 
          case 'wallgravity':
           case 'steel3d':
           case 'wolflogo':
           case 'lionlogo':
           case 'ninjalogo':
           case 'space':
           case 'avenger':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/${command}?apikey=${apikey}&text1=${kk1}&text2=${kk2}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
         case 'marvel':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/marvelstudio?apikey=${apikey}&text1=${kk1}&text2=${kk2}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
         case 'phub':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/pornhub?apikey=${apikey}&text1=${kk1}&text2=${kk2}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break  
               case 'tolol':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
						txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/nulis?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
case 'nulis':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
						txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/nulis?apikey=${apikey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
case 'memegen':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/memegen?apikey=${apikey}&texttop=${kk1}&textbottom=${kk2}&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'meme1':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    kk3 = txt.split("|")[2];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/memegen?apikey=${apikey}&texttop=${kk1}&textbottom=${kk2}&img=${kk3}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
          case 'amongus':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/amongus?apikey=azka25&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break 
case 'smoke':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://api.xteam.xyz/photooxy/smoke?text=${txt}&APIKEY=f0253c3792f12d4d`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break 
       case 'smoke2':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://api.xteam.xyz/photooxy/smoke2?text=${txt}&APIKEY=f0253c3792f12d4d`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break 
           case 'wolfmetal':
					 if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://api.xteam.xyz/photooxy/wolfmetal?text=${txt}&APIKEY=f0253c3792f12d4d`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break 
		//mode anime
				case 'modeanime':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./database/group/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'disable') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/group/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('enable atau disable. bakaaa !')
					}
					break
		case 'oanime':
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('pilih enable atau disable senpai!')
					if ((args[0]) === 'enable') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./database/group/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'disable') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/group/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('enable atau disable senpai !')
					}
					break
				case 'naruto':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'minato':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'rize':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
			case 'akira':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'itori':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(ind.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'itsuki':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=itsuki%20nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'yotsuba':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=yotsuba%20nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'miku':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=miku%20nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'ichika':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=ichika%20nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'nino':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=nino%20nakano`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'ainzsama':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=ainz%20ooal%20gown`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'albedo':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=albedo%20overlord`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'chitoge':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=chitoge%20kirisaki`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'astolfo':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=astolfo%20fgo`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
            case 'felix':
                            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=felix%20argyle`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'kaneki':
                             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=kaneki%20ken`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'sagiri':
                             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=sagiri%20chan`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'kurumi':
                             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=kurumi%20tokisaki`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'megumin':
                             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=megumin%20kawai`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                           case 'inugami':
                             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=inugami%20korone`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
		//nsfw menu
		             case 'nhcode':
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				if (args.length < 1) return reply('kode nuklir nya mana senpai ?')
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    txt = `Title Romaji : ${get_result.title_romaji}\n`
                    txt += `Title Native : ${get_result.title_native}\n`
                    txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    txt += `Parodies : ${get_info.parodies}\n`
                    txt += `Character : ${get_info.characters}\n`
                    txt += `Tags : ${get_info.tags}\n`
                    txt += `Artist : ${get_info.artists}\n`
                    txt += `Group : ${get_info.groups}\n`
                    txt += `Languager : ${get_info.languages}\n`
                    txt += `Categories : ${get_info.categories}\n`
                    txt += `Pages : ${get_info.pages}\n`
                    txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(txt)
                    await limitAdd(sender)
                    break
           case 'nhentaipdf':
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				if (args.length < 1) return reply('kode nuklir nya mana senpai ?')
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result)
                    client.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}  by Azkabot.pdf` })
                    await limitAdd(sender)
                    break
         case 'nhentai':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                if (args.length < 1) return reply('kode nuklir nya mana senpai ?')
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=azka25`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result)
                    client.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid} by Azkabot.pdf` })
                    await limitAdd(sender)
                    break
                case 'nhsearch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				if (args.length < 1) return reply('kode nuklir nya mana senpai ?')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Code : ${get_result[x].id}\n`
                        txt += `Title English : ${get_result[x].title_english}\n`
                        txt += `Title Japanese : ${get_result[x].title_japanese}\n`
                        txt += `Title Native : ${get_result[x].title_native}\n`
                        txt += `Date Upload : ${get_result[x].date_upload}\n`
                        txt += `Page : ${get_result[x].page}\n`
                        txt += `Favourite : ${get_result[x].favourite}\n\n➖➖➖➖➖➖➖➖➖\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                case 'xnxxsearch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                case 'xnxx':
                f (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                   if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    txt  = `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.title}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Comment : ${get_result.comment}\n`
                    txt += `Tag : ${get_result.tag.join(", ")}\n`
                    txt += `Description : ${get_result.description}\n`
                    txt += "Link : \n"
                    link = get_result.link
                    for (var x in link) {
                        txt += `${link[x].type} - ${link[x].link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'anal':
                case 'tits':
                case 'ero':
                case 'cum':
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                     case 'futanari': 
  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://nekos.life/api/v2/img/futanari`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'RANDOM FUTANARI '})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝗘𝗥𝗥𝗢𝗥')
					}
					await limitAdd(sender)
					break
  case 'trap2': 
  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://nekos.life/api/v2/img/trap`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hmm... bau-bau Gheyyy ! '})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝗘𝗥𝗥𝗢𝗥')
					}
					await limitAdd(sender)
					break
					  case 'solog': 
  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://nekos.life/api/v2/img/solog`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'RANDOM solog'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝗘𝗥𝗥𝗢𝗥')
					}
					await limitAdd(sender)
					break
					  case 'randomhentai':
           if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwloli':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwneko':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwwaifu':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwtrap':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwyaoi':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwblowjob':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwhentai':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwneko2':
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
					if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
				    try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'RANDOM NSFW NEKO'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('âŒ *ERROR* âŒ')
					}
					break
		case 'nsfwpanties':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`https://api.xteam.xyz/randomimage/panties?APIKEY=f0253c3792f12d4d`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
 case 'nsfwuniform':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`https://api.xteam.xyz/randomimage/uniform?APIKEY=f0253c3792f12d4d`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
 case 'nsfwtentacles':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`https://api.xteam.xyz/randomimage/tentacles?APIKEY=f0253c3792f12d4d`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'ahegao':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'femdom':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'lewd':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'hololewd':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
              case 'sideoppai':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwbooty':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwthight':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwarmpits':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'nsfwfeets':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
					case 'bkp':
				case 'bokep':
                                client.updatePresence(from, Presence.composing)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                if (!isGroup) return reply(ind.groupo())
                                if (!isNsfw) return reply(ind.nsfwoff())
                                reply(ind.wait)
                                 data = fs.readFileSync('./AZKA/18+.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 bokep = await getBuffer(randKey.image)
                 randTeks = randKey.teks
                 client.sendMessage(from, bokep, image, {quoted: mek, caption: randTeks})
                                await limitAdd(sender)
                                break
			//imagesearch
			case 'konachan':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${apikey}&query=${query}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
			 case 'pinterest':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`MAU CARI APA SENPAI !!!`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'pinterestdl':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length == 0) return reply(`MASUKKAN LINK PINTEREST NYA SENPAI !!!`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestdl?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result["736x"]
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'pixiv':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`MAU CARI APA SENPAI !!!`)
                    query = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${apikey}&query=${query}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'pixivdl':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`MASUKKAN ID PIXIV NYA SENPAI !!!`)
                    query = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
         //animemenu
			case 'wait':
					case 'whatanime':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
		case 'wait2':
		case 'whatanime2':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia);
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${apikey}`, {...options })
                        get_result = get_result.result
                        console.log(get_result)
                        ini_video = await getBuffer(get_result.video)
                        txt = `Anilist id : ${get_result.anilist_id}\n`
                        txt += `MAL id : ${get_result.mal_id}\n`
                        txt += `Title Romaji : ${get_result.title_romaji}\n`
                        txt += `Title Native : ${get_result.title_native}\n`
                        txt += `Title English : ${get_result.title_english}\n`
                        txt += `at : ${get_result.at}\n`
                        txt += `Episode : ${get_result.episode}\n`
                        txt += `Similarity : ${get_result.similarity}`
                        client.sendMessage(from, ini_video, video, { quoted: mek, caption: txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'anime':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_title = get_result.title
                    get_coverImage = get_result.coverImage
                    txt = `ID : ${get_result.id}\n`
                    txt += `IDMAL : ${get_result.idMal}\n`
                    txt += `Romaji : ${get_title.romaji}\n`
                    txt += `English : ${get_title.english}\n`
                    txt += `Native : ${get_title.native}\n`
                    txt += `Format : ${get_result.format}\n`
                    txt += `Episodes :\n ${get_result.episodes}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Status :\n ${get_result.status}\n`
                    txt += `Season : ${get_result.season}\n`
                    txt += `Season Year :\n ${get_result.seasonYear}\n`
                    txt += `Source : ${get_result.source}\n`
                    txt += `Genre :\n ${get_result.genres}\n`
                    txt += `Start Date : ${get_result.startDate}\n`
                    txt += `End Date :\n ${get_result.endDate}\n`
                    txt += `Average Score : ${get_result.averageScore}\n`
                    txt += `Description :\n ${get_result.description}\n`
                    txt += `Synonims : ${get_result.synonyms}\n`
                    buffer = await getBuffer(get_coverImage.large)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
           case 'manga':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_title = get_result.title
                    get_coverImage = get_result.coverImage
                    txt = `ID : ${get_result.id}\n`
                    txt += `IDMAL : ${get_result.idMal}\n`
                    txt += `Romaji : ${get_title.romaji}\n`
                    txt += `English : ${get_title.english}\n`
                    txt += `Native : ${get_title.native}\n`
                    txt += `Format : ${get_result.format}\n`
                    txt += `Chapters :\n ${get_result.chapters}\n`
                    txt += `Volume : ${get_result.volumes}\n`
                    txt += `Status :\n ${get_result.status}\n`
                    txt += `Source : ${get_result.source}\n`
                    txt += `Genre :\n ${get_result.genres}\n`
                    txt += `Start Date : ${get_result.startDate}\n`
                    txt += `End Date :\n ${get_result.endDate}\n`
                    txt += `Average Score : ${get_result.averageScore}\n`
                    txt += `Description :\n ${get_result.description}\n`
                    txt += `Synonims : ${get_result.synonyms}\n`
                    buffer = await getBuffer(get_coverImage.large)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
           case 'chara':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_name = get_result.name
                    get_image = get_result.image
                    txt = `ID : ${get_result.id}\n`
                    txt += `Name Full : ${get_name.full}\n`
                    txt += `Native : ${get_name.native}\n`
                    txt += `Favourites : ${get_result.favourites}\n`
                    txt += `Description :\n ${get_result.description}\n`
                    buffer = await getBuffer(get_image.large)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
              case 'mangabatch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${query}&apikey=onlyonedeveloper`)
                    get_result = get_result.result
                    get_downloads = get_result.downloads
                    txt = ""
                    txt  += `   SUMBER DARI WEB https://www.meganebuk.net\n\n`
                    txt  += `Title : ${get_result.title}\n`
                    txt  += `Name : ${get_result.name}\n`
                    txt  += `Type : ${get_result.type}\n`
                    txt  += `Author : ${get_result.author}\n`
                    txt  += `Genre : ${get_result.genre}\n`
                    txt  += `Rating : ${get_result.rating}\n`
                    txt  += `Release : ${get_result.released}\n`
                    txt  += `Status : ${get_result.status}\n\n`
                    txt  += `     LINK DOWNLOAD BATCH PDF\n\n`
                    for (var x in get_downloads) {
                        txt += `Batch : ${get_downloads[x].date}\n`
                        txt += `From : ${get_downloads[x].title}\n`
                        txt += `Link : ${get_downloads[x].link}\n\n`
                        }
                    thumbnail = await getBuffer(get_result.thumb)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
			case 'neonime':
                                        client.updatePresence(from, Presence.composing)
                                        data = await fetchJson(`https://dts-eddie.herokuapp.com/neolatest`, {method: 'get'})
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
                                        teks = '*UPDATE ANIME TERBARU WEB NEONIME.COM*\n\n'
                                        for (let i of data.result) {
                                                teks += `*Judul* : ${i.title}\n*deskripsi* : ${i.desc}\n*rilis* : ${i.date}\n*link* : ${i.link}\n\n➖➖➖➖➖➖➖➖➖\n\n`
                                        }
                                        reply(teks.trim())
                                        await limitAdd(sender)                                                                                                                                                                                                                                                                            
                                         break
                case 'neosearch':
                                        client.updatePresence(from, Presence.composing)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
                                        if (args.length < 1) return reply('teks nya mana senpai ?')
                                        txt = args[0]
                                        data = await fetchJson(`https://dts-eddie.herokuapp.com/neonime?q=${txt}`, {method: 'get'})
                                        teks = '*NEONIME SEARCHING ANIME*\n\n'
                                        for (let i of data.result) {
                                                teks += `*Judul* : ${i.title}\n*deskripsi* : ${i.desc}\n*link* : ${i.link}\n\n➖➖➖➖➖➖➖➖➖\n\n`
                                        }
                                        reply(teks.trim())
                                        await limitAdd(sender)                                                                                                                                                                                                                                                                            
                                         break
                         case 'loli':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/loli?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'shota':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/shota?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'waifu':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/waifu?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'husbu':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/husbu?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'fanart':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/art?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'wpanime':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/wallnime?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'elf':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/loli?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
					 case 'wpanime2': 
  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				    try {
						res = await fetchJson(`https://nekos.life/api/v2/img/wallpaper`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'RANDOM WALPAPER ANIME'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝗘𝗥𝗥𝗢𝗥')
					}
					await limitAdd(sender)
					break
					  case 'foxnime': 
  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				    try {
						res = await fetchJson(`https://nekos.life/api/v2/img/fox_girl`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'RANDOM FOX GIRL ANIME'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝗘𝗥𝗥𝗢𝗥')
					}
					await limitAdd(sender)
					break
           case 'waifu2':
           data = await fetchJson('https://waifu.pics/api/sfw/waifu')
           reply(ind.wait)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           if (!isGroup) return reply(ind.groupo())
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, caption: '*CINTAI WAIFUMU*'})
           await limitAdd(sender)
           break
                  case 'neko':
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           reply(ind.wait)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           if (!isGroup) return reply(ind.groupo())
           hasil = await getBuffer(data.url)
           client.sendMessage(from, hasil, image, {quoted: mek, caption: '*RANDOM NEKO*'})
           await limitAdd(sender)
           break
				case 'baka':
                case 'smug':
                case 'tickle':
                case 'poke':
                case 'cuddle':
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
	       //kuso+otaku     
            case 'kusonime':
            if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                case 'kusosearch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                case 'otakudesu':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                case 'otakusearch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break 
		//bucin
				case 'addbucin':
				if (!isOwner) return reply(ind.ownerb())
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    client.sendMessage(from, '"'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
                    break
				//premiom
				case 'giftlimit': 
				case 'gift':
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6281215524272 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}

━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
          case 'lk21':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_thumbnail = get_result.thumbnail
                    txt = `Title : ${get_result.title}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Views : ${get_result.views}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Language : ${get_result.language}\n`
                    txt += `Tahun : ${get_result.tahun}\n`
                    txt += `Date Release : ${get_result.date_release}\n`
                    txt += `Aktor : ${get_result.actors}\n`
                    txt += `Description : ${get_result.desc}\n`
                    txt += `Link : ${get_result.link}\n`
                    txt += `Link Download : ${get_result.link_dl}`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
           case 'Drakor':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/drakorongoing?apikey=${apikey}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Kategori : ${get_result[x].category}\n`
                        txt += `Genre : ${get_result[x].genre}\n`
                        txt += `Total Episode : ${get_result[x].total_episode}\n`
                        txt += `Year : ${get_result[x].year}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
        case 'filmapik':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    query = args.join(" ")
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/filmapik?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `ID : ${get_result[x].id}\n`
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Rating : ${get_result[x].rating}\n`
                        txt += `Quality : ${get_result[x].quality}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Genre : ${get_result[x].genre}\n`
                        txt += `Director : ${get_result[x].director}\n`
                        txt += `Actor : ${get_result[x].actors}\n`
                        txt += `Country : ${get_result[x].country}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Release : ${get_result[x].release}\n`
                        txt += `Trailer : ${get_result[x].trailer}\n`
                        txt += `Description : ${get_result[x].description}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnailPotrait}\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
          case 'playmp3':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.uploader}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.view}\n`
                    txt += `Like : ${get_info.like}\n`
                    txt += `Dislike : ${get_info.dislike}\n`
                    txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
                    case 'playmp4':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.uploader}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.view}\n`
                    txt += `Like : ${get_info.like}\n`
                    txt += `Dislike : ${get_info.dislike}\n`
                    txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_video = await getBuffer(get_result.video[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break
           case 'joox':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('teks nya mana senpai ?')
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Singer : ${get_info.singer}\n`
                    txt += `Song : ${get_info.song}\n`
                    txt += `Album : ${get_info.album}\n`
                    txt += `Date : ${get_info.date}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    buffer = await getBuffer(get_result.image)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.audio[1].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
                case 'ytmp3':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('link youtube nya mana senpai ?')
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
                case 'ytmp4':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return reply('link youtube nya mana senpai ?')
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break
                    case 'telesticker':
                    if (args.length < 1) return reply('url nya mana senpai ?')
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await getBuffer(ini_sticker[sticker_])
                        client.sendMessage(from, buffer, sticker)
                    }
                    break
                case 'igdl':
                if (args.length < 1) return reply('url nya mana senpai ?')
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                if (args.length < 1) return reply('url nya mana senpai ?')
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, video, { quoted: mek })
                    break
				case 'quotes':
				client.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				 data = fs.readFileSync('./AZKA/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 client.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'readmore':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('teks nya mana senpai ?')
					var kls = body.slice(9)
					var has = kls.split("|")[0];
					var kas = kls.split("|")[1];
					if (args.length < 1) return reply(ind.blank)
					client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'asupan':
				client.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				reply(ind.wait)
				 data = fs.readFileSync('./AZKA/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asupan = await getBuffer(randKey.result)
                 client.sendMessage(from, asupan, video, {quoted: mek, caption: '\`\`\`ASUPAN GAN:V\`\`\`'})
				await limitAdd(sender) 
				break
				case 'darkjokes':
				case 'jokes':
				client.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				reply(ind.wait)
				 data = fs.readFileSync('./AZKA/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 client.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`NIH BANG\`\`\`'})
				await limitAdd(sender) 
				break 
		 case 'jadwalbola':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/jadwalbola?apikey=azka25`)
                    get_result = get_result.result
                    txt = ""
                    txt  += `    JADWAL BOLA YANG AKAN DATANG\n\n`
                    for (var x in get_result) {
                        txt += `Hari : ${get_result[x].hari}\n`
                        txt += `Jam : ${get_result[x].jam}\n`
                        txt += `Event : ${get_result[x].event}\n`
                        txt += `Match : ${get_result[x].match}\n`
                        txt += `TV : ${get_result[x].tv}\n\n`
                        }
                         reply(txt)
                    await limitAdd(sender)
                    break
          case 'wattpad':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    get_nextpart = get_result.nextpart
                    txt  = `ID : ${get_result.id}\n`
                    txt += `Title : ${get_result.title}\n`
                    txt += `Deskripsi : ${get_result.desc}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Create Date : ${get_result.createDate}\n`
                    txt += `Modify Date : ${get_result.modifyDate}\n`
                    txt += `Length : ${get_result.length}\n`
                    txt += `Word : ${get_result.word}\n`
                    txt += `Comment : ${get_result.comment}\n`
                    txt += `Vote : ${get_result.vote}\n`
                    txt += `Reader : ${get_result.reader}\n`
                    txt += `Page : ${get_result.pages}\n\n`
                    txt += `Next Part\n`
                    txt += `ID : ${get_nextpart.id}\n`
                    txt += `Title : ${get_nextpart.title}\n`
                    txt += `Url : ${get_nextpart.url}\n`
                    txt += `Rating : ${get_nextpart.rating}\n`
                    txt += `Draft : ${get_nextpart.draft}\n`
                    txt += `Next Page : ${get_result.nextpage}\n`
                    txt += `Prev Page : ${get_result.prevpage}\n\n`
                    txt += `story : ${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.photo)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
             case 'wattpadsearch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `ID : ${get_result[x].id}\n`
                        txt += `Title  : ${get_result[x].title}\n`
                        txt += `Url : ${get_result[x].url}\n\n`
                        txt += `Cover : ${get_result[x].cover}\n`
                        txt += `Length : ${get_result[x].length}\n`
                        txt += `Create Date : ${get_result[x].createDate}\n`
                        txt += `Modify Date : ${get_result[x].modifyDate}\n`
                        txt += `Full Count : ${get_result[x].fullCount}\n`
                        txt += `Read Count : ${get_result[x].readCount}\n`
                        txt += `Comment Count : ${get_result[x].commentCount}\n`
                        txt += `Tags : ${get_result[x].date_tags}\n`
                        txt += `Description : ${get_result[x].description}\n\n➖➖➖➖➖➖➖➖➖\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break 
             case 'tiktoknowm':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Description : ${get_result.description}\n`
					reply(txt)
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break
           case 'tiktokwm':
                    query = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/tiktokwm?apikey=${apikey}&url=${query}`)
                    client.sendMessage(from, buffer, video, { quoted: mek })
                    break  
          case 'tiktokmusic':
                    query = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${query}`)
                    client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
                    break    
         case 'googlesearch':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Description : ${get_result[x].desc}\n\n➖➖➖➖➖➖➖➖➖\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
        case 'googleimage';
        case 'gimage':
               if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${query}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'twittervid':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    txt  = `Twitter Download Video`
                    get_audio = await getBuffer(get_result[2].link)
                    client.sendMessage(from, get_audio, video, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break  
             case 'soundcloud':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/soundcloud?apikey=${apikey}&url=${ini_url}`)
                     get_result = get_result.result
                     get_title = get_result.title
                     get_audio = await getBuffer(get_result)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_title}.mp3`,  quoted: mek })
                    break
		 case 'bts':
             if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/bts?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break 
              case 'exo':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/exo?apikey=${apikey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
           case 'pantun':
          case 'faktaunik':
          case 'katabijak':
           if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
                    txt = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
                    reply(txt.result)
                    await limitAdd(sender)
                    break
          case 'wiki':
           if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						query = args[0]
                    txt = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
                    reply(txt.result)
                    await limitAdd(sender)
                    break
         case 'cerpen':
          if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isGroup) return reply(ind.groupo())
						cerpen = await fetchJson(`https://lolhuman.herokuapp.com/api/cerpen?apikey=${apikey}`)
						cerpen = cerpen.result
                    Title = cerpen.title
                    Creator = cerpen.creator
                    Cerpen = cerpen.cerpen
                    reply(`-Judul : ${Title}\n-Pengarang : ${Creator}\n\n-Isi Cerpen :  ${Cerpen}`)
                    await limitAdd(sender)
                    break
					case 'watak':
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
					break 
				case 'hobby':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					hob =["Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri","memancing","godain anak orang","buat baper anak orang","main layang-layang","mainin hati orang"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'ytsearch':
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
                                        reply(ind.wait())
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(ind.wait)
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/ytsearch?apikey=${apikey}&query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Title\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Published\`\`\` : *${i.uploadDate}*\n\`\`\`Duration\`\`\` : *${i.duration}*\n\`\`\`Viewers: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Channel:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
					case 'infogc':
				case 'groupinfo':
				case 'infogroup':
				case 'grupinfo':
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
                try {
					ppUrl = await client.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(ind.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
		await limitAdd(sender)
                break
                 case 'ownergrup':
                 case 'ownergroup':
                       if (isLimit(sender)) return reply(ind.limitend(pusname))
                       if (!isGroup) return reply(ind.groupo())
               client.updatePresence(from, Presence.composing)
              options = {
          text: `Hai owner group : @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
           await limitAdd(sender)                           
                   break
        case 'alay':
                    client.updatePresence(from, Presence.composing) 
                    if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                           
                if (!isGroup) return reply(ind.groupo())
                reply(ind.wait)
                    data = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`)
                    reply(data.result)
                    await limitAdd(sender)
                    break
        case 'trendtwit':
                                        client.updatePresence(from, Presence.composing)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
                                        reply(ind.wait)                                                                                                                                     
                                       data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
                                        teks = '=================\n'
                                        for (let i of data.result) {
                              teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
                                        }
                                        reply(teks.trim())
                                        await limitAdd(sender)
                                        break
                case 'toaudio':
                case 'tomp3':
                        client.updatePresence(from, Presence.composing)
                       if (isLimit(sender)) return reply(ind.limitend(pusname))
                       if (!isGroup) return reply(ind.groupo())
                                        if (!isQuotedVideo) return reply('video yang mau di converter ke audio mana senpai !')
                                        reply(ind.wait)
                                        encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        media = await client.downloadAndSaveMediaMessage(encmedia)
                                        ran = getRandom('.mp4')
                                        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                                                fs.unlinkSync(media)
                                                if (err) return reply('❌ yah gagal')
                                                buffer = fs.readFileSync(ran)
                                                client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
                                                fs.unlinkSync(ran)
                                        })
                                                await limitAdd(sender)
                                        break
                       case 'delete':
                        case 'del':
                        case 'unsend':
                              if (isLimit(sender)) return reply(ind.limitend(pusname))
                               if (!isGroup) return reply(ind.groupo())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                                        await limitAdd(sender)
                                        break
                        case 'odelete':
                        case 'odel':
                        case 'ounsend':
                        case 'd':
                               if (!isGroup) return reply(ind.groupo())
                               if (!isOwner) return reply(ind.ownerb())
                                        client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                                        break
                case 'wa.me':
                case 'wame':
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
                   client.updatePresence(from, Presence.composing)
                    options = {
                    text: `「 *SELF WHATSAPP* 」\nlink Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                     contextInfo: { mentionedJid: [sender] }
                          }
                     client.sendMessage(from, options, text, { quoted: mek } )
                      await limitAdd(sender)
                                break
                                if (data.error) return reply(data.error)
                                reply(data.result)
                                break
					case 'kucing':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: 'INI KUCINGMU SENPAI' })
					await limitAdd(sender)
					break
				//qr 
				case 'qrcode':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				//tobz 
				case 'lirik':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`)
				thum = await getBuffer(anu.result.thumb)
				teks = `*「 LAGU DI TEMUKAN 」*\n\n*Judul* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*public in* : ${anu.result.dipublikasi}\n*Lyrics* : ${anu.result.lirik}`
				client.sendMessage(from, thum, image, { quoted : mek, caption: teks })
				break
				case 'ttp3':
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=BotWeA`)
				res = await getBase64(anu.base64)
				client.sendMessage(from, res, sticker, {quoted:mek})
				break
                case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=BotWeA`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'moddroid':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
            case 'bitly':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'nangis':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					 case 'pat':
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/pat', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'spank':
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/spank', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'randomanime':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'RANDOM ANIME'})
					await limitAdd(sender)
					break
                case 'joox2':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				//freerestapi 
				case 'igstalk':
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
				//daftar 
				case 'daftar':
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`Namamu panjang sekali senpai. Ulangi lagi !`)
                if (umurUser > 40) return reply(`Senpai terlalu tua untuk menggunakan bot. kembali muda dulu ! umur maksimal 40 tahun`)
                if (umurUser < 12) return reply(`kamu terlalu muda untuk menggunakan bot. umur minimal 12 tahun`)
                try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
				//terhambar 
				case 'quotemaker':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'INI PESANANMU SENPAI', quoted: mek})
					await limitAdd(sender)
					break
				//fadli 
				
				case 'pokemon':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: 'RANDOM POKEMON' })
					await limitAdd(sender)
					break
                case 'anjing':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: 'KOK MIRIP KAMU SENPAI 😋' })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'semoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'tiktokdl':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args[0]}`, {method : 'get' })
				if (anu.error) return reply(anu.error)
					teks = `*From* : ${anu.result.from}\n*Judul* : ${anu.result.title}\n*Upload* : ${anu.result.uploaded}`
					thumb = await getBuffer(anu.result.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break		
					case 'infonomor':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
				break 
				case 'beritahoax':
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
			    case 'fototiktok':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
				break
				//mhazria 
				case 'resepmasakan':
					if (!isGroup) return reply(ind.groupo())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
				case 'ssweb':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Urlnya mana senpai')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					client.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'map':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
                case 'kbbi':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
				break
                case 'artinama':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
				break
		//premiom
		case 'listprem':
				const krem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
				teks = '*==[ LIST PREM]==*\n'
				for (let prem of krem){
					teks += `┣➢ @${premau.replace('@s.whatsapp.net','')}\n`
				}
				teks += `𝗧𝗼𝘁𝗮𝗹 : ${krem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
                break
		case 'addprem':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
		case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
				var arr = prem
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === hnom) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
	//auto respond 
               case 'help': 
				case 'menu':
				me = client.user
				uptime = process.uptime()
                                    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
                                    const uangku = checkATMuser(sender)
                                        buffer = await getBuffer(me.imgUrl)
                                        client.sendMessage(from, buffer, image, {caption: ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku), text, tescuk, cr})
                                        break
				case 'info':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					me = client.user
					uptime = process.uptime()
					zeks = `*Nama bot* : ${me.name}\nVersion : 4.6\n*Developer* : MRoy25\n*SC asli* : https://github.com/affisjunianto/botwasapv4 \n*Data Bot* : *TELKOMSEL*\n*Jaringan Bot* : *4G LTE*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*User register* : ${_registered.length}\n*Total Block Contact* : ${blocked.length}\n*Runtime* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: zeks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'donasi':
				case 'donate':
					client.sendMessage(from, donasi(), text)
					break
				case 'admin':
         	   case 'owner':
         	   case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Itu nomer pacarku, eh ownerku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
				case 'leaderboard':
				case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'limit':
				if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
				case 'mutual':
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				case 'tranfer':
				if (!isRegistered) return reply(ind.noregis())	
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.05 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6281215524272@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumlah transfer : ${jumblah}\npajak : ${fee}\n┗━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━┛`)
                break
				case 'dompet':
				if (!isRegistered) return reply(ind.noregis())	
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())	
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}\n┗━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━┛`)
				} 
				break
				//no rest api 
				case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (!isGroup) return reply(ind.groupo())
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*RASAIN LU*\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'brainly':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bisakah':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'truth':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break				
				case 'ocr': 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁?? 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼?? ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
				break
				case 'stiker': 
				case 'sticker':
				case 's':
				case 'stickergif':
				case 'stc':
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
				break
				case 'tts':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
				break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) 
					reply(anu)
				break 
				case 'toimg':
				case 'toimage':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: ' *SUKSES CONVERT STICKER TO IMAGE*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break 
				case 'tiktokstalk':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return client.sendMessage(from, '𝘂𝘀𝗲??𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
				break
				//Event
				case 'mining':
				 if (!isRegistered) return reply(ind.noregis())
				  if (!isGroup) return reply(ind.groupo())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh admin/owner`)
                      if (isOwner) {
                      const one = 9999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const mining = Math.ceil(Math.random() * 5000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
					case 'nguli':
					 if (!isRegistered) return reply(ind.noregis())
					  if (!isGroup) return reply(ind.groupo())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf senpai ${pushname} event nguli tidak di aktifkan oleh admin/owner`)
                      if (isOwner) {
                      const one = 9999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner. kami dari team bot mengirim ${one}Xp untuk anda dari hasil nguli`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari hasil nguli. semangat nguli yaa senpai`)
                      }
                    await limitAdd(sender)
					break
				case 'maling':
				 if (!isRegistered) return reply(ind.noregis())
				  if (!isGroup) return reply(ind.groupo())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf senpai ${pushname} event maling tidak di aktifkan oleh admin/owner`)
                      if (isOwner) {
                      const one = 9999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner. kami dari team bot mengirim ${one}Xp untuk anda dari hasil maling`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari hasil maling. semangat maling yaa senpai`)
                      }
                    await limitAdd(sender)
					break
				case 'begal':
				 if (!isRegistered) return reply(ind.noregis())
				  if (!isGroup) return reply(ind.groupo())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf senpai ${pushname} event begal tidak di aktifkan oleh admin/owner`)
                      if (isOwner) {
                      const one = 9999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner. kami dari team bot mengirim ${one}Xp untuk anda dari hasil begal`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari hasil begal. semangat begal yaa senpai`)
                      }
                    await limitAdd(sender)
					break
				case 'korupsi':
				 if (!isRegistered) return reply(ind.noregis())
				  if (!isGroup) return reply(ind.groupo())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf senpai ${pushname} event korupsi tidak di aktifkan oleh admin/owner`)
                      if (isOwner) {
                      const one = 9999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner. kami dari team bot mengirim ${one}Xp untuk anda dari hasil korupsi`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp* dari hasil korupsi. semangat korupsi yaa senpai`)
                      }
                    await limitAdd(sender)
					break
				//group feature 
				case 'linkgc':
				case 'linkgroup':
				case 'grouplink':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'hidetag':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					case 'antilink':
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (!isGroup) return reply(ind.groupo())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('pilih enable atau disable senpai')
					if ((args[0]) === 'enable' ) {
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if ((args[0]) === 'disable' ) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
					case 'fitnah':
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
				 if (!isGroup) return reply(ind.groupo())
				   if (!isGroupAdmins) return reply(ind.admin())
                 if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'f':
				 if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
                 if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
				case 'level':
				case 'profile':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━┛`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break 
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				//admin feature
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/??𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if ((args[0]) === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break 
					case 'grup':
				case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*BERHASIL MENUTUP GROUP`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ADMIN YANG INGIN DITURUNKAN JABATANNYA !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*yah kasihan, jabatan kamu di copot* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]}  SEKARANG SENPAI JADI MEMBER BIASA `, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag member yang ingin dinaikkan jabatannya !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁, JABATAN KAMU NAIK MENJADI ADMIN:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} 𝗦𝗲𝗹𝗮𝗺𝗮𝘁, JABATAN KAMU NAIK MENJADI ADMIN`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG TARGET YANG INGIN DITENDANG !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += ` siap-siap menendang beban group !  :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`MAAF @${mentioned[0].split('@')[0]} KAMU BEBAN DI GROUP INI. KAMU DI TENDANG . BYE-BYE`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Mau add siapa senpai !')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				break 
					case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if ((args[0]) === 'disable') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('hayoo mau apa senpai. pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if ((args[0]) === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗻𝘀𝗳𝘄 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                 if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('pilih enable atau disable senpai !')
                if (args[0] === 'enable') {
                if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'disable') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					tiks = (args.length > 1) ? body.slice(8).trim() : ''
					tiks += '\n\n'
					for (let mem of groupMembers) {
						tiks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(tiks, members_id, true)
					break
					case 'tagall2':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ ${mem.jid.split('@')[0]}\n`
                                                members_id.push(mem.jid)                                                                         
                                              }                                                                                                                                                      
                                     client.sendMessage(from, '╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙', text, {quoted: mek})
                                        await limitAdd(sender)
                     break
                case 'tagall3':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
                                                members_id.push(mem.jid)
                                        }
                        client.sendMessage(from, '╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙', text, {detectLinks: false, quoted: mek})
                                        await limitAdd(sender)
                    break
                        case 'tagall4':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
                                                members_id.push(mem.jid)
                                        }
                                        client.sendMessage(from, '╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙', text, {quoted: mek})
                                        await limitAdd(sender)
                    break
                case 'tagall5':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
                                                members_id.push(mem.jid)
                                        }
                                        reply('╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙')
                                        await limitAdd(sender)
                    break
                    case 'admevent':
                     if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('pilih enable atau disable senpai')
					if ((args[0]) === 'enable') {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if ((args[0]) === 'disable') {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ MENONAKTIFKAN EVENT DI GROUP INI*')
					} else {
						reply(ind.satukos())
					}
					break
						case 'sider':
           if (!isGroupAdmins) return reply(ind.admin())
        if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, '┏━━⊱   *SIDER*   ⊰━━┓\n\ndiem-diem bae. hayyuk sini gabung.\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
                case 'badword':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('pilih enable atau disable senpai !')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'addbadword':
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                    case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				//owner feature 
				case 'oadd':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa senpai ?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'ohidetag':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				case 'odemote':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ADMIN YG INGIN DICOPOT JABATANNYA !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*yah kasihan, jabatan kamu di copot* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} SEKARANG SENPAI JADI MEMBER BIASA `, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'opromote':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG MEMBER YANG INGIN DINAIKKAN JABATANNYA !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁, JABATAN KAMU NAIK MENJADI ADMIN (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗦𝗲𝗹𝗮??𝗮𝘁 @${mentioned[0].split('@')[0]} *SEKARANG SENPAI ADALAH ADMIN GROUP* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			     	case 'okick':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG MEMBER YG INGIN DI TENDANG !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `YAH KAMU DITENDANG DARI GROUP INI. PASTI BEBAN :V :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`YAH KAMU DITENDANG DARI GROUP INI @${mentioned[0].split('@')[0]} PASTI BEBAN`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'onsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isNsfw) return reply(' *NSFW sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 HARAM 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶')
					} else if ((args[0]) === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 HARAM 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break
					case 'oleveling':
				 if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner) return reply(ind.ownerb())
                if (args.length < 1) return reply('pilih enable atau disable senpai !')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
					case 'owelcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠??𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 ??𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if ((args[0]) === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘄𝗲𝗹𝗰𝗼𝗺𝗲/𝗹𝗲𝗳𝘁 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else {
						reply(ind.satukos())
					}
					break
				 case 'otagall':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isOwner) return reply(ind.ownerb())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ @${mem.jid.split('@')[0]}\n`
                                                members_id.push(mem.jid)
                                        }
                                        mentions('╔══✪〘 TAG ALL SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙', members_id, true)
                                        break
                case 'otagall2':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isOwner) return reply(ind.ownerb())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ ${mem.jid.split('@')[0]}\n`
                                                members_id.push(mem.jid)
                                        }
                                        client.sendMessage(from, '╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT*〙', text, {quoted: mek})
                     break
                case 'otagall3':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isOwner) return reply(ind.ownerb())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''                                                                                                   
                                      teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {                                                                                                                                
                                        teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
                                                members_id.push(mem.jid)
                                        }
                        client.sendMessage(from, '╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙', text, {detectLinks: false, quoted: mek})
                    break
                        case 'otagall4':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isOwner) return reply(ind.ownerb())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
                                                members_id.push(mem.jid)                                                                                      
                                                 }
                                        client.sendMessage(from, '╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT* 〙', text, {quoted: mek})
                    break
                case 'otagall5':
                                client.updatePresence(from, Presence.composing)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isOwner) return reply(ind.ownerb())
                                        members_id = []
                                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                                        teks += `  Total : ${groupMembers.length}\n`
                                        for (let mem of groupMembers) {
                                                teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
                                                members_id.push(mem.jid)
                                        }
                                        reply('╔══✪〘 TAG SEMUA MEMBER 〙✪══\n╠➥'+teks+'╚═〘 *AZKABOT*〙')
                    break
				case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			  	case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('pilih enable atau disable senpai !')
					if ((args[0]) === 'enable') {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if ((args[0]) === 'disable') {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
				break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
				break 
				case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih Foto Profil barunya??')
					break 
				case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('SUCCESS CHANGE PROFILE GROUP')
					break				
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(from))
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽????𝘼𝘿𝘾𝘼??𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
					
					
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(` *${pushname}* no bakaaa!, itu kan gaada di Dalam *${prefix}menu*!`)
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
