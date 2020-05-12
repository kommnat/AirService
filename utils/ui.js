module.exports = {
    flex_select_type: {
        "type": "flex",
        "altText": "กรุณาเลือกประเภทเซอร์วิส",
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
        "altText": "กรุณาเลือกยี่ห้อแอร์",
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
                  "label": "Mitsubishi Heavy Duty",
                  "text": "เลือก Mitsubishi Heavy Duty",
                  "data": "select_bandMitsubishi Heavy Duty"
                },
                "color": "#E9193E",
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
      },
      flex_select_btu : {
        "type": "flex",
        "altText": "กรุณาเลือก BTU",
        "contents": {
          "type": "bubble",
          "direction": "ltr",
          "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "กรุณาเลือก BTU",
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
                  "label": "9000 ",
                  "text": "เลือก 9000 BTU",
                  "data": "select_btu9000"
                },
                "color": "#E3C965",
                "margin": "sm",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "12000",
                  "text": "เลือก 12000 BTU",
                  "data": "select_btu12000"
                },
                "color": "#97D474",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "13000",
                  "text": "เลือก 13000 BTU",
                  "data": "select_btu13000"
                },
                "color": "#FD8080",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "15000",
                  "text": "เลือก 15000 BTU",
                  "data": "select_btu15000"
                },
                "color": "#92CADB",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "18000",
                  "text": "เลือก 18000 BTU",
                  "data": "select_btu18000"
                },
                "color": "#CADF74",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "24000",
                  "text": "เลือก 24000 BTU",
                  "data": "select_btu24000"
                },
                "color": "#8C8AE8",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "30000",
                  "text": "เลือก 30000 BTU",
                  "data": "select_btu30000"
                },
                "color": "#F79AB5",
                "margin": "md",
                "style": "primary"
              },
              {
                "type": "button",
                "action": {
                  "type": "postback",
                  "label": "36000",
                  "text": "เลือก 36000 BTU",
                  "data": "select_btu36000"
                },
                "color": "#8DC5A8",
                "margin": "md",
                "style": "primary"
              }
            ]
          }
        }
      }




}