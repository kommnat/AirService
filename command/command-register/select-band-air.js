//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let select_band = (type_service,reply_token,userId,myCache) => {
    
    if(myCache.get("select_type_service"+userId) != null){
        myCache.set("type_service"+userId,type_service,300000);
        select(reply_token)
    }else{
        console.log('select_type_service == null')
    }
}

function select( reply_token ,) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
           ui.flex_select_brand_air
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
module.exports = {select_band}