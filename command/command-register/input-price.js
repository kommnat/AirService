//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
//--------------------------------------------------

let input_price = (price,reply_token,userId,myCache) => {
    
        myCache.set("price"+userId,price,300000);
        console.log("price :",price)
        input(reply_token)  
       
}

function input(reply_token) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                "type": "flex",
                "altText": "Flex Message",
                "contents": {
                  "type": "bubble",
                  "direction": "ltr",
                  "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": "บันทึกข้อมูล",
                        "size": "xl",
                        "align": "center",
                        "weight": "bold",
                        "color": "#433B3B"
                      },
                      //ติดตั้ง https://sv1.picz.in.th/images/2020/05/10/UVFget.png
                      //ซ่อม https://sv1.picz.in.th/images/2020/05/10/UVFbWV.png
                      //ล้าง https://sv1.picz.in.th/images/2020/05/10/UVFPbW.png
                      {
                        "type": "image",
                        "url": "https://sv1.picz.in.th/images/2020/05/10/UVFget.png",
                        "align": "center",
                        "gravity": "center",
                        "size": "full"
                      }
                    ]
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "text": "ประเภท :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "center",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "ล้างแอร์",
                            "flex": 2,
                            "align": "start",
                            "gravity": "center"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "ยี่ห้อ :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "center",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "Mitsubishi Electric",
                            "flex": 3,
                            "gravity": "center"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "รุ่น :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "center",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "kq-1234567",
                            "flex": 3,
                            "gravity": "center"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "BTU :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "center",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "9000",
                            "flex": 3,
                            "gravity": "center"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "คำอธิบาย :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "top",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "ไม่มี",
                            "flex": 1,
                            "align": "start",
                            "gravity": "center",
                            "wrap": true
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "เจ้าของ :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "center",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "น้องน้ำ",
                            "flex": 2,
                            "align": "start",
                            "gravity": "center",
                            "wrap": true
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "ตำแหน่ง :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "top",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "33/67 ถนน บรมราชชนนี แขวง ศาลาธรรมสพน์ เขตทวีวัฒนา กรุงเทพมหานคร 10170 ประเทศไทย",
                            "flex": 2,
                            "align": "start",
                            "gravity": "center",
                            "wrap": true
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "วันที่ :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "top",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "10/07/2563",
                            "flex": 3,
                            "align": "start",
                            "gravity": "center",
                            "wrap": true
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "ราคา(บาท) :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "top",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": "500",
                            "flex": 1,
                            "align": "start",
                            "gravity": "center",
                            "wrap": true
                          }
                        ]
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "lg",
                    "contents": [
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "ยกเลิก",
                          "text": "ยกเลิก"
                        },
                        "color": "#F26161",
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "message",
                          "label": "บันทึก",
                          "text": "บันทึก"
                        },
                        "style": "primary"
                      }
                    ]
                  }
                }
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
module.exports = {input_price}