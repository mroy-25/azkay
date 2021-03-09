exports.wait = () => {
	return`*「 WAIT 」 MOHON SABAR SENPAI*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GROUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 DAFTAR DULU SENPAI 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar AZKA|17*`
}

exports.rediregis = () => {
	return`*「 SENPAI KAN SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*MAAF. GAGAL SENPAI*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「KHUSUS GROUP SENPAI」*`
}

exports.ownerb = () => {
	return`*「SENPAI SIAPA. INI KHUSUS OWNER」*`
}

exports.ownerg = () => {
	return`*「SENPAI SIAPA. INI KHUSUS OWNER」*`
}

exports.admin = () => {
	return`*「SENPAI SIAPA. INI KHUSUS ADMIN」*`
}

exports.badmin = () => {
	return`*「JADIIN SAYA ADMIN DULU SENPAI」*`
}

exports.nsfwoff = () => {
	return`*FITUR HARAM BELUM AKTIF. AKTIFKAN DULU NSFW*`
}

exports.bug = () => {
	return`*Masalah telah dilaporkan pada owner, terima kasih senpai*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA 」*\n\nselamat senpai, kamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┗━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━┛`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname}  level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname}  level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname}  level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname}  level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname}  level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
uptime = process.uptime()
  
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
	return `
┏━━━⊱ *ABOUT SENPAI* ⊰━━┓
┃
┃  Hai ${pushname}  wa.me/${sender.split("@")[0]}
┃  Namaku adalah *AZKA*
┃  Version : 4.7
┃  Prefix   : ${prefix}
┃  Runtime : ${kyun(uptime)}    
┃
┃      *pasti mau nyuruh kan 🐦*
┃ 
┗━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━┛

            📵 *CALL/VC = BLOCK*
            🚫 *SPAM  = BLOCK*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
┏━━⊱   *INFO MENU*   ⊰━━┓
┃
┣⊱ *${prefix}info*
┣⊱ *${prefix}owner*
┣⊱ *${prefix}donasi*
┣⊱ *${prefix}profile*
┣⊱ *${prefix}wame*
┣⊱ *${prefix}daftar* <nama|umur>
┣⊱ *${prefix}bug* <teks>
┣⊱ *${prefix}req* <teks>
┣⊱ *${prefix}ping*
┣⊱ *${prefix}runtime*
┃
┣━━⊱  *MAKER MENU*  ⊰━━━┫
┃
┣⊱ *${prefix}sticker* <caption/reply gambar>
┣⊱ *${prefix}stickergif* <caption/reply gif>
┣⊱ *${prefix}toimg* <reply sticker>
┣⊱ *${prefix}quotemaker* <teks|teks>
┣⊱ *${prefix}qrcode* <teks>
┣⊱ *${prefix}ocr* <caption/reply gambar>
┃
┣━━⊱  *LOGO MAKER*  ⊰━┫
┃
┣⊱ *${prefix}tiktok* <teks|teks>
┣⊱ *${prefix}blackpink* <teks>
┣⊱ *${prefix}freefie* <teks>
┣⊱ *${prefix}pubg* <teks|teks>
┣⊱ *${prefix}battlefield4* <teks|teks>
┣⊱ *${prefix}codwarzone* <teks|teks>
┣⊱ *${prefix}valorant* <teks|teks|teks>
┣⊱ *${prefix}jokerlogo* <teks>
┣⊱ *${prefix}bannerlol* <teks>
┣⊱ *${prefix}wallgravity* <teks|teks>
┣⊱ *${prefix}steel3d* <teks|teks>
┣⊱ *${prefix}wolflogo* <teks|teks>
┣⊱ *${prefix}lionlogo* <teks|teks>
┣⊱ *${prefix}space* <teks|teks>
┣⊱ *${prefix}ninjalogo* <teks|teks>
┣⊱ *${prefix}avenger* <teks|teks>
┣⊱ *${prefix}marvel* <teks|teks>
┣⊱ *${prefix}phub* <teks|teks>
┣⊱ *${prefix}ytkomen* <teks|teks>
┃
┣━━⊱  *TEXT MAKER*  ⊰━┫
┃
┣⊱ *${prefix}ttp* <teks>
┣⊱ *${prefix}ttp2* <teks>
┣⊱ *${prefix}nulis* <teks>
┣⊱ *${prefix}smoke* <teks>
┣⊱ *${prefix}smoke2* <teks>
┣⊱ *${prefix}wolfmetal* <teks>
┣⊱ *${prefix}memegen* <teks|teks>
┣⊱ *${prefix}neon* <teks>
┣⊱ *${prefix}advanceglow* <teks>
┣⊱ *${prefix}futureneon* <teks>
┣⊱ *${prefix}sandwriting* <teks>
┣⊱ *${prefix}sandsummer* <teks>
┣⊱ *${prefix}sandengraved* <teks>
┣⊱ *${prefix}metaldark* <teks>
┣⊱ *${prefix}neonlight* <teks>
┣⊱ *${prefix}holographic* <teks>
┣⊱ *${prefix}text1917* <teks>
┣⊱ *${prefix}minion* <teks>
┣⊱ *${prefix}halloween* <teks>
┣⊱ *${prefix}bokeh* <teks>
┣⊱ *${prefix}toxic* <teks>
┣⊱ *${prefix}strawberry* <teks>
┣⊱ *${prefix}box3d* <teks>
┣⊱ *${prefix}icecold* <teks>
┣⊱ *${prefix}luxury* <teks>
┣⊱ *${prefix}cloud* <teks>
┣⊱ *${prefix}summersand* <teks>
┣⊱ *${prefix}horrorblood* <teks>
┣⊱ *${prefix}thunder* <teks>
┣⊱ *${prefix}christmas* <teks>
┣⊱ *${prefix}deluxesilver* <teks>
┣⊱ *${prefix}silverplaybutton* <tekt>
┣⊱ *${prefix}goldplaybutton* <teks>
┣⊱ *${prefix}birthdayday* <teks>
┣⊱ *${prefix}snow3d* <teks>
┣⊱ *${prefix}galaxybat* <teks>
┣⊱ *${prefix}lighttext* <teks>
┣⊱ *${prefix}royaltext* <teks>
┣⊱ *${prefix}galaxystyle* <teks>
┣⊱ *${prefix}hologram3d* <teks>
┣⊱ *${prefix}textcake* <teks>
┣⊱ *${prefix}textbyname* <teks>
┃
┣━━⊱  *FUN MENU*  ⊰━━━┫
┃
┣⊱ *${prefix}exo*
┣⊱ *${prefix}bts*
┣⊱ *${prefix}fitnah* <tag|teks|teks>
┣⊱ *${prefix}tts*
┣⊱ *${prefix}truth*
┣⊱ *${prefix}dare*
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}watak* <teks>
┣⊱ *${prefix}hobby* <teks>
┣⊱ *${prefix}artinama* <teks>
┣⊱ *${prefix}infonomor* <nomor>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}moddroid* <teks>
┣⊱ *${prefix}happymod* <teks>
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}kucing*
┣⊱ *${prefix}alay* <teks>
┣⊱ *${prefix}asupan*
┣⊱ *${prefix}darkjokes*
┣⊱ *${prefix}meme*
┣⊱ *${prefix}bucin*
┣⊱ *${prefix}pantun*
┣⊱ *${prefix}faktaunik*
┣⊱ *${prefix}katabijak*
┣⊱ *${prefix}cerpen*
┣⊱ *${prefix}readmore* <teks|teks>
┃
┣━━⊱ *MUTUAL* ⊰━━━━━┫
┃
┣⊱ *${prefix}mutual*
┣⊱ *${prefix}next*
┃
┣━━⊱ *MEDIA MENU* ⊰━━┫
┃
┣⊱ *${prefix}brainly*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}tiktok* <link>
┣⊱ *${prefix}fototiktok* <link>
┣⊱ *${prefix}tiktokstalk* <teks>
┣⊱ *${prefix}lirik* <teks>
┣⊱ *${prefix}chord* <teks>
┣⊱ *${prefix}map*
┣⊱ *${prefix}kbbi* <text>
┣⊱ *${prefix}googleimage* <teks>
┣⊱ *${prefix}googlesearch* <teks>
┣⊱ *${prefix}ytsearch* <teks>
┣⊱ *${prefix}drakor*
┣⊱ *${prefix}filmapik* <teks>
┣⊱ *${prefix}lk21* <teks>
┣⊱ *${prefix}jadwalbola*
┃
┣━━⊱ *DOWNLOADER MENU* ⊰━━━┫
┃
┣⊱ *${prefix}ytmp3* <link>
┣⊱ *${prefix}ytmp4* <link>
┣⊱ *${prefix}play* <judul>
┣⊱ *${prefix}playmp3* <judul>
┣⊱ *${prefix}playmp4* <judul>
┣⊱ *${prefix}joox* <judul>
┣⊱ *${prefix}toaudio* <caption/reply video>
┣⊱ *${prefix}igdl* <link>
┣⊱ *${prefix}fbdl* <link
┣⊱ *${prefix}telesticker* <link>
┣⊱ *${prefix}pinterest* <teks>
┣⊱ *${prefix}pinterestdl* <link>
┣⊱ *${prefix}pixiv* <teks>
┣⊱ *${prefix}pixivdl* <PIXIV ID>
┣⊱ *${prefix}twittervid* <link>
┣⊱ *${prefix}soundcloud* <link>
┣⊱ *${prefix}tiktokwm* <link>
┣⊱ *${prefix}tiktoknowm* <link>
┣⊱ *${prefix}tiktokmusic* <link>
┣⊱ *${prefix}wattpad* <link>
┣⊱ *${prefix}wattpadsearch* <teks>
┃
┣━━⊱  *WIBUU MENU*  ⊰━┫
┃
┣⊱ *${prefix}wait* <caption/reply ss anime>
┣⊱ *${prefix}wait2* <caption/reply ss anime>
┣⊱ *${prefix}anime* <teks>
┣⊱ *${prefix}manga* <teks>
┣⊱ *${prefix}chara* <teks>
┣⊱ *${prefix}neonime*
┣⊱ *${prefix}neosearch* <teks>
┣⊱ *${prefix}kusonime* <link kusonime>
┣⊱ *${prefix}kusosearch* <teks/judul nimek>
┣⊱ *${prefix}otakudesu* <link otakudesu>
┣⊱ *${prefix}otakusearch* <teks/judul nimek>
┣⊱ *${prefix}mangabatch* <teks>
┣⊱ *${prefix}konachan* <teks>
┣⊱ *${prefix}wpanime*
┣⊱ *${prefix}wpanime2*
┣⊱ *${prefix}fanart*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}waifu2*
┣⊱ *${prefix}shota*
┣⊱ *${prefix}loli*
┣⊱ *${prefix}elf*
┣⊱ *${prefix}foxnime*
┣⊱ *${prefix}randomanime*
┣⊱ *${prefix}poke*
┣⊱ *${prefix}slap*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}smug*
┣⊱ *${prefix}baka*
┣⊱ *${prefix}tickle*
┣⊱ *${prefix}spank*
┣⊱ *${prefix}pat*
┃
┣━━⊱  *ANIME MODE*  ⊰━┫
┃
┣⊱ *${prefix}naruto*
┣⊱ *${prefix}minato*
┣⊱ *${prefix}boruto*
┣⊱ *${prefix}hinata*
┣⊱ *${prefix}sasuke*
┣⊱ *${prefix}sakura*
┣⊱ *${prefix}kaneki*
┣⊱ *${prefix}toukachan*
┣⊱ *${prefix}rize*
┣⊱ *${prefix}akira*
┣⊱ *${prefix}itori*
┣⊱ *${prefix}kurumi*
┣⊱ *${prefix}megumin*
┣⊱ *${prefix}sagiri*
┣⊱ *${prefix}miku*
┣⊱ *${prefix}nino*
┣⊱ *${prefix}yotsuba*
┣⊱ *${prefix}ichika*
┣⊱ *${prefix}itsuki*
┣⊱ *${prefix}chitoge*
┣⊱ *${prefix}inugami*
┣⊱ *${prefix}ainzsama*
┣⊱ *${prefix}albedo*
┣⊱ *${prefix}astolfo*
┣⊱ *${prefix}felix*
┃
┣━━⊱ *LIMIT & UANG* ⊰━┫
┃
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <jumlah>
┣⊱ *${prefix}transfer* <tag |jumlah>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}leaderboard*
┃
┣━━⊱ *EVENT* ⊰━┫
┃
┣⊱ *${prefix}mining*
┣⊱ *${prefix}nguli*
┣⊱ *${prefix}maling*
┣⊱ *${prefix}begal*
┣⊱ *${prefix}korupsi*
┃
┣━━⊱ *GROUP MENU* ⊰━┫
┃
┣⊱ *${prefix}ownergroup*
┣⊱ *${prefix}groupinfo*
┣⊱ *${prefix}hidetag* <teks>
┣⊱ *${prefix}delete* <reply chat bot>
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}sider*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgroup*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}tagall2*
┣⊱ *${prefix}tagall3*
┣⊱ *${prefix}tagall4*
┣⊱ *${prefix}tagall5*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}kick* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag admin group>
┣⊱ *${prefix}promote* <tag member>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [open/close]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}admevent* [enable/disable]
┣⊱ *${prefix}modeanime* [enable/disable]
┣⊱ *${prefix}nsfw* [enable/disable]
┣⊱ *${prefix}simih* [enable/disable]
┣⊱ *${prefix}welcome* [enable/disable]
┣⊱ *${prefix}antilink* [enable/disable]
┣⊱ *${prefix}badword* [enable/disable]
┣⊱ *${prefix}addbadword* <teks>
┣⊱ *${prefix}delbadword* <teks>
┣⊱ *${prefix}nsfwmenu*
┃
┣━━⊱ *OWNER MENU* ⊰━┫
┃
┣⊱ *${prefix}ohidetag* <teks>
┣⊱ *${prefix}odelete* <reply chat bot>
┣⊱ *${prefix}giftlimit*
┣⊱ *${prefix}addbucin* <teks>
┣⊱ *${prefix}oadd* <tag>
┣⊱ *${prefix}okick* <tag>
┣⊱ *${prefix}odemote* <tag admin group>
┣⊱ *${prefix}opromote* <tag member>
┣⊱ *${prefix}otagall*
┣⊱ *${prefix}otagall2*
┣⊱ *${prefix}otagall3*
┣⊱ *${prefix}otagall4*
┣⊱ *${prefix}otagall5*
┣⊱ *${prefix}oleveling* [enable/disable]
┣⊱ *${prefix}owelcome* [enable/disable]
┣⊱ *${prefix}onsfw* [enable/disable]
┣⊱ *${prefix}oanime* [enable/disable]
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}setmemlimit* <teks>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [enable/disable]
┣⊱ *${prefix}clone* <relpy/tag>
┣⊱ *${prefix}setppbot* <caption/reply gambar>
┃
┣━━⊱ *THANKS TO* ⊰━━┫
┃
┣⊱ *ALLAH SWT*
┣⊱ *ORANG TUA*
┣⊱ *TEMAN-TEMAN*
┣⊱ *DLL*
┃
┣⊱ *Bot ini masih dalam pengembangan*
┃   *jadi maklum kalo sering reset data*        
┃
┗━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT SENPAI 」*
┏➥ *Nama* : ${pushname}
┣➥ *Nomer* : wa.me/${sender.split("@")[0]}
┣➥ *Xp* : ${getLevelingXp(sender)}
┣➥ *Limit* : +5
┗➥ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}

━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*

━━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━━`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit
━━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━━`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━⊱  ⸨ *AZKABOT* ⸩  ⊰━━┛`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}
