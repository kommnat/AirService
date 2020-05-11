
var fs = require('fs')
const request = require('request')
const {Storage} = require('@google-cloud/storage');

const image = (id_image,reply_token,userId,myCache) =>{
    console.log(id_image)
    const LINE_HEADER = {
        "Content-Type": "application/json",
        "Authorization": "Bearer tXOxbBNHDvyxUTITtlUkErraVe0AtpyFeb8Shb3+33rcl826FIjNK6eoMvgfU/6Fnmj1h9nNG6Km+ZeN6YG9BFg5phdOAhZscsvKT23QR8i6lr4f112jGMLQqLG/1mwQrQCJANMtk/SqfnhPjiy2gAdB04t89/1O/w1cDnyilFU="
    };
    var url = "https://api.line.me/v2/bot/message/"+id_image+"/content"
    request.get({
        headers: LINE_HEADER,
        uri: url,
        encoding: null // แก้ปัญหา binary ไม่สมบูรณ์จาก default encoding ที่เป็น utf-8
    }, function(error, response, body) {

        //var base64data = Buffer.from(body, 'binary').toString('base64');
        console.log("image :",body)
        let buff = new Buffer(body, 'base64');
        fs.writeFileSync('stack-abuse-logo-out.jpeg', buff);
        //var wstream = fs.createWriteStream('myOutput.txt');
    //    fs.writeFile('myOutput.txt',body, "binary", function (err) {
    //     console.log(err); // writes out file without error, but it's not a valid image
    //   });
    })

}
module.exports = {image}