module.exports.config = {
 name: "name",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "hoàng dựa vào api Lê và Mew",
 description: "Random biệt danh các tiếng",
 commandCategory: "other",
 cooldowns: 5,
 dependencies: {
  "request": ""
 }
};
var _0x41b5=["\x72\x75\x6E","\x65\x78\x70\x6F\x72\x74\x73","\x61\x78\x69\x6F\x73","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x72\x65\x71\x75\x65\x73\x74","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x65\x33\x31\x2E\x67\x6C\x69\x74\x63\x68\x2E\x6D\x65\x2F\x72\x61\x6E\x64\x6F\x6D\x6E\x61\x6D\x65","\x67\x65\x74","\x6A\x6F\x69\x6E","","\x42\u1EA1\x6E\x20\x63\x68\u01B0\x61\x20\x6E\x68\u1EAD\x70\x20\x74\xEA\x6E\x20\x6E\u01B0\u1EDB\x63\x20\x6D\xE0\x20\x63\u1EA7\x6E\x20\x72\x61\x6E\x64\x6F\x6D\x20\x6E\x61\x6D\x65\x5C\x6E\x5C\x6E\x43\xF3\x20\x63\xE1\x63\x20\x6E\u01B0\u1EDB\x63\x3A\x20","\x63\x6F\x75\x6E\x74\x72\x79","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x65\x33\x31\x2E\x67\x6C\x69\x74\x63\x68\x2E\x6D\x65\x2F\x72\x61\x6E\x64\x6F\x6D\x6E\x61\x6D\x65\x2F","\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x63\x68\x61\x6E\x67\x65\x4E\x69\x63\x6B\x6E\x61\x6D\x65"];module[_0x41b5[1]][_0x41b5[0]]= async ({api,event,args})=>{const axios=global[_0x41b5[3]][_0x41b5[2]];const request=global[_0x41b5[3]][_0x41b5[4]];const tennuoc=( await axios[_0x41b5[7]](`${_0x41b5[6]}`))[_0x41b5[5]];if(args[_0x41b5[8]]()== _0x41b5[9]){api[_0x41b5[14]](`${_0x41b5[10]}${tennuoc[_0x41b5[11]]}${_0x41b5[9]}`,event[_0x41b5[12]],event[_0x41b5[13]])}else {let nuoc=args[_0x41b5[8]](_0x41b5[15]);const res=( await axios[_0x41b5[7]](`${_0x41b5[16]}${nuoc}${_0x41b5[9]}`))[_0x41b5[5]];api[_0x41b5[19]](`${_0x41b5[9]}${res[_0x41b5[17]]}${_0x41b5[9]}`,event[_0x41b5[12]],event[_0x41b5[18]])}}