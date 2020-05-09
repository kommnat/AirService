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
                  "data": "select_typeติดตั้งแอร์"
                },
                "color": "#E3C965",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "ซ่อมแอร์",
                  "text": "เลือก ซ่อมแอร์",
                  "data": "select_typeซ่อมแอร์"
                },
                "color": "#97D474",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "ล้างแอร์",
                  "text": "เลือก ล้างแอร์",
                  "data": "select_typeล้างแอร์"
                },
                "color": "#FD8080",
                "margin": "md",
                "style": "primary"
              }
            ]
          }
        }
      },




}