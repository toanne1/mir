module.exports.config = {
    name: "fixspam-chuibot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Người chửi bot sẽ tự động bị ban khỏi hệ thống <3",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {}
};

module.exports.handleEvent = async({ event, api, Users }) => {
    var { threadID, messageID, body, senderID, reason } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    if (senderID == api.getCurrentUserID()) return;
    let name = await Users.getNameUser(event.senderID);
    //trả lời
    var msg = {
            body: `Bạn vừa chửi bot và đã bị ban\n\nTin nhắn này đã được gửi đến admin\n\n`
        }
        // Gọi bot
    const arr = ["botngu", "bot loz", "bot lol", "Botngu", "Bot ngu", "bot ngu", "bot gà", "Bot gà", "con bot lol", "Con bot lol", "Bot ngu lol", "bot ngu lol", "Bot chó", "bot chó", "dm bot", "Dm bot", "Đm bot", "đm bot", "dmm bot", "Dmm bot", "dmm bot", "Dmm bot", "Đmm bot", "đmm bot", "đb bot", , "Đb bot", "bot điên", "Bot điên", "bot dở", "Bot dở", "Bot khùng", "bot khùng", "đĩ bot", "Đĩ bot", "Bot paylac rồi", "con bot lòn", "Con bot lòn", "cmm bot", "Cmm bot", "clap bot", "Clap bot", "bot ncc", "Bot ncc", "bot oc", "Bot oc", "bot óc", "Bot óc", "bot óc chó", "Bot óc chó", "cc bot", "Cc bot", "bot tiki", "Bot tiki", "Lozz bottt", "lol bot", "Lol bot", "Loz bot", "loz bot", "lồn bot", "Lồn bot", "bot lồn", "Bot lồn", "bot lon", "Bot lon", "Bot cac", "bot cac", "bot nhu lon", "Bot nhu lon", "bot như cc", "Bot như cc", "bot như bìu", "Bot như bìu", "Bot sida", "bot sida", "bot fake", "Bot fake", "mạnh ngu", "Mạnh ngu"];
    
    arr.forEach(i => {
        const uidUser = event.senderID;
        if (body == i) {
            modules = "chui bot:"
            console.log(name, modules, i);
            const data = Users.getData(uidUser).data || {};
            Users.setData(uidUser, { data });
            data.banned = 1;
            data.reason = i || null;
            data.dateAdded = time;
            global.data.userBanned.set(uidUser, { reason: data.reason, dateAdded: data.dateAdded });

            api.sendMessage(msg, threadID, () => {
                const listAdmin = global.config.ADMINBOT;
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`=== Thông Báo ===\n\n🆘Tội nhân: ${name}\n🔰Uid: ${uidUser}\n😥Chửi bot: ${i}\n\nĐã bị ban khỏi hệ thống`, idad);
                }
            })
        }
    });
};
module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", event.threadID)
}