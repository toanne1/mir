module.exports.config = {
	name: "restartbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bot Đang Khởi Động Lại",event.threadID, () =>process.exit(1))