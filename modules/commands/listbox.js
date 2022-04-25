module.exports.config = {
    name: 'listbox',
    version: '1.0.0',
    credits: 'CatalizCS, ManhG MoD',
    hasPermssion: 2,
    description: '[Ban/Unban/Del/Remove] List thread bot đã tham gia',
    commandCategory: 'Admin',
    usages: '[số trang/all]',
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {
    const { threadID, messageID } = event;
    if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    var arg = event.body.split(" ");
    var idgr = handleReply.groupid[arg[1] - 1];
    var groupName = handleReply.groupName[arg[1] - 1];
    switch (handleReply.type) {
        case "reply":
            {
                if (arg[0] == "ban" || arg[0] == "Ban") {
                    const data = (await Threads.getData(idgr)).data || {};
                    data.banned = 1;
                    data.dateAdded = time;
                    await Threads.setData(idgr, { data });
                    global.data.threadBanned.set(idgr, { dateAdded: data.dateAdded });
                    return api.sendMessage(`»Thông báo từ Admin«\n\n Nhóm Bạn Đã Bị Ban, cấm dùng bot.`, idgr, () =>
                        api.sendMessage(`${api.getCurrentUserID()}`, () =>
                            api.sendMessage(`★★BanSuccess★★\n\n🔷${groupName} \n🔰TID:${idgr} `, threadID, () =>
                                api.unsendMessage(handleReply.messageID))));
                }

                if (arg[0] == "unban" || arg[0] == "Unban" || arg[0] == "ub" || arg[0] == "Ub") {
                    const data = (await Threads.getData(idgr)).data || {};
                    data.banned = 0;
                    data.dateAdded = null;
                    await Threads.setData(idgr, { data });
                    global.data.threadBanned.delete(idgr, 1);
                    return api.sendMessage(`»Thông báo từ Admin«\n\n Nhóm Bạn Đã Được Gỡ Ban`, idgr, () =>
                        api.sendMessage(`${api.getCurrentUserID()}`, () =>
                            api.sendMessage(`★★UnbanSuccess★★\n\n🔷${groupName} \n🔰TID:${idgr} `, threadID, () =>
                                api.unsendMessage(handleReply.messageID))));
                }

                if (arg[0] == "del" || arg[0] == "Del") {
                    const data = (await Threads.getData(idgr)).data || {};
                    await Threads.delData(idgr, { data });
                    console.log(groupName)
                    api.sendMessage(`★★DelSuccess★★\n\n🔷${groupName} \n🔰TID: ${idgr} \n Xóa data thành công!`, event.threadID, event.messageID);
                    break;
                }

                if (arg[0] == "out" || arg[0] == "Out") {
                    api.sendMessage(`»Thông báo từ Admin«\n\n ★★Đã out khỏi nhóm chat★★`, idgr, () =>
                        api.sendMessage(`${api.getCurrentUserID()}`, () =>
                            api.sendMessage(`★★OutSuccess★★\n\n🔷${groupName} \n🔰TID:${idgr} `, threadID, () =>
                                api.unsendMessage(handleReply.messageID, () =>
                                    api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr)))));
                    break;
                }
            }
    }
};
module.exports.run = async function({ api, event, args }) {
    switch (args[0]) {
        case "all":
            {
                var inbox = await api.getThreadList(150, null, ['INBOX']);
                let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
                var listthread = [];
                var listbox = [];
                /////////
                for (var groupInfo of list) {
                    let data = (await api.getThreadInfo(groupInfo.threadID));
                    listthread.push({
                        id: groupInfo.threadID,
                        name: groupInfo.name,
                        sotv: data.userInfo.length,
                    });
                }
                /////////
                var listbox = listthread.sort((a, b) => {
                    if (a.sotv > b.sotv) return -1;
                    if (a.sotv < b.sotv) return 1;
                });
                /////////  
                var groupid = [];
                var groupName = [];
                var page = 1;
                page = parseInt(args[0]) || 1;
                page < -1 ? page = 1 : "";
                var limit = 1000;
                var msg = "🎭DS NHÓM ĐÃ THAM GIA🎭\n\n";
                var numPage = Math.ceil(listbox.length / limit);

                for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                    if (i >= listbox.length) break;
                    let group = listbox[i];
                    msg += `${i+1}. ${group.name}\n🔰TID: ${group.id}\n🐸Thành viên: ${group.sotv}\n\n`;
                    groupid.push(group.id);
                    groupName.push(group.name);
                }
                msg += `--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}listbox + số trang/all\n\n`

                api.sendMessage(msg + '🎭Reply Out, Ban, Unban, Del[data] + số thứ tự để Out, Ban, Unban, Del[data] tới thread đó!', event.threadID, (e, data) =>
                    global.client.handleReply.push({
                        name: this.config.name,
                        author: event.senderID,
                        messageID: data.messageID,
                        groupid,
                        groupName,
                        type: 'reply'
                    })
                )
            }
            break;

        default:
            try {
                var inbox = await api.getThreadList(500, null, ['INBOX']);
                let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
                var listthread = [];
                var listbox = [];
                /////////
                for (var groupInfo of list) {
                    let data = (await api.getThreadInfo(groupInfo.threadID));
                    listthread.push({
                        id: groupInfo.threadID,
                        name: groupInfo.name,
                        sotv: data.userInfo.length,
                    });

                } //for
                var listbox = listthread.sort((a, b) => {
                    if (a.sotv > b.sotv) return -1;
                    if (a.sotv < b.sotv) return 1;
                });
                var groupid = [];
                var groupName = [];
                var page = 1;
                page = parseInt(args[0]) || 1;
                page < -1 ? page = 1 : "";
                var limit = 10;
                var msg = "🎭DS NHÓM ĐÃ THAM GIA🎭\n\n";
                var numPage = Math.ceil(listbox.length / limit);

                for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                    if (i >= listbox.length) break;
                    let group = listbox[i];
                    msg += `${i+1}. ${group.name}\n🔰TID: ${group.id}\n🐸Thành viên: ${group.sotv}\n\n`;
                    groupid.push(group.id);
                    groupName.push(group.name);
                }
                msg += `--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}listbox + số trang/all\n\n`

                api.sendMessage(msg + '🎭Reply Out, Ban, Unban, Del[data] + số thứ tự để Out, Ban, Unban, Del[data] tới thread đó!', event.threadID, (e, data) =>
                    global.client.handleReply.push({
                        name: this.config.name,
                        author: event.senderID,
                        messageID: data.messageID,
                        groupid,
                        groupName,
                        type: 'reply'
                    })
                )
            } catch (e) {
                return console.log(e)
            }
    }
};