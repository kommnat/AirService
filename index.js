const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const c_greet = require('./command/greet')

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
              }
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