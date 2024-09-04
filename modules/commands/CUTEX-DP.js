const fs = require("fs");
module.exports.config = {
  name: "Cutex",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Cutex") ||
     react.includes("cutex") || react.includes("CUTEX") || react.includes("Cutex Mannu") ||
react.includes("CUTEX MANNU") ||
react.includes("@Cutex Mannu")) {
    var msg = {
        body: `𝐋𝐎 𝐀 𝐆𝐘𝐈 𝐂𝐔𝐓𝐄𝐗 𝐁𝐀𝐁𝐔 🙈😘`,attachment: fs.createReadStream(__dirname + `/noprefix/CUTEX-DP.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
