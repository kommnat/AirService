//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let select_type_service = (msg,reply_token,userId,myCache) => {
    //-----------------delete-------------------
    myCache.del("select_type_service"+userId)
    myCache.del("type_service"+userId) 
    myCache.del("select_band"+userId)
    myCache.del("generation"+userId)
    myCache.del("select_btu"+userId)
    myCache.del("input_discription"+userId)
    myCache.del("discription"+userId)
    myCache.del("input_name_customer"+userId)
    myCache.del("name_customer"+userId)
    myCache.del("tel_customer"+userId)
    myCache.del("address"+userId)
    myCache.del("lat_lon"+userId)
    myCache.del("price"+userId) 
    
    //------------------------------------------
    select(reply_token)
    myCache.set("select_type_service"+userId,msg,300000);
}

function select( reply_token ,) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
           ui.flex_select_type
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
module.exports = {select_type_service}