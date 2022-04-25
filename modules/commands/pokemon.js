module.exports.config = {
  name: "pokemon",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "",
  commandCategory: "Group",
  usages: "",
  cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
        var axios = require("axios");
    var fs = require("fs");
    var request = require("request");
var tip = args[0];
if (!tip) return api.sendMessage(`Nhập tên pokemon cần tra cứu thông tin!`,event.threadID,event.messageID);
else {
  const axios = require('axios');
  axios.get(`https://some-random-api.ml/pokedex?pokemon=${encodeURIComponent(tip)}`).then(res => {
        let name = res.data.name,
            type = res.data.type,
            species = res.data.species,
            abilities = res.data.abilities,
            height = res.data.height,
            weight = res.data.weight,
            gender = res.data.gender,
            egg_groups = res.data.egg_groups,
            stats = res.data.stats,
            family = res.data.family,
            evolutionStage = res.data.evolutionStage,
            evolutionLine = res.data.evolutionLine,
            description = res.data.description
     return api.sendMessage(`Name : ${name}\n\nType: ${type}\n\nSpecies: ${species}\n\nAbilities : ${abilities}\n\nHeight: ${height}\n\nWeight: ${weight}\n\nGender: ${gender}\n\nEgg Groups: ${egg_groups}\n\nStats: ${stats}\n\nFamily: ${family}\n\nEvolutionStage: ${evolutionStage}\n\nEvolutionLine : ${evolutionLine}\n\nDescription: ${description} `,event.threadID, event.messageID);
  });
}
}