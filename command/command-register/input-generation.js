//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let input_generation = (band_air,reply_token,userId,myCache) => {
    
    if(myCache.get("select_type_service"+userId) != null && myCache.get("type_service"+userId)){
        myCache.set("select_band"+userId,band_air,300000);
        input(reply_token,band_air)
    }else{
        console.log('select_type_service == null')
    }
}

function input( reply_token,band_air) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                'type': 'text',
                'text': 'กรอกชื่อรุ่น ของ '+band_air+' ด้วยครับ'
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
module.exports = {input_generation}