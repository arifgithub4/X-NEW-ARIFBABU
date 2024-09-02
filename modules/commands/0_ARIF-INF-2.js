module.exports.config = {
 name: "inf2",
 version: "1.0.1", 
 hasPermssion: 0,
 credits: "ARIF BABU",
 description: "Admin and Bot inf2",
 commandCategory: "...",
	usePrefix: true,
 cooldowns: 1,
 dependencies: 
 {
	"request":"",
	"fs-extra":"",
	"axios":""
 }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
	hours = Math.floor(time / (60 * 60)),
	minutes = Math.floor((time % (60 * 60)) / 60),
	seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =[
"https://i.imgur.com/atQJ1Ln.jpeg",
];
var callback = () => api.sendMessage({body:` ♛|| Admin and Bot Info ||♛

𒁍BOT NAME: ${global.config.BOTNAME}

𒁍BOT ADMIN: ${global.config.ADMINBOT}

𒁍FACEBOOK: ${global.config.OWNERLINK}

𒁍BOT PREFIX: ${global.config.PREFIX}

𒁍STATUS: ${global.config.STATUS}

𒁍OWNER NAME: ${global.config.BOTOWNER}

𒁍UPTIME

𒁍TODAY IS: ${juswa} 

𒁍BOT IS RUNNING ${hours}:${minutes}:${seconds}.

𒁍THANKS FOR USING ${global.config.BOTNAME}
`,attachment: fs.createReadStream(__dirname + "owner_photo.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "owner_photo.jpg")); 
	 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"owner_photo.jpg")).on("close",() => callback());
	};
