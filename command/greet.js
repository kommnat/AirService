//--------------------------------------------------
const cst = require('../utils/constants')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let hello = (msg,reply_token,) => {
    greet(msg,reply_token,)
}

function greet(msg, reply_token ,) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            'type': 'text',
            'text': msg +" คุณพิมลพัชร์ \nวันนี้มีลงทะเบียนเพิ่มใหม่ครับ",
            "quickReply": { 
                "items": [
                  {
                      "type": "action",
                      "action": {
                       "type":"message",
                       "label":"ลงทะเบียน",
                       "text": "ลงทะเบียน"
                      }
                  }
                ]
              }
        },
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
module.exports = {hello}