module.exports = {
    flex_select_type: {
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
                "text": "กรุณาเลือกประเภทเซอร์วิส",
                "align": "center"
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "ติดตั้งแอร์",
                  "text": "เลือก ติดตั้งแอร์",
                  "data": "ติดตั้งแอร์"
                },
                "color": "#E3C965",
                "margin": "sm",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "ซ่อมแอร์",
                  "text": "เลือก ซ่อมแอร์",
                  "data": "ซ่อมแอร์"
                },
                "color": "#97D474",
                "margin": "sm",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "ล้างแอร์",
                  "text": "เลือก ล้างแอร์",
                  "data": "ล้างแอร์"
                },
                "color": "#FD8080",
                "margin": "sm",
                "style": "primary"
              }
            ]
          }
        }
      },




}