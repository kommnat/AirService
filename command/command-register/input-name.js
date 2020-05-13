//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let input_name = (msg,reply_token,userId,myCache) => {
    
        myCache.set("name_customer"+userId,msg,300000);
        myCache.set("input_tel"+userId,msg,300000);
        console.log("name_customer :",msg)
        input(reply_token,msg)  
        myCache.del("input_name_customer"+userId)
}

function input( reply_token,msg) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                "type": "text", 
                "text": "กรอกเบอร์ของ "+msg+" ด้วยครับ"
                
            }
    ]
    })
    request.post({
        url: cst.url_reply,
        headers: headers,
        body: body
    }, (err, res, body) => {
        //console.log('status = ' + res.statusCode);
    });
}
module.exports = {input_name}