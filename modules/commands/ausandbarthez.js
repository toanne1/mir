module.exports.config = {
	name: "ausandbarthez",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kien",
	description: "Random ảnh ausand :))",
	commandCategory: "random-img",
	usages: "ausand",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://trungkien.tk/apiv1/ausand.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/tw.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tw.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tw.${ext}`)).on("close", callback);
			})
}