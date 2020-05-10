//------------connect google sheets------------------------
const {google} = require('googleapis');
const keys = require('../utils/keys.json')
const cst = require('../utils/constants')



const data_server = (type,band,generation,BTU,discription,name,address,latlon,date,pri) => {
    //bandAir,generationAir,airBTU,discriptionService,nameCustomer,addressCustomer,lat_lon,dateTime,price
    let  typeService = [
        [
            type
        ]   
      ];  
    let  bandAir = [
        [
            band
        ]   
      ];  
    let  generationAir = [
        [
            generation
        ]   
      ]; 
    let  airBTU = [
        [
            BTU
        ]   
      ]; 
    let  discriptionService = [
        [
            discription
        ]   
      ];   
    let  nameCustomer = [
        [
            name
        ]   
      ];   
    let  addressCustomer = [
        [
            address
        ]   
      ];   
    let  lat_lon = [
        [
            latlon
        ]   
      ];   
    let  dateTime = [
        [
            date
        ]   
      ];   
    let  price = [
        [
            pri
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
        range: 'A2:J101'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    //console.log(data.data.values.length)
    var countData = data.data.values.length + 2
   
    const update_typeService = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'B'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:typeService}
    };
    gsapi.spreadsheets.values.update(update_typeService);

    const update_bandAir = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'C'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:bandAir}
    };
    gsapi.spreadsheets.values.update(update_bandAir);
    
    const update_generationAir = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'D'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:generationAir}
    };
    gsapi.spreadsheets.values.update(update_generationAir);

    const update_airBTU = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'E'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:airBTU}
    };
    gsapi.spreadsheets.values.update(update_airBTU);

    const update_discriptionService = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'F'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:discriptionService}
    };
    gsapi.spreadsheets.values.update(update_discriptionService);

    const update_nameCustomer = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'G'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:nameCustomer}
    };
    gsapi.spreadsheets.values.update(update_nameCustomer);

    const update_addressCustomer = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'H'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:addressCustomer}
    };
    gsapi.spreadsheets.values.update(update_addressCustomer);

    const update_lat_lon = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'I'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:lat_lon}
    };
    gsapi.spreadsheets.values.update(update_lat_lon);

    const update_dateTime = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'J'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:dateTime}
    };
    gsapi.spreadsheets.values.update(update_dateTime);

    const update_price = {
        spreadsheetId: cst.spreadsheetId ,
        range: 'K'+countData,
        valueInputOption: 'USER_ENTERED',
        resource: {values:price}
    };
    gsapi.spreadsheets.values.update(update_price);
   

}

module.exports = {data_server}

