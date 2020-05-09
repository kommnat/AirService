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

        if(event.type == 'message'){
            if(event.message.type ==  'text'){
              console.log("msg :",event.message.text)
                if((event.message.text).trim() == 'สวัสดี' || (event.message.text).trim() == 'hello' || (event.message.text).trim() == 'สวัสดีครับ' || (event.message.text).trim() == 'สวัสดีคะ'){
                    let msg = (event.message.text).trim()
                    hello(msg,reply_token)
                }else if((event.message.text).trim() == 'ลงทะเบียน'){
                    let msg = (event.message.text).trim();
                    select_type_service(msg,reply_token,userId,myCache)
              }
            }
        }else if(event.type == 'postback' ){
            //console.log('body : ',req.body.events[0])
            if((event.postback.data).substring(0, 11) == "select_type"){
                let type_service = (event.postback.data).substring(11, (event.postback.data).length);
                console.log('type service: ',type_service)
                select_band(type_service,reply_token,userId,myCache)
                //requestStaff(type_service,reply_token,userId,myCache)
            }else if((event.postback.data).substring(0, 19) == "select_type_success"){
                let band_air = (event.postback.data).substring(19, (event.postback.data).length);
                console.log('band_air: ',band_air)
                //input_generation(band_air,reply_token,userId,myCache)
                //requestStaff(type_service,reply_token,userId,myCache)
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