//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let save_location = (address,lat_lon,reply_token,userId,myCache)  => {
    
        myCache.set("address"+userId,address,300000);
        myCache.set("lat_lon"+userId,lat_lon,300000);
        
        save(reply_token)  
}

function save( reply_token) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                'type': 'text',
                'text': 'ราคาเท่าไหร่ครับ'
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
module.exports = {save_location}