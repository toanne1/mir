module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`🌪 𝕂𝕖𝕥 ℕ𝕠𝕚 𝕋𝕙𝕒𝕟𝕙 ℂ𝕠𝕟𝕘 🌪

			◆━━━━━━━━━━━━━◆
			🔗𝓛𝓾𝓪𝓽 𝓑𝓸𝓽 𝓒𝓾𝓪 Toàn
	1. Cấm spam nhiều lệnh nhiều lần trong 60s
	2. Cấm 2 bot trong 1 box khi hoạt động (=ban)
	3. Hạn chế sử dụng menu và help để tránh dính spam
	4. Thêm bot ko xin phép mà tự động thêm (=ban)
	5. Đừng có mà chửi bot sẽ bị ban vĩnh viễn 🔎

			◆━━━━━━━━━━━━━◆
	📝Gõ /help để xem lệnh.
	📌Liên hệ khi cần thiết FB: https://www.facebook.com/tuilatoanne1 - Zalo: 0357249587
	⚜QTV có thể dùng "/help rule" để xem hướng dẫn và set bảng luật box
	⚜Thành viên dùng "/rule" để xem luật box của mình
			◆━━━━━━━━━━━━━◆
	This bot made by Toàn. Thank you for using my bot
		Xin cảm ơn đã đọc hết.
		© Admin: Đồng Toàn`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝘾𝙝à𝙤 𝙢ừ𝙣𝙜 𝙘𝙤𝙣 𝙫ợ {name} .\n𝘾𝙝à𝙤 𝙢ừ𝙣𝙜 đã đế𝙣 𝙫ớ𝙞 𝙣𝙝ó𝙢 {threadName} .\n{type} 𝙡à 𝙩𝙝à𝙣𝙝 𝙫𝙞ê𝙣 𝙩𝙝ứ {soThanhVien} 𝙘ủ𝙖 𝙣𝙝ó𝙢. 𝙏ươ𝙣𝙜 𝙩á𝙘 𝙣𝙝𝙞ề𝙪 𝙫à𝙤 𝙣𝙝é 𝙠𝙝ô𝙣𝙜 𝙡à 𝙗ị đá 𝙧𝙖 𝙠𝙝ỏ𝙞 𝙣𝙝ó𝙢 đấ𝙮 🥳" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}