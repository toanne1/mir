module.exports.config = {
    name: "fbvideo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Trung Kien",
    description: "tải video từ fb",
    commandCategory: "Tiện ích",
    usages: "[link]",
    cooldowns: 5
};
module.exports.run = async function({
    api,
    event,
    args,
    utils
}) {
    const axios = global.nodemodule['axios'];
    const fs = global.nodemodule["fs-extra"];
    if (!args[0]) {
        return api.sendMessage("Nhập id fb", event.threadID, event.messageID);
    }
    const link = args.join(" ");
    let type1 = `${link}`;
    let type2 = type1.replace(/[^0-9]/g, '')
    try {
        const res = await axios.get(`https://simsimi.info/v2/fbwatch.php?id=${type2}`);
        const data = res.data
        const link = data.url
        const view = data.views
        const idvideo = data.id
        const namevideo = data.description
        console.log(link)
        path1 = __dirname + `/cache/${event.senderID}.mp4`
        const getms = (await axios.get(link, {
            responseType: "arraybuffer"
        })).data;
        fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));

        if (fs.statSync(__dirname + `/cache/${event.senderID}.mp4`).size > 26000000) return api.sendMessage('⚡Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, () => unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID);
        else return api.sendMessage({
            body: `Tải video thành công ✅
🔰Tên video : ${namevideo}            
👀Lượt xem: ${view}`,
            attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.mp4`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID)
    } catch {
        return api.sendMessage('Error', event.threadID, event.messageID);
    }
}