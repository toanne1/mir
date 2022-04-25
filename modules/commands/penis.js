module.exports.config = {
 name: "penis",
 version: "1.1.2",
 hasPermssion: 0,
 credits: "Trung Kiên",
 description: "Đọ chim",
 commandCategory: "Game",
 usages: "[lệnh]",
 cooldowns: 1,
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["No PP detected","Can't Find Your PP Cuz It\'s Too Small.","8D \n Can You See That?","8=D \n Thats Kinda Cute.","8===D \n Not Bad.","8========D \n Damnnnnn Nice.","8==============D \n Woahhhhhhhh","8====================D \n Nice Shlong.","8-D \n Damn, skinny and short...","8-----------D \n You can do better.","8---------------------D \n Skinny but long... 😏","Your PP is too big for me to comprehend."];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};