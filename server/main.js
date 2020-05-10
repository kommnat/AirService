//------------connect google sheets------------------------
const {google} = require('googleapis');
const keys = require('../utils/keys.json')
const cst = require('../utils/constants')



const data_server = (typeService,) => {
    //bandAir,generationAir,airBTU,discriptionService,nameCustomer,addressCustomer,lat_lon,dateTime,price
    let val = [
        [
            "ซ่อม"
        ]   
      ];  
    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        [cst.url_spreadsheets],
        
    );
    
    client.authorize(function(err,tokens){
        
        if(err){
            console.log(err);
            return;
        }else{
            console.log('Connected!');
            gsrun(client,val)
        }
    });
    
}

async function gsrun(cl,val){
   console.log(val)
    const gsapi = google.sheets({version:'v4',auth:cl })

    const opt = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'B2:J101'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values.length)
    var countData = data.data.values.length + 2

    
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
        resource: {values:val}
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

module.exports = {data_server}

