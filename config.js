const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CYPHER-X:~UEsDBBQAAAgIAIOSqVoWvPgGOQUAAIMJAAAKAAAAY3JlZHMuanNvbq1Va4+iSBT9L*VVe5v3w6STAURFUVQEbTabTQkF8kaqUOmJ*32Ddm93MjM9vcnyqVJUnXvuveee+g6KMsZohlow+A6qOj5BgrolaSsEBkBtwhDVoA8CSCAYgFQ*1rgXMJrjXhJ+ZFJoc7RaarbqceX04A4VOlwujLVIseUTuPZB1eyz2P8EUNZVe7lwqGiUFZUYjQ0myAqYPiu6ZS5cx6KFgiVRSFkufgLXDhHGdVxEenVAOaphNkPtEsb11+jro2qyLUK4tl25PKcTi5wPj6aT2+kWPTdHVrVwmG+tyy6XvkZf2elS3Sv1Rp0yuxc+kbE3b5bScTPM9mP5dDo5gqIp+bZk0zt9HEcFCowAFSQm7ZfrDkfK7CRQB96bISZj1GLIDy9NcfL3pz3HW35ySB+nXkQOW+drxI*HjXk+FKu6nk6inaVPKulclUyp5+HWCvxxo6JqazoBpUcfiS*rN62k*6XuaDlPZImIilEtDZ8ZFqqaBathQ5wlpa9b4agqzZpveZZdfY2+vVOY6fFsz0N8iNOJ0tKFZW1wtBcPwWyMduQ4mcTYaBYJfqcPSVN*xpKB3nDbrB9HiiBq+VrM*KUeChcxN7GWLJt0Wkl2OEGjZKWrXi+*ePkm3AbKLKJn59BVIWqMMRSorIJqtpCpJJ6uxgfl6ZZRilojAAP62gc1imJMakjisrjtsVQfwOBkI79G5FZeMJOfPeu0fjTzNGnqoGqjxPNRoY0sz8zW1AbanFiu2HVGPT+BPqjq0kcYo2ASY1LW7RxhDCOEweDPW6e6pGuUlwRN46CbOoZlaEmUOUHmv+E*zgdIMKyqPwpEQB+EdZnPERiQukF9cL+g8yOWlwRFHiq0QDMyLYgjjmcUlhNFSR92Keb3oJs4R5jAvAIDWuQEieYkirn2*x8eGj*SZV3RJXFICxwvCgpH8SNO4SWZYUWK*i2Pv*qgQBdy13FXfYHugzCuMXGKpspKGLyJ*O0n9P2yKYjdFr7WLVANBh+2ESFxEeEus6aAtX+IT0jr8gCDEGYYXfsgQKfYRx0eeDD2x7*pkbVyEMvO5J1uFp587jp4KIv7EchIlMCy4sPep*YPnE*RD1Ci5QdEBz4lybwksBToynG3kO7Or+16X45bV+YO0sldvMDRZFSbOp0W5wt1U+VdiqhGwVuV99BPm2pTpqj4BLe8nBd8uDjvxL0FqR5MWs+TT4FKKf4H3LvEweD7u21rZdDhmZOZtPVmKui61cX5QQ0D4Uc9FLA7DDBMEhjALJa5rhDZ7S4jUgwtcZLEsBzDSAPhW7d**bdPXZAAERhnuJPRslXohaTr87HV85XxWJlHihYp4L2vb35xn0fTtfTpVjx5+ePpyBma62CduEGL1PXGv5RwISzYWVmETmw8*QSkS85NaRdGXGKvZ+NcsebrMHOiy4vtrcf5btMcA88Y4mGomoGS5r65ddPFZcMEY928GFVepvl+RbizXDyXExFal2o5H2nnpy7aXV8fg83l9WiyPYcTdF5eBNt0jeX4*LKdYoFNdDmKVlGLFws+ZY48kayZue0lZqYzyO657FJwbabS4G5ua*gxTZ4TPeAcB0avTnZz0uz1BYtfPeauxjBGtwfhtVG*6+f7XFDX*geI1xfmF9pTbXpz0NxGZLyTKDSakrmmaro7v4gch53DcYKSoD1OWdqIwbUb+CqDJCzrvNNOvoegD+qy6abWKMLyk0iaYhjq6p51BjFR3p3gZ+ZC3U8t67KaQHzoROmK4tHpRN4qVWUTSN6MBSjdN2d0cP0HUEsBAhQDFAAACAgAg5KpWha8+AY5BQAAgwkAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAYQUAAAAA",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ VORTEX-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923218794695",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "VORTEX-XMD ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "VORTEX-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Mrhanstz/VORTEX-XMD/raw/refs/heads/main/HansTz/HansTz.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">VORTEX IS ACTIVE AND ALIVE\n\n\nKEEP USING VORTEX-XMD FROM VORTEX TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by Vortex-xmd 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
