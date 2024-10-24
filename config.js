const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349053080211";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_06_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDkyLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzRTdvdC9CdEJzZ2dST0twNXVIdWE4NmVaYXpNTml2OUNnTmk5aG9FUVo0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4NkdOMzZNQ1FvU2hBNHVuLWVQb0JnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkOWE5YzJmLTgxNmQtNDc4NS1hMzMwLTQyMzVmZWM5Y2Y1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxNDQsXG4gICAgICAyNDIsXG4gICAgICAyMDAsXG4gICAgICAyMjAsXG4gICAgICAyMzcsXG4gICAgICAxODcsXG4gICAgICAxMjQsXG4gICAgICAyMixcbiAgICAgIDY4LFxuICAgICAgMTgsXG4gICAgICAxNTcsXG4gICAgICAxODQsXG4gICAgICA2MixcbiAgICAgIDMyLFxuICAgICAgMTg4LFxuICAgICAgMTczLFxuICAgICAgMTQxLFxuICAgICAgMTE3LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTIwLFxuICAgICAgODgsXG4gICAgICAxOTksXG4gICAgICA2NSxcbiAgICAgIDE0LFxuICAgICAgMTc0LFxuICAgICAgMTc3LFxuICAgICAgMjE1LFxuICAgICAgMTA3LFxuICAgICAgMjE4LFxuICAgICAgMTc0LFxuICAgICAgMTk0LFxuICAgICAgMjA1LFxuICAgICAgMTM3LFxuICAgICAgMTMsXG4gICAgICAzMSxcbiAgICAgIDIxOCxcbiAgICAgIDkwLFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1QSjVTSFBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUzMDgwMjExOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDQzNTA3NzQ5MDEwOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEQ3bHEwSEVOUEU2YmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhRWo0YVAyQ3Mxd2dNMEJxZ0xxRWhWMUtmMUgzeUhzZGtTZFF6NUwyWnpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdYQ2h0YzNpeEE0TCsrVFdjc2tLQzl0Z0FzQ0lJdmdvTDNuWnJGMHRNS0NmRmhqT1Q0SU5xRnFVdWdqY2M0bU5jVlFIUTJNK3crSEJWV3UrM3A5dkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFHOVk2bzgwR1F3c3k1RnNiVkN0Y25sSnoxaXBRT1BoS2ltSk5DMlhvOEpveHBhZWY3dXpTVHFRTFN4ZlRIdmIzbTJhY3dVSnFvMVJiR1ZCZ1JuNEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTMwODAyMTE6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTc4MjM1OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
