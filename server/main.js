//------------connect google sheets------------------------
const {google} = require('googleapis');
const keys = require('../utils/keys.json')
const cst = require('../utils/constants')



const data_server = (typeService,bandAir,generationAir,airBTU,discriptionService,nameCustomer,addressCustomer,lat_lon,dateTime,price) => {
    //bandAir,generationAir,airBTU,discriptionService,nameCustomer,addressCustomer,lat_lon,dateTime,price
    let  typeService = [
        [
            typeService
        ]   
      ];  
    let  bandAir = [
        [
            bandAir
        ]   
      ];  
    let  generationAir = [
        [
            generationAir
        ]   
      ]; 
    let  airBTU = [
        [
            airBTU
        ]   
      ]; 
    let  discriptionService = [
        [
            discriptionService
        ]   
      ];   
    let  nameCustomer = [
        [
            nameCustomer
        ]   
      ];   
    let  addressCustomer = [
        [
            addressCustomer
        ]   
      ];   
    let  lat_lon = [
        [
            lat_lon
        ]   
      ];   
    let  dateTime = [
        [
            dateTime
        ]   
      ];   
    let  price = [
        [
            price
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
            gsrun(client,typeService,bandAir,generationAir,airBTU,discriptionService,nameCustomer,addressCustomer,lat_lon,dateTime,price)
        }
    });
    
}

async function gsrun(cl,typeService,bandAir,generationAir,airBTU,discriptionService,nameCustomer,addressCustomer,lat_lon,dateTime,price){
   
    const gsapi = google.sheets({version:'v4',auth:cl })

    const opt = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'B2:J101'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    //console.log(data.data.values.length)
    var countData = data.data.values.length + 2
   
    const updateOptions = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'B'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:typeService}
    };
    gsapi.spreadsheets.values.update(updateOptions);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'C'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:bandAir}
    };
    gsapi.spreadsheets.values.update(updateOptions1);
    
    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'D'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:generationAir}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'E'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:airBTU}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'F'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:discriptionService}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'G'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:nameCustomer}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'H'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:addressCustomer}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'I'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:lat_lon}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'J'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:dateTime}
    };
    gsapi.spreadsheets.values.update(updateOptions1);

    const updateOptions1 = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'K'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:price}
    };
    gsapi.spreadsheets.values.update(updateOptions1);
   

}

module.exports = {data_server}

