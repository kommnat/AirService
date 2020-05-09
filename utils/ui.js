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

      flex_select_brand_air : {
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
                "text": "กรุณาเลือกยี่ห้อแอร์",
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
                  "label": "Mitsubishi Electric",
                  "text": "เลือก Mitsubishi Electric",
                  "data": "select_bandMitsubishi Electric"
                },
                "color": "#E3C965",
                "margin": "sm",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Daikin",
                  "text": "เลือก Daikin",
                  "data": "select_bandDaikin"
                },
                "color": "#97D474",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Panasonic",
                  "text": "เลือก Panasonic",
                  "data": "select_bandPanasonic"
                },
                "color": "#FD8080",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Central",
                  "text": "เลือก Central",
                  "data": "select_bandCentral"
                },
                "color": "#B7C856",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Hitachi",
                  "text": "เลือก Hitachi",
                  "data": "select_bandHitachi"
                },
                "color": "#F65B5B",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Saijo Denki",
                  "text": "เลือก Saijo Denki",
                  "data": "select_bandSaijo Denki"
                },
                "color": "#8DD4DB",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Carrier",
                  "text": "เลือก Carrier",
                  "data": "select_bandCarrier"
                },
                "color": "#EC9CEC",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "LG",
                  "text": "เลือก LG",
                  "data": "select_bandLG"
                },
                "color": "#F4A189",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Sumsung",
                  "text": "เลือก Sumsung",
                  "data": "select_bandSumsung"
                },
                "color": "#59B961",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Toshiba",
                  "text": "เลือก Toshiba",
                  "data": "select_bandToshiba"
                },
                "color": "#B580FD",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "Haier",
                  "text": "เลือก Haier",
                  "data": "select_bandHaier"
                },
                "color": "#5450EE",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "TCL",
                  "text": "เลือก TCL",
                  "data": "select_bandTCL"
                },
                "color": "#7B386C",
                "margin": "md",
                "style": "primary"
              }
            ]
          }
        }
      }




}