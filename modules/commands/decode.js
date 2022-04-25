module.exports.config = {
	name: "decode",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "",
	commandCategory: "Group",
	usages: "",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var tip = args.join(" ");
if (!tip) return api.sendMessage(`Nhập code cần decode`,event.threadID,event.messageID);
else {
	const axios = require('axios');
	axios.get(`https://some-random-api.ml/base64?decode=${encodeURIComponent(tip)}`).then(res => {
     let mess = res.data.text;
     return api.sendMessage(`${mess}`,event.threadID,event.messageID);
	});
}
}