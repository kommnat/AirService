//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
const {google} = require('googleapis');
const keys = require('../../utils/keys.json')
const sv = require('../../server/main')
//--------------------------------------------------
const request = require('request')
var moment = require('moment')
//--------------------------------------------------

let save_data = (reply_token,userId,myCache) => {
    
        
        let typeService = myCache.get("type_service"+userId)
        let bandAir = myCache.get("select_band"+userId)
        let generationAir = myCache.get("generation"+userId)
        let airBTU = myCache.get("select_btu"+userId)
        let discriptionService = myCache.get("discription"+userId)
        let nameCustomer = myCache.get("name_customer"+userId)
        let addressCustomer = myCache.get("address"+userId)
        let lat_lon = myCache.get("lat_lon"+userId)
        let dateTime = moment().add(7, 'hours').format('YYYY-MM-D HH:MM')
        let price = myCache.get("price"+userId)
        // console.log("type_service :",type_service)
        // console.log("price :",price)
       save(reply_token,)
       sv.data_server(typeService)  

}

function save(reply_token,)   {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                "type": "text",
                "text": "บันทึกข้อมูลสำเร็จ"
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
module.exports = {save_data}