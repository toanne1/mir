module.exports.config = {
    name:"ninoteach",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "D?y nino cute :3",
    commandCategory: "General",
    usages: "c�u mu?n h?i nino => c�u mu?n nino tr? l?i",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("sai format r nha ;-;",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("thi?u c�u h?i k�a ;-;",threadID,messageID)} else {
            if (!answer) {api.sendMessage("thi?u c�u tr? l?i k�a ;-;",threadID,messageID)} else {
                    axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "Key v?i value c� h?t cmnr, th�m c�i cc"){
                            api.sendMessage("c�u h?i, c�u tr? l?i d� t?n t?i r nha ;-;",threadID,messageID)} else {
                                if (res.data.reply == "B? l?i cc g� d� �o bi?t") {api.sendMessage('L?i kh�ng x�c d?nh ;-;',threadID,messageID)} else {
                                    api.sendMessage("d?y th�nh c�ng!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}