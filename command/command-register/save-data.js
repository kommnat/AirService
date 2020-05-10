//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
const {google} = require('googleapis');
const keys = require('../../utils/keys.json')
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
       //save(reply_token,)  

       const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        [cst.url_spreadsheets]
        );
    
        client.authorize(function(err,tokens){
    
        if(err){
            console.log(err);
            return;
        }else{
            console.log('Connected!');
            gsrun(client,typeService)
        }
        });
     
}


async function gsrun(cl,typeService){
   
    const gsapi = google.sheets({version:'v4',auth:cl })

    const opt = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'B2:J101'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values.length)
    var countData = data.data.values.length + 1

    
    let val1 = [
        [
            "Mitsubishi Electric"
        ],
        [
            "Daikin"
        ],
        [
            "Panasonic"
        ],
        // Additional rows ...
      ];
   
    const updateOptions = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'B'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:typeService}
    };
    gsapi.spreadsheets.values.update(updateOptions);

    // const updateOptions1 = {
    //     spreadsheetId: cst.spreadsheetId ,
    //     range: 'C'+countData,
    //     valueInputOption: 'USER_ENTERED',
    //     resource: {values:val1}
    // };
    // gsapi.spreadsheets.values.update(updateOptions1);
    
    
    //console.log(res)

}

function save(reply_token,)   {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            
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