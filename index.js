const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

function hello(msg, reply_token ,) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer nhA7Nnh79w2MKRuSJJig6x49gtc+Fgng19j/ACEisjRHdClkRNTWpIRock09/MGwPOqz1ZEKDoUXwmxPRnjOXGtKEmcneqOBpuFXcv0BQTYGEG0G2ECjqEmKa3jRjHgUc1Hv2Exw4tMMeF48YdEbDwdB04t89/1O/w1cDnyilFU='
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            'type': 'text',
            'text': msg
        },
    ]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        //console.log('status = ' + res.statusCode);
    });
}
