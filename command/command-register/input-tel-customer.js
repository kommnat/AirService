//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let input_tel_customer = (msg,reply_token,userId,myCache) => {
        //console.log('input_tel_customer')
        myCache.set("tel_customer"+userId,msg,300000);
        //console.log("name_customer :",msg)
        input(reply_token)  
        myCache.del("input_tel"+userId)
}

function input( reply_token) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                "type": "text", 
                "text": "เลือกตำแหน่งของเจ้าแอร์ด้วยครับ",
                "quickReply": { 
                  "items": [
                    {
                        "type": "action",
                        "action": {
                         "type":"location",
                         "label":"เลือกตำแหน่ง"
                        }
                    }
                  ]
                }
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
module.exports = {input_tel_customer}