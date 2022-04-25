module.exports.config = {
  name: "covid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "",
  commandCategory: "Group",
  usages: "",
  cooldowns: 0
};

module.exports.run = function(
{
  event,
  args,
  api,
  getText
})
{
  var axios = require("axios");
  var fs = require("fs");
  var request = require("request");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`Nhập tên quốc gia (Tên quốc gia không được phép ghi dấu)`, event.threadID, event.messageID);
  else
  {
    const axios = require('axios');
    axios.get(`https://corona.lmao.ninja/v2/countries/${encodeURIComponent(tip)}`).then(res =>
    {
      let nhiem = res.data.cases,
        chet = res.data.deaths,
        dieutri = res.data.recovered,
        danso = res.data.population,
        chauluc = res.data.continent,
        quocgia = res.data.country
      return api.sendMessage(`Quốc Gia : ${quocgia}\nNhiễm: ${nhiem}\n Tử vong: ${chet} \n Điều trị : ${dieutri}\n Dân số : ${danso}\n Châu lục: ${chauluc}`, event.threadID, () => fs.unlinkSync(__dirname + "/cache/covidjg.png"), event.messageID);
    });
  }
}