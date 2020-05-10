const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const app = express()
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const c_greet = require('./command/greet')
const c_selectTypeService = require('./command/command-register/select-type-service')
const c_selectBandAir = require('./command/command-register/select-band-air')
const c_inputGeneration = require('./command/command-register/input-generation')
const c_selectBTU = require('./command/command-register/select-btu')
const c_inputDiscription = require('./command/command-register/input-discription')
const c_inputNameCustomer = require('./command/command-register/input-name-customer')
const c_inputName = require('./command/command-register/input-name')
const c_saveLocation = require('./command/command-register/save-location')
const c_inputPrice = require('./command/command-register/input-price')
const c_saveData = require('./command/command-register/save-data')
const c_cancleData = require('./command/command-register/cancle-data')

app.get('/kreangsak', (req, res) => {
    res.send('Hello GET')
    });

app.post('/kreangsak',async (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);

    try {
        let reply_token = req.body.events[0].replyToken
        let event = req.body.events[0]
        let userId = req.body.events[0].source.userId 
        console.log(event)
        if(event.type == 'message'){
            if(event.message.type ==  'text'){
              //console.log("msg :",event.message.text)
                if((event.message.text).trim() == 'สวัสดี' || (event.message.text).trim() == 'hello' || (event.message.text).trim() == 'สวัสดีครับ' || (event.message.text).trim() == 'สวัสดีคะ'){
                    let msg = (event.message.text).trim()
                    hello(msg,reply_token)

                }else if((event.message.text).trim() == 'ลงทะเบียน'){
                    let msg = (event.message.text).trim();
                    select_type_service(msg,reply_token,userId,myCache)

                }else if((event.message.text).substring(0, 5) != 'เลือก' && myCache.get("select_type_service"+userId) != null && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null ){
                    let msg = (event.message.text).trim();
                    select_btu(msg,reply_token,userId,myCache)

                }else if((event.message.text).substring(0, 5) != 'เลือก'  && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null && myCache.get("select_btu"+userId) != null && myCache.get("input_discription"+userId)){
                    let msg = (event.message.text).trim();
                    input_name_customer(msg,reply_token,userId,myCache)

                }else if((event.message.text).substring(0, 5) != 'เลือก'  && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null && myCache.get("select_btu"+userId) != null && myCache.get("discription"+userId) != null && myCache.get("input_name_customer"+userId) != null ){
                    let msg = (event.message.text).trim();
                    input_name(msg,reply_token,userId,myCache)

                }else if((event.message.text).substring(0, 5) != 'เลือก' && (event.message.text) != 'บันทึก' && (event.message.text) != 'ยกเลิก' && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null && myCache.get("select_btu"+userId) != null && myCache.get("discription"+userId) != null && myCache.get("address"+userId) != null && myCache.get("lat_lon"+userId) != null ){
                    let price = (event.message.text).trim();
                    input_price(price,reply_token,userId,myCache)

                }else if((event.message.text) == 'บันทึก'  && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null && myCache.get("select_btu"+userId) != null && myCache.get("discription"+userId) != null && myCache.get("name_customer"+userId) != null && myCache.get("address"+userId) != null && myCache.get("lat_lon"+userId) != null && myCache.get("price"+userId) != null ){
                    save_data(reply_token,userId,myCache)

                }else if((event.message.text) == 'ยกเลิก'  && myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null && myCache.get("select_btu"+userId) != null && myCache.get("discription"+userId) != null && myCache.get("name_customer"+userId) != null && myCache.get("address"+userId) != null && myCache.get("lat_lon"+userId) != null && myCache.get("price"+userId) != null ){
                    cancle_data(reply_token,userId,myCache)
                }else{
                    hello("สวัสดีครับ ",reply_token)
                }
            }else if(event.message.type == 'location' ){
                //console.log('---------location-------')
                if(myCache.get("type_service"+userId) != null && myCache.get("select_band"+userId) != null && myCache.get("generation"+userId) != null && myCache.get("select_btu"+userId) != null && myCache.get("discription"+userId) != null && myCache.get("name_customer"+userId) != null ){
                    let address = (event.message.address);
                    let lat_lon = event.message.latitude+','+event.message.longitude
                    // console.log(address)
                    // console.log(lat_lon)
                    save_location(address,lat_lon,reply_token,userId,myCache)
                }
            }
        }else if(event.type == 'postback' ){
            //console.log('body : ',req.body.events[0])
            if((event.postback.data).substring(0, 11) == "select_type"){
                let type_service = (event.postback.data).substring(11, (event.postback.data).length);
                //console.log('type service: ',type_service)
                select_band(type_service,reply_token,userId,myCache)
                //requestStaff(type_service,reply_token,userId,myCache)

            }else if((event.postback.data).substring(0, 11) == "select_band"){
                let band_air = (event.postback.data).substring(11, (event.postback.data).length);
                //console.log('band_air: ',band_air)
                input_generation(band_air,reply_token,userId,myCache)
                //requestStaff(type_service,reply_token,userId,myCache)

            }else if((event.postback.data).substring(0, 10) == "select_btu"){
                let btu_air = (event.postback.data).substring(10, (event.postback.data).length);
                //console.log('btu_air: ',btu_air)
                input_discription(btu_air,reply_token,userId,myCache)
                //requestStaff(type_service,reply_token,userId,myCache)select_btu
            }
        }

    }catch (error) {
        console.log(error)
    }

    res.sendStatus(200)
    });

app.listen(port)

const hello = (msg,reply_token) => {
    c_greet.hello(msg,reply_token)
}

const select_type_service = (msg,reply_token,userId,myCache) => {
    c_selectTypeService.select_type_service(msg,reply_token,userId,myCache)
}

const select_band = (type_service,reply_token,userId,myCache) => {
    c_selectBandAir.select_band(type_service,reply_token,userId,myCache)
}

const input_generation = (band_air,reply_token,userId,myCache) => {
    c_inputGeneration.input_generation(band_air,reply_token,userId,myCache)
}

const select_btu = (msg,reply_token,userId,myCache) => {
    c_selectBTU.select_btu(msg,reply_token,userId,myCache)
}

const input_discription = (btu_air,reply_token,userId,myCache) => {
    c_inputDiscription.input_discription(btu_air,reply_token,userId,myCache)
}

const input_name_customer = (msg,reply_token,userId,myCache) => {
    c_inputNameCustomer.input_name_customer(msg,reply_token,userId,myCache)
}

const input_name = (msg,reply_token,userId,myCache) => {
    c_inputName.input_name(msg,reply_token,userId,myCache)
}

const save_location = (address,lat_lon,reply_token,userId,myCache) => {
    c_saveLocation.save_location(address,lat_lon,reply_token,userId,myCache)
}

const input_price = (price,reply_token,userId,myCache) => {
    c_inputPrice.input_price(price,reply_token,userId,myCache)
}

const save_data = (reply_token,userId,myCache) =>{
    c_saveData.save_data(reply_token,userId,myCache)
}

const cancle_data = (reply_token,userId,myCache) =>{
    c_cancleData.cancle_data(reply_token,userId,myCache)
}