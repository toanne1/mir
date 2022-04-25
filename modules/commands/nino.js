module.exports.config = {
    name:"nino",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "N�i chi?n z?i bot nino cute",
    commandCategory: "General",
    usages: "[c�u h?i]/[on,off]",
    cooldowns: 5
};

const axios = require('axios');

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'nino.json');
    if (!existsSync(path)) {
        const obj = {
            nino: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('nino')) data.nino = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}

module.exports.handleEvent = async ({ api, event, args, Threads }) => {
    const { threadID, messageID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nino.json');
    const { nino } = require(path);

    if (nino.hasOwnProperty(threadID) && nino[threadID] == true) {
      if (event.senderID !== api.getCurrentUserID()) {
      axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/get/${event.body}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "?a n�i j hong hi?u :<") {
                api.sendMessage("nino ko hi?u, d?y nino di :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
    })
    }  
    }
}

module.exports.run = async ({ api, event, args, Threads }) => {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'nino.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { nino } = database;

    if (!args[0]) { api.sendMessage("?a h?i j h?i di ;-;", threadID, messageID) } else {
        switch(args[0]) {
            case "on": {
                nino[threadID] = true;
                api.sendMessage("b?t ninoreply th�nh c�ng!", threadID);
                break;
            }
            case "off": {
                nino[threadID] = false;
                api.sendMessage("d� t?t ninoreply", threadID);
                break;
            }
            default:
            axios.get(encodeURI(`https://adreno-api.rootandroid.repl.co/nino/get/${args.join(" ")}`)).then(res => {
            if (res.data.reply == "null" || res.data.reply == "?a n�i j hong hi?u :<") {
                api.sendMessage("nino ko hi?u, d?y nino di :<",threadID,messageID)
            } else {
                return api.sendMessage(res.data.reply, threadID, messageID);
            }
            });
            break;
        }
        writeFileSync(path, JSON.stringify(database, null, 4));
    }
}