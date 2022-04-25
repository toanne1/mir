module.exports.config = {
	name: "hentai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Random ảnh hentai",
	commandCategory: "nsfw",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 50000) {
		axios.get('http://trungkien.tk/hentai.php').then(res => {
		var callback = function () {
					api.sendMessage({
						body : `-50000 đô `,
						attachment: fs.createReadStream(__dirname + '/cache/hentai.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/hentai.jpg'), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + '/cache/hentai.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 200}));
			})
	} else return api.sendMessage("Bạn cần 50000 đô để xem ảnh ?",event.threadID,event.messageID);
}