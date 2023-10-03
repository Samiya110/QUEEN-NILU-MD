/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;suA3WSIK#VAyKzrdaAwZNlZ742Im-eW7WcgSs_TKSPtJ-YJAwiM8' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://tin_tin_user:ew7zUUD7MWV4zKua6M4b6oA3R8e9xGwD@dpg-cke3ttkgonuc73a9bsc0-a.frankfurt-postgres.render.com/tin_tin'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94704342100'

global.OWNER_NAME = 'Sameera C Athapaththu'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'Sorry.' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'Queen Schii'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Janiya 🤹‍♂️' //sticker

global.FOOTER = 'Queen Schii 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Queen Schii  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = false

global.VOICE_REPLY = false


/* V card */

global.ytname = "YT: Sameera C Athapaththu" //ur yt chanel name
global.socialm = "GitHub: sameera_c_athapaththu" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

