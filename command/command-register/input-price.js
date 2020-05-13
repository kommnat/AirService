//--------------------------------------------------
const cst = require('../../utils/constants')
const ui = require('../../utils/ui')
//--------------------------------------------------
const request = require('request')
var moment = require('moment')
//--------------------------------------------------

let input_price = (price,reply_token,userId,myCache) => {
    
        myCache.set("price"+userId,price,300000);
        let typeService = myCache.get("type_service"+userId)
        let bandAir = myCache.get("select_band"+userId)
        let generationAir = myCache.get("generation"+userId)
        let airBTU = myCache.get("select_btu"+userId)
        let discriptionService = myCache.get("discription"+userId)
        let nameCustomer = myCache.get("name_customer"+userId)
        let telCustomer = myCache.get("tel_customer"+userId)
        let addressCustomer = myCache.get("address"+userId)
        let lat_lon = myCache.get("lat_lon"+userId)
        let dateTime = moment().add(7, 'hours').format('YYYY-MM-D HH:MM')
        // console.log("type_service :",type_service)
        // console.log("price :",price)
        // console.log(typeService)
        // console.log(bandAir)
        // console.log(generationAir)
        // console.log(airBTU)
        // console.log(discriptionService)
        // console.log(nameCustomer)
        // console.log(addressCustomer)
        // console.log(lat_lon)
         //console.log(dateTime)
        // console.log('+++++++++++',price)
        // console.log("---------price------- :",myCache.get("price"+userId))
        input(reply_token,typeService,bandAir,generationAir,airBTU,discriptionService,nameCustomer,telCustomer,addressCustomer,lat_lon,dateTime,price)  
       
}

function input(reply_token,typeService,bandAir,generationAir,airBTU,discriptionService,nameCustomer,telCustomer,addressCustomer,lat_lon,dateTime,price)   {
    
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': cst.chanel_access_token
    }  
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                "type": "flex",
                "altText": "ลงทะเบียน",
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
                        "url": typeService == 'ติดตั้งแอร์'?('https://sv1.picz.in.th/images/2020/05/10/UVFget.png'):(typeService == 'ซ่อมแอร์'?('https://sv1.picz.in.th/images/2020/05/10/UVFbWV.png'):(typeService == 'ล้างแอร์'?('https://sv1.picz.in.th/images/2020/05/10/UVFPbW.png'):(''))) ,
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
                            "text": typeService,
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
                            "text": bandAir,
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
                            "text": generationAir,
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
                            "text": airBTU,
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
                            "text": discriptionService,
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
                            "text": nameCustomer,
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
                            "text": "เบอร์โทร :",
                            "size": "lg",
                            "align": "start",
                            "gravity": "center",
                            "weight": "bold"
                          },
                          {
                            "type": "text",
                            "text": telCustomer,
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
                            "text": addressCustomer,
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
                            "text": dateTime,
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
                            "text": price,
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