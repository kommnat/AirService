//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let input_discription = (btu_air,reply_token,userId,myCache) => {
    
    if(myCache.get("select_type_service"+userId) != null && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null ){
        myCache.set("select_btu"+userId,btu_air,300000);
        input(reply_token)
    }else{
        console.log('select_type_service == null')
    }
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
                'text': 'กรอกคำอธิบายด้วยครับ (ถ้ามี)'
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
module.exports = {input_discription}