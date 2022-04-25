module.exports.config = {
  name: "api",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "Kho Ảnh Api",
  commandCategory: "Random-img",
  usages: "[]",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  var type;
  switch (args[0]) {
    case "anime":
      type = "anime";
      break;
    case "tw":
      type = "tw";
      break;
    case "naughty":
      type = "naughty";
      break;
    case "ausand":
      type = "ausand";
      break;
    case "shiba":
      type = "shiba";
      break;
    default:
      return api.sendMessage(`-Tag-\nanime,tw,naughty,ausand,shiba\nSử dụng !api + tag để lấy ảnh!`, threadID, messageID);
      break;
  }
  axios.get(`http://trungkien.tk/apiv1/${type}.php`).then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body: "Ảnh của bạn đây!",
        attachment: fs.createReadStream(__dirname + `/cache/${type}.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${type}.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/${type}.${ext}`)).on("close", callback);
  })
}