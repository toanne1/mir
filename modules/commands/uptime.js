module.exports.config = {
    name:"uptime",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Random ảnh theo api - uptime",
    commandCategory: "system",
    cooldowns: 3
};
function byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
    const axios = require('axios');
    const request = require('request');
    const fast = global.nodemodule["fast-speedtest-api"];
    const speedTest = new fast({

token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",

verbose: false,

timeout: 10000,

https: true,

urlCount: 5,

bufferSize: 3,

unit: fast.UNITS.Mbps

});

const ketqua = await speedTest.getSpeed();
    const fs = require("fs");
    const moment = require("moment-timezone");

    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");

    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");

    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");

    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");

    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");

    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    const res = await axios.get(`http://le31.glitch.me/poem`);
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    var cadao = res.data.data
    var d = new Date();
    var day = d.getDay()
if (day == 0) var day = "Chủ nhật"
else if (day == 1) var day = "Thứ hai"
else if (day == 2) var day = "Thứ ba"
else if (day == 3) var day = "Thứ tư"
else if (day == 4) var day = "Thứ năm"
else if (day == 5) var day = "Thứ sáu"
else if (day == 6) var day = "Thứ 7"
else if (day == 7) var day = "Chủ nhật"
else return console.log(day)
const time = process.uptime(),
                days = Math.floor(time / (60 * 60 * 60)),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
    const pidusage = await global.nodemodule["pidusage"](process.pid);
    const timeStart = Date.now();
    axios.get('http://trungkien.tk/hentai.php').then(res => {
    let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                                                body: `Bây giờ là: ${gio} giờ ${phut} phút ${giay} giây\nBot đã hoạt động được ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây.\nPrefix: ${global.config.PREFIX}\nVersion: 1.2.14\nUsers: ${global.data.allUserID.length}\nThreads: ${global.data.allThreadID.length}\nCpu: ${pidusage.cpu.toFixed(1)}\nRam: ${byte2mb(pidusage.memory)}\n`,
                        attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
                };
                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
            })
}