//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let input_name_customer = (msg,reply_token,userId,myCache) => {
    
        myCache.set("discription"+userId,msg,300000);
        console.log("discription :",msg)
        input(reply_token)
        
    
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
                'type': 'text',
                'text': 'กรอกชื่อของเจ้าแอร์ด้วยครับ (ถ้ามี)'
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
module.exports = {input_name_customer}