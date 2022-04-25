module.exports.config = {
	name: "rname",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Trung Kien",
	description: "Random biệt danh tiếng Viet 🤔",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"request": ""
	},
	envConfig: {
		"APIKEY": "mi451266190"
	}
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const res = await axios.get(`http://le31.glitch.me/randomname/vietnam`);
		var name = res.data.name;
		api.changeNickname(`${name}`, event.threadID, event.senderID);
	}