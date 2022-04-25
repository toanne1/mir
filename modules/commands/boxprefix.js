module.exports.config = {
	name: "boxprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "manhG",
	description: "Xem prefix của BOT",
	commandCategory: "Noprefix",
	usages: "",
	cooldowns: 5
}, module.exports.handleEvent = async ({
	event: e,
	api: a,
	Threads: r
}) => {
	var {
		threadID: n,
		messageID: o,
		body: s,
		senderID: t
	} = e;
	if (t != a.getCurrentUserID()) {
		var i = (await r.getData(n)).data;
		["npre", "nprefix", "boxprefix", "dấu lệnh", "prefix của bot là gì", "daulenh"].forEach((e => {
			let a = e[0].toUpperCase() + e.slice(1);
			if (s === e.toUpperCase() | s === e | a === s) return null == i.PREFIX ? p("Nhóm chưa xét prefix cho bot") : p("prefix là: " + i.PREFIX)
		}))
	}

	function p(e) {
		a.sendMessage(e, n, o)
	}
}, module.exports.run = async ({
	event: e,
	api: a
}) => a.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", e.threadID);