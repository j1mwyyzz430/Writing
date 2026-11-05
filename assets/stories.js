// Reviewed, linked bilingual story contexts. All choices remain on this device.
var STORIES = [
  {
    "id": "S1",
    "icon": "🐠",
    "title": "1. 照顧金魚闖禍",
    "titleEn": "1. The Goldfish Mistake",
    "desc": "好心照顧金魚，卻因錯誤做法害金魚生病",
    "descEn": "Tried to care for the goldfish, but made it sick by mistake",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          },
          {
            "zh": "暑假的一天",
            "en": "A summer day"
          },
          {
            "zh": "放學回家後",
            "en": "After school"
          }
        ],
        "whos": [
          {
            "zh": "我和哥哥",
            "en": "My older brother and I"
          }
        ],
        "places": [
          {
            "zh": "哥哥的房間",
            "en": "my older brother's room"
          },
          {
            "zh": "家裏的客廳",
            "en": "the living room at home"
          },
          {
            "zh": "窗台旁邊",
            "en": "beside the window"
          }
        ],
        "causes": [
          {
            "zh": "哥哥外出前，請我暫時照看金魚",
            "en": "My older brother asked me to look after the goldfish before going out"
          },
          {
            "zh": "我看見家裏的金魚游得很慢",
            "en": "I noticed the goldfish at home swimming very slowly"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "怕金魚着涼，倒進熱水",
            "actionEn": "was afraid the goldfish would catch a cold and poured hot water in",
            "faces": [
              {
                "zh": "滿心歡喜",
                "en": "full of joy"
              },
              {
                "zh": "得意洋洋",
                "en": "proud and smug"
              }
            ],
            "thoughts": [
              {
                "zh": "游温水一定很舒服！",
                "en": "Swimming in warm water must feel so comfortable!"
              },
              {
                "zh": "哥哥一定會稱讚我！",
                "en": "My older brother will surely praise me!"
              }
            ],
            "results": [
              {
                "zh": "金魚被燙傷，在水裏無力地游動",
                "en": "the goldfish was scalded and swam weakly",
                "introObj": "魚缸旁的熱水壺",
                "introObjEn": "the kettle beside the fish tank",
                "introEvent": "倒熱水害金魚受傷",
                "introEventEn": "pouring hot water into the tank and hurting the goldfish"
              },
              {
                "zh": "金魚受不了熱水，急促地游來游去",
                "en": "the goldfish could not tolerate the hot water and darted around in distress",
                "introObj": "魚缸旁的熱水壺",
                "introObjEn": "the kettle beside the fish tank",
                "introEvent": "倒熱水害金魚受傷",
                "introEventEn": "pouring hot water into the tank and hurting the goldfish"
              }
            ],
            "introObj": "魚缸旁的熱水壺",
            "introObjEn": "the kettle beside the fish tank",
            "introEvent": "倒熱水害金魚受傷",
            "introEventEn": "pouring hot water into the tank and hurting the goldfish"
          },
          {
            "id": "B",
            "action": "想牠快長大，倒進半罐魚糧",
            "actionEn": "wanted it to grow fast and poured half a can of fish food in",
            "faces": [
              {
                "zh": "眉開眼笑",
                "en": "smiling from ear to ear"
              },
              {
                "zh": "十分期待",
                "en": "full of expectation"
              }
            ],
            "thoughts": [
              {
                "zh": "吃飽一點，就會快高長大！",
                "en": "Eat more and it will grow big fast!"
              },
              {
                "zh": "一次餵飽牠最省事！",
                "en": "Feeding it all at once saves the most trouble!"
              }
            ],
            "results": [
              {
                "zh": "魚缸水發臭，金魚肚脹生病了",
                "en": "the tank water turned smelly and the goldfish got bloated and sick",
                "introObj": "架上的那罐魚糧",
                "introObjEn": "the can of fish food on the shelf",
                "introEvent": "餵太多魚糧令金魚不適",
                "introEventEn": "overfeeding the goldfish and making it unwell"
              },
              {
                "zh": "魚糧塞滿水面，金魚差點缺氧",
                "en": "fish food covered the water and the goldfish almost suffocated",
                "introObj": "架上的那罐魚糧",
                "introObjEn": "the can of fish food on the shelf",
                "introEvent": "餵太多魚糧令金魚不適",
                "introEventEn": "overfeeding the goldfish and making it unwell"
              }
            ],
            "introObj": "架上的那罐魚糧",
            "introObjEn": "the can of fish food on the shelf",
            "introEvent": "餵太多魚糧令金魚不適",
            "introEventEn": "overfeeding the goldfish and making it unwell"
          },
          {
            "id": "C",
            "action": "用小網把金魚撈去小水杯玩",
            "actionEn": "used a small net to scoop the goldfish into a small cup to play",
            "faces": [
              {
                "zh": "興高采烈",
                "en": "excited and cheerful"
              },
              {
                "zh": "手舞足蹈",
                "en": "dancing with joy"
              }
            ],
            "thoughts": [
              {
                "zh": "放在杯裏看，真有趣！",
                "en": "Watching it in a small cup is so much fun!"
              },
              {
                "zh": "只玩一會兒，不會有事的！",
                "en": "Just playing for a little while won't hurt!"
              }
            ],
            "results": [
              {
                "zh": "金魚受驚跳到桌面上，差點乾死",
                "en": "the frightened goldfish jumped onto the desk and almost dried out",
                "introObj": "魚缸旁的小魚網",
                "introObjEn": "the small fish net beside the tank",
                "introEvent": "亂撈金魚令牠受傷",
                "introEventEn": "scooping the goldfish recklessly and hurting it"
              },
              {
                "zh": "我不小心碰跌水杯，金魚摔在地上",
                "en": "I accidentally knocked over the cup and the goldfish fell on the floor",
                "introObj": "魚缸旁的小魚網",
                "introObjEn": "the small fish net beside the tank",
                "introEvent": "亂撈金魚令牠受傷",
                "introEventEn": "scooping the goldfish recklessly and hurting it"
              }
            ],
            "introObj": "魚缸旁的小魚網",
            "introObjEn": "the small fish net beside the tank",
            "introEvent": "亂撈金魚令牠受傷",
            "introEventEn": "scooping the goldfish recklessly and hurting it",
            "regrets": [
              {
                "zh": "我真不該把金魚當玩具，害牠受傷！",
                "en": "I should not have treated the goldfish as a toy and hurt it!"
              },
              {
                "zh": "只顧自己貪玩，卻沒有想過金魚的安全！",
                "en": "I only thought about having fun and forgot the goldfish’s safety!"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆住了，手足無措",
            "en": "was stunned with fear and didn't know what to do"
          },
          {
            "zh": "臉上一陣發熱，眼淚湧出眼眶",
            "en": "felt my face burn hot as tears welled up in my eyes"
          }
        ],
        "regrets": [
          {
            "zh": "糟了！我好心做壞事闖禍了！",
            "en": "Oh no! My good intentions caused a big mess!"
          },
          {
            "zh": "我真不該自以為是亂動金魚！",
            "en": "I really shouldn't have touched the goldfish so recklessly!"
          }
        ],
        "endings": [
          {
            "zh": "立即向哥哥求助，承認錯誤並一起照料金魚",
            "en": "asked my older brother for help immediately, admitted my mistake and cared for the fish together"
          },
          {
            "zh": "鼓起勇氣向哥哥認錯，並學習正確的照顧方法",
            "en": "admitted my mistake to my older brother and learned how to care for the fish properly"
          }
        ],
        "lessons": [
          {
            "zh": "做事不能自以為是，要先問清楚",
            "en": "we must not be self-righteous and should ask clearly first"
          },
          {
            "zh": "照顧動物要有正確知識，不能魯莽",
            "en": "caring for animals requires proper knowledge, not rash actions"
          }
        ],
        "futureActions": [
          {
            "zh": "動手前先詢問家人，三思而後行",
            "en": "ask my family before acting and think twice"
          },
          {
            "zh": "先查清楚正確方法，不再亂來",
            "en": "check the right method first and never act recklessly"
          }
        ],
        "feelings": [
          {
            "zh": "慚愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "十分內疚",
            "en": "very guilty"
          }
        ],
        "id": "male",
        "label": "哥哥的金魚",
        "labelEn": "My older brother’s goldfish",
        "forbidden": [
          "姐姐",
          "她"
        ]
      },
      {
        "times": [
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          },
          {
            "zh": "暑假的一天",
            "en": "A summer day"
          },
          {
            "zh": "放學回家後",
            "en": "After school"
          }
        ],
        "whos": [
          {
            "zh": "我和姐姐",
            "en": "My older sister and I"
          }
        ],
        "places": [
          {
            "zh": "姐姐的房間",
            "en": "my older sister's room"
          },
          {
            "zh": "家裏的客廳",
            "en": "the living room at home"
          },
          {
            "zh": "窗台旁邊",
            "en": "beside the window"
          }
        ],
        "causes": [
          {
            "zh": "姐姐外出前，請我暫時照看金魚",
            "en": "My older sister asked me to look after the goldfish before going out"
          },
          {
            "zh": "我看見家裏的金魚游得很慢",
            "en": "I noticed the goldfish at home swimming very slowly"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "怕金魚着涼，倒進熱水",
            "actionEn": "was afraid the goldfish would catch a cold and poured hot water in",
            "faces": [
              {
                "zh": "滿心歡喜",
                "en": "full of joy"
              },
              {
                "zh": "得意洋洋",
                "en": "proud and smug"
              }
            ],
            "thoughts": [
              {
                "zh": "游温水一定很舒服！",
                "en": "Swimming in warm water must feel so comfortable!"
              },
              {
                "zh": "姐姐一定會稱讚我！",
                "en": "My older sister will surely praise me!"
              }
            ],
            "results": [
              {
                "zh": "金魚被燙傷，在水裏無力地游動",
                "en": "the goldfish was scalded and swam weakly",
                "introObj": "魚缸旁的熱水壺",
                "introObjEn": "the kettle beside the fish tank",
                "introEvent": "倒熱水害金魚受傷",
                "introEventEn": "pouring hot water into the tank and hurting the goldfish"
              },
              {
                "zh": "金魚受不了熱水，急促地游來游去",
                "en": "the goldfish could not tolerate the hot water and darted around in distress",
                "introObj": "魚缸旁的熱水壺",
                "introObjEn": "the kettle beside the fish tank",
                "introEvent": "倒熱水害金魚受傷",
                "introEventEn": "pouring hot water into the tank and hurting the goldfish"
              }
            ],
            "introObj": "魚缸旁的熱水壺",
            "introObjEn": "the kettle beside the fish tank",
            "introEvent": "倒熱水害金魚受傷",
            "introEventEn": "pouring hot water into the tank and hurting the goldfish"
          },
          {
            "id": "B",
            "action": "想牠快長大，倒進半罐魚糧",
            "actionEn": "wanted it to grow fast and poured half a can of fish food in",
            "faces": [
              {
                "zh": "眉開眼笑",
                "en": "smiling from ear to ear"
              },
              {
                "zh": "十分期待",
                "en": "full of expectation"
              }
            ],
            "thoughts": [
              {
                "zh": "吃飽一點，就會快高長大！",
                "en": "Eat more and it will grow big fast!"
              },
              {
                "zh": "一次餵飽牠最省事！",
                "en": "Feeding it all at once saves the most trouble!"
              }
            ],
            "results": [
              {
                "zh": "魚缸水發臭，金魚肚脹生病了",
                "en": "the tank water turned smelly and the goldfish got bloated and sick",
                "introObj": "架上的那罐魚糧",
                "introObjEn": "the can of fish food on the shelf",
                "introEvent": "餵太多魚糧令金魚不適",
                "introEventEn": "overfeeding the goldfish and making it unwell"
              },
              {
                "zh": "魚糧塞滿水面，金魚差點缺氧",
                "en": "fish food covered the water and the goldfish almost suffocated",
                "introObj": "架上的那罐魚糧",
                "introObjEn": "the can of fish food on the shelf",
                "introEvent": "餵太多魚糧令金魚不適",
                "introEventEn": "overfeeding the goldfish and making it unwell"
              }
            ],
            "introObj": "架上的那罐魚糧",
            "introObjEn": "the can of fish food on the shelf",
            "introEvent": "餵太多魚糧令金魚不適",
            "introEventEn": "overfeeding the goldfish and making it unwell"
          },
          {
            "id": "C",
            "action": "用小網把金魚撈去小水杯玩",
            "actionEn": "used a small net to scoop the goldfish into a small cup to play",
            "faces": [
              {
                "zh": "興高采烈",
                "en": "excited and cheerful"
              },
              {
                "zh": "手舞足蹈",
                "en": "dancing with joy"
              }
            ],
            "thoughts": [
              {
                "zh": "放在杯裏看，真有趣！",
                "en": "Watching it in a small cup is so much fun!"
              },
              {
                "zh": "只玩一會兒，不會有事的！",
                "en": "Just playing for a little while won't hurt!"
              }
            ],
            "results": [
              {
                "zh": "金魚受驚跳到桌面上，差點乾死",
                "en": "the frightened goldfish jumped onto the desk and almost dried out",
                "introObj": "魚缸旁的小魚網",
                "introObjEn": "the small fish net beside the tank",
                "introEvent": "亂撈金魚令牠受傷",
                "introEventEn": "scooping the goldfish recklessly and hurting it"
              },
              {
                "zh": "我不小心碰跌水杯，金魚摔在地上",
                "en": "I accidentally knocked over the cup and the goldfish fell on the floor",
                "introObj": "魚缸旁的小魚網",
                "introObjEn": "the small fish net beside the tank",
                "introEvent": "亂撈金魚令牠受傷",
                "introEventEn": "scooping the goldfish recklessly and hurting it"
              }
            ],
            "introObj": "魚缸旁的小魚網",
            "introObjEn": "the small fish net beside the tank",
            "introEvent": "亂撈金魚令牠受傷",
            "introEventEn": "scooping the goldfish recklessly and hurting it",
            "regrets": [
              {
                "zh": "我真不該把金魚當玩具，害牠受傷！",
                "en": "I should not have treated the goldfish as a toy and hurt it!"
              },
              {
                "zh": "只顧自己貪玩，卻沒有想過金魚的安全！",
                "en": "I only thought about having fun and forgot the goldfish’s safety!"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆住了，手足無措",
            "en": "was stunned with fear and didn't know what to do"
          },
          {
            "zh": "臉上一陣發熱，眼淚湧出眼眶",
            "en": "felt my face burn hot as tears welled up in my eyes"
          }
        ],
        "regrets": [
          {
            "zh": "糟了！我好心做壞事闖禍了！",
            "en": "Oh no! My good intentions caused a big mess!"
          },
          {
            "zh": "我真不該自以為是亂動金魚！",
            "en": "I really shouldn't have touched the goldfish so recklessly!"
          }
        ],
        "endings": [
          {
            "zh": "立即向姐姐求助，承認錯誤並一起照料金魚",
            "en": "asked my older sister for help immediately, admitted my mistake and cared for the fish together"
          },
          {
            "zh": "鼓起勇氣向姐姐認錯，並學習正確的照顧方法",
            "en": "admitted my mistake to my older sister and learned how to care for the fish properly"
          }
        ],
        "lessons": [
          {
            "zh": "做事不能自以為是，要先問清楚",
            "en": "we must not be self-righteous and should ask clearly first"
          },
          {
            "zh": "照顧動物要有正確知識，不能魯莽",
            "en": "caring for animals requires proper knowledge, not rash actions"
          }
        ],
        "futureActions": [
          {
            "zh": "動手前先詢問家人，三思而後行",
            "en": "ask my family before acting and think twice"
          },
          {
            "zh": "先查清楚正確方法，不再亂來",
            "en": "check the right method first and never act recklessly"
          }
        ],
        "feelings": [
          {
            "zh": "慚愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "十分內疚",
            "en": "very guilty"
          }
        ],
        "id": "female",
        "label": "姐姐的金魚",
        "labelEn": "My older sister’s goldfish",
        "forbidden": [
          "哥哥",
          "他"
        ]
      }
    ]
  },
  {
    "id": "S2",
    "icon": "🚗",
    "title": "2. 爭搶新玩具闖禍",
    "titleEn": "2. Fighting Over a New Toy",
    "desc": "與弟妹爭玩新買的玩具，一時衝動弄壞玩具或弄傷人",
    "descEn": "Fought with my younger sibling over a new toy and broke it or hurt them",
    "contexts": [
      {
        "times": [
          {
            "zh": "上星期天下午",
            "en": "Last Sunday afternoon"
          },
          {
            "zh": "昨天放學後",
            "en": "Yesterday after school"
          }
        ],
        "whos": [
          {
            "zh": "我、弟弟和媽媽",
            "en": "My younger brother, Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的客廳",
            "en": "the living room at home"
          },
          {
            "zh": "睡房的地毯上",
            "en": "the bedroom carpet"
          }
        ],
        "causes": [
          {
            "zh": "我拿出新遙控車玩，弟弟也想玩",
            "en": "I took out my new RC car and my younger brother wanted a turn"
          },
          {
            "zh": "弟弟伸手想拿我的新玩具車",
            "en": "My younger brother reached for my new toy car"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "一口拒絕，還用力把弟弟推開",
            "actionEn": "refused flatly and pushed my younger brother away hard",
            "faces": [
              {
                "zh": "氣得滿臉通紅",
                "en": "red-faced with anger"
              },
              {
                "zh": "皺起眉頭，雙眼瞪大",
                "en": "frowned and glared with wide eyes"
              }
            ],
            "thoughts": [
              {
                "zh": "這是我的，憑甚麼讓給他！",
                "en": "This is mine! Why should I yield to him!"
              },
              {
                "zh": "他一定會弄壞我的玩具！",
                "en": "He will definitely break my new toy!"
              }
            ],
            "results": [
              {
                "zh": "弟弟摔倒在地上，額頭撞瘀大哭",
                "en": "my younger brother fell to the ground, bruised his forehead, and cried loudly",
                "introObj": "那輛新買的玩具車",
                "introObjEn": "the new toy car",
                "introEvent": "爭玩具推跌弟弟",
                "introEventEn": "pushing my younger brother down while fighting over a toy"
              },
              {
                "zh": "弟弟撞到桌角，哭得滿臉淚水",
                "en": "my younger brother hit the table corner and cried with tears all over his face",
                "introObj": "那輛新買的玩具車",
                "introObjEn": "the new toy car",
                "introEvent": "爭玩具推跌弟弟",
                "introEventEn": "pushing my younger brother down while fighting over a toy"
              }
            ],
            "introObj": "那輛新買的玩具車",
            "introObjEn": "the new toy car",
            "introEvent": "爭玩具推跌弟弟",
            "introEventEn": "pushing my younger brother down while fighting over a toy"
          },
          {
            "id": "B",
            "action": "死命拉扯玩具，不肯放手",
            "actionEn": "pulled the toy fiercely and refused to let go",
            "faces": [
              {
                "zh": "咬緊牙關，滿臉怒氣",
                "en": "clenched my teeth, full of anger"
              },
              {
                "zh": "拉長了臉，大聲嚷着",
                "en": "pulled a long face and shouted loudly"
              }
            ],
            "thoughts": [
              {
                "zh": "誰也別想搶走我的玩具！",
                "en": "No one can take my toy away from me!"
              },
              {
                "zh": "這是我的玩具，應該由我決定！",
                "en": "It is my toy, so I should decide!"
              }
            ],
            "results": [
              {
                "zh": "「啪」一聲，玩具車摔在地上破了",
                "en": "with a loud crack, the toy car fell to the floor and broke",
                "introObj": "書桌上那輛裂開的玩具車",
                "introObjEn": "that cracked toy car on the desk",
                "introEvent": "爭搶玩具導致摔破",
                "introEventEn": "breaking the toy while fighting over it"
              },
              {
                "zh": "車輪飛脱出來，兩個人都沒得玩",
                "en": "the wheels flew off, so neither of us could play anymore",
                "introObj": "書桌上那輛裂開的玩具車",
                "introObjEn": "that cracked toy car on the desk",
                "introEvent": "爭搶玩具導致摔破",
                "introEventEn": "breaking the toy while fighting over it"
              }
            ],
            "introObj": "書桌上那輛裂開的玩具車",
            "introObjEn": "that cracked toy car on the desk",
            "introEvent": "爭搶玩具導致摔破",
            "introEventEn": "breaking the toy while fighting over it",
            "regrets": [
              {
                "zh": "為了一件玩具和弟弟爭搶，結果大家都沒得玩！",
                "en": "Fighting with my younger brother over a toy left neither of us able to play"
              },
              {
                "zh": "我真不該這麼自私，應該輪流玩！",
                "en": "I should not have been so selfish; we should have taken turns!"
              }
            ],
            "endings": [
              {
                "zh": "向弟弟道歉，請媽媽幫忙修理玩具車",
                "en": "apologized to my younger brother and asked Mum to help repair the toy car"
              },
              {
                "zh": "主動承認錯誤，答應以後輪流玩玩具",
                "en": "admitted my mistake and promised to take turns with toys in future"
              }
            ]
          },
          {
            "id": "C",
            "action": "把玩具舉得高高的，還嘲笑他矮",
            "actionEn": "held the toy high up and mocked him for being short",
            "faces": [
              {
                "zh": "得意洋洋，哈哈大笑",
                "en": "smug and laughing out loud"
              },
              {
                "zh": "扮鬼臉取笑他",
                "en": "making faces to tease him"
              }
            ],
            "thoughts": [
              {
                "zh": "你這麼矮，一定拿不到！",
                "en": "You are so short, you can never reach it!"
              },
              {
                "zh": "看你急得跳起來真好笑！",
                "en": "It's so funny watching you jump in a hurry!"
              }
            ],
            "results": [
              {
                "zh": "他爬上椅子去搶，結果連人帶椅摔倒",
                "en": "he climbed onto a chair to grab it and fell down with the chair",
                "introObj": "客廳裏那輛玩具車",
                "introObjEn": "the toy car in the living room",
                "introEvent": "捉弄弟弟令他摔傷",
                "introEventEn": "teasing my younger brother and causing him to fall and get hurt"
              },
              {
                "zh": "他絆倒在地，手掌擦破流血了",
                "en": "he tripped onto the floor and scraped his palm bleeding",
                "introObj": "客廳裏那輛玩具車",
                "introObjEn": "the toy car in the living room",
                "introEvent": "捉弄弟弟令他摔傷",
                "introEventEn": "teasing my younger brother and causing him to fall and get hurt"
              }
            ],
            "introObj": "客廳裏那輛玩具車",
            "introObjEn": "the toy car in the living room",
            "introEvent": "捉弄弟弟令他摔傷",
            "introEventEn": "teasing my younger brother and causing him to fall and get hurt"
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆住了，心裏慌亂極了",
            "en": "was stunned with fear and my heart panicked"
          },
          {
            "zh": "臉上一陣發熱，低頭不敢作聲",
            "en": "felt my face burn hot and lowered my head in silence"
          }
        ],
        "regrets": [
          {
            "zh": "糟了！我真不該這麼自私衝動！",
            "en": "Oh no! I really shouldn't be so selfish and impulsive!"
          },
          {
            "zh": "為了一件玩具弄傷他，真不應該！",
            "en": "Hurting him over a toy is truly wrong of me!"
          }
        ],
        "endings": [
          {
            "zh": "連忙扶起他，小聲說：「對不起！」",
            "en": "quickly helped him up and whispered, \"I'm sorry!\""
          },
          {
            "zh": "主動拿藥膏幫他塗，並誠懇認錯",
            "en": "brought ointment to apply on him and apologized sincerely"
          }
        ],
        "lessons": [
          {
            "zh": "手足之間要懂得禮讓和分享",
            "en": "siblings should learn to yield to and share with each other"
          },
          {
            "zh": "做人不能自私衝動，要愛護弟弟",
            "en": "we must not be selfish or impulsive, and should care for younger siblings"
          }
        ],
        "futureActions": [
          {
            "zh": "主動和弟弟一起分享玩具",
            "en": "willingly share toys with my younger siblings"
          },
          {
            "zh": "遇到爭執先冷靜，不再動手搶",
            "en": "stay calm during disputes and never grab by force"
          }
        ],
        "feelings": [
          {
            "zh": "慚愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "後悔萬分",
            "en": "extremely regretful"
          }
        ],
        "id": "male",
        "label": "和弟弟爭玩具車",
        "labelEn": "Fighting over a toy car with my younger brother",
        "forbidden": [
          "妹妹",
          "她"
        ]
      },
      {
        "times": [
          {
            "zh": "上星期天下午",
            "en": "Last Sunday afternoon"
          },
          {
            "zh": "昨天放學後",
            "en": "Yesterday after school"
          }
        ],
        "whos": [
          {
            "zh": "我、妹妹和媽媽",
            "en": "My younger sister, Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的客廳",
            "en": "tshe living room at home"
          },
          {
            "zh": "睡房的地毯上",
            "en": "tshe bedroom carpet"
          }
        ],
        "causes": [
          {
            "zh": "我拿出新遙控車玩，妹妹也想玩",
            "en": "I took out my new RC car and my younger sister wanted a turn"
          },
          {
            "zh": "妹妹伸手想拿我的新玩具車",
            "en": "My younger sister reached for my new toy car"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "一口拒絕，還用力把妹妹推開",
            "actionEn": "refused flatly and pushed my younger sister away hard",
            "faces": [
              {
                "zh": "氣得滿臉通紅",
                "en": "red-faced with anger"
              },
              {
                "zh": "皺起眉頭，雙眼瞪大",
                "en": "frowned and glared with wide eyes"
              }
            ],
            "thoughts": [
              {
                "zh": "這是我的，憑甚麼讓給她！",
                "en": "Ther is mine! Why should I yield to her!"
              },
              {
                "zh": "她一定會弄壞我的玩具！",
                "en": "Sshe will definitely break my new toy!"
              }
            ],
            "results": [
              {
                "zh": "妹妹摔倒在地上，額頭撞瘀大哭",
                "en": "my younger sister fell to tshe ground, bruised her forehead, and cried loudly",
                "introObj": "那輛新買的玩具車",
                "introObjEn": "the new toy car",
                "introEvent": "爭玩具推跌妹妹",
                "introEventEn": "pushing my younger sister down while fighting over a toy"
              },
              {
                "zh": "妹妹撞到桌角，哭得滿臉淚水",
                "en": "my younger sister hit tshe table corner and cried with tears all over her face",
                "introObj": "那輛新買的玩具車",
                "introObjEn": "the new toy car",
                "introEvent": "爭玩具推跌妹妹",
                "introEventEn": "pushing my younger sister down while fighting over a toy"
              }
            ],
            "introObj": "那輛新買的玩具車",
            "introObjEn": "the new toy car",
            "introEvent": "爭玩具推跌妹妹",
            "introEventEn": "pushing my younger sister down while fighting over a toy"
          },
          {
            "id": "B",
            "action": "死命拉扯玩具，不肯放手",
            "actionEn": "pulled tshe toy fiercely and refused to let go",
            "faces": [
              {
                "zh": "咬緊牙關，滿臉怒氣",
                "en": "clenched my teeth, full of anger"
              },
              {
                "zh": "拉長了臉，大聲嚷着",
                "en": "pulled a long face and shouted loudly"
              }
            ],
            "thoughts": [
              {
                "zh": "誰也別想搶走我的玩具！",
                "en": "No one can take my toy away from me!"
              },
              {
                "zh": "這是我的玩具，應該由我決定！",
                "en": "It is my toy, so I should decide!"
              }
            ],
            "results": [
              {
                "zh": "「啪」一聲，玩具車摔在地上破了",
                "en": "with a loud crack, tshe toy car fell to tshe floor and broke",
                "introObj": "書桌上那輛裂開的玩具車",
                "introObjEn": "that cracked toy car on tshe desk",
                "introEvent": "爭搶玩具導致摔破",
                "introEventEn": "breaking tshe toy while fighting over it"
              },
              {
                "zh": "車輪飛脱出來，兩個人都沒得玩",
                "en": "tshe wheels flew off, so neither of us could play anymore",
                "introObj": "書桌上那輛裂開的玩具車",
                "introObjEn": "that cracked toy car on tshe desk",
                "introEvent": "爭搶玩具導致摔破",
                "introEventEn": "breaking tshe toy while fighting over it"
              }
            ],
            "introObj": "書桌上那輛裂開的玩具車",
            "introObjEn": "that cracked toy car on tshe desk",
            "introEvent": "爭搶玩具導致摔破",
            "introEventEn": "breaking tshe toy while fighting over it",
            "regrets": [
              {
                "zh": "為了一件玩具和妹妹爭搶，結果大家都沒得玩！",
                "en": "Fighting with my younger sister over a toy left neither of us able to play"
              },
              {
                "zh": "我真不該這麼自私，應該輪流玩！",
                "en": "I should not have been so selfish; we should have taken turns!"
              }
            ],
            "endings": [
              {
                "zh": "向妹妹道歉，請媽媽幫忙修理玩具車",
                "en": "apologized to my younger sister and asked Mum to help repair the toy car"
              },
              {
                "zh": "主動承認錯誤，答應以後輪流玩玩具",
                "en": "admitted my mistake and promised to take turns with toys in future"
              }
            ]
          },
          {
            "id": "C",
            "action": "把玩具舉得高高的，還嘲笑她矮",
            "actionEn": "held tshe toy high up and mocked her for being short",
            "faces": [
              {
                "zh": "得意洋洋，哈哈大笑",
                "en": "smug and laughing out loud"
              },
              {
                "zh": "扮鬼臉取笑她",
                "en": "making faces to tease her"
              }
            ],
            "thoughts": [
              {
                "zh": "你這麼矮，一定拿不到！",
                "en": "You are so short, you can never reach it!"
              },
              {
                "zh": "看你急得跳起來真好笑！",
                "en": "It's so funny watching you jump in a hurry!"
              }
            ],
            "results": [
              {
                "zh": "她爬上椅子去搶，結果連人帶椅摔倒",
                "en": "she climbed onto a chair to grab it and fell down with tshe chair",
                "introObj": "客廳裏那輛玩具車",
                "introObjEn": "the toy car in the living room",
                "introEvent": "捉弄妹妹令她摔傷",
                "introEventEn": "teasing my younger sister and causing her to fall and get hurt"
              },
              {
                "zh": "她絆倒在地，手掌擦破流血了",
                "en": "she tripped onto tshe floor and scraped her palm bleeding",
                "introObj": "客廳裏那輛玩具車",
                "introObjEn": "the toy car in the living room",
                "introEvent": "捉弄妹妹令她摔傷",
                "introEventEn": "teasing my younger sister and causing her to fall and get hurt"
              }
            ],
            "introObj": "客廳裏那輛玩具車",
            "introObjEn": "the toy car in the living room",
            "introEvent": "捉弄妹妹令她摔傷",
            "introEventEn": "teasing my younger sister and causing her to fall and get hurt"
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆住了，心裏慌亂極了",
            "en": "was stunned with fear and my heart panicked"
          },
          {
            "zh": "臉上一陣發熱，低頭不敢作聲",
            "en": "felt my face burn hot and lowered my head in silence"
          }
        ],
        "regrets": [
          {
            "zh": "糟了！我真不該這麼自私衝動！",
            "en": "Oh no! I really shouldn't be so selfish and impulsive!"
          },
          {
            "zh": "為了一件玩具弄傷她，真不應該！",
            "en": "Hurting her over a toy is truly wrong of me!"
          }
        ],
        "endings": [
          {
            "zh": "連忙扶起她，小聲說：「對不起！」",
            "en": "quickly helped her up and whispered, \"I'm sorry!\""
          },
          {
            "zh": "主動拿藥膏幫她塗，並誠懇認錯",
            "en": "brought ointment to apply on her and apologized sincerely"
          }
        ],
        "lessons": [
          {
            "zh": "手足之間要懂得禮讓和分享",
            "en": "siblings should learn to yield to and share with each other"
          },
          {
            "zh": "做人不能自私衝動，要愛護妹妹",
            "en": "we must not be selfish or impulsive, and should care for younger siblings"
          }
        ],
        "futureActions": [
          {
            "zh": "主動和妹妹一起分享玩具",
            "en": "willingly share toys with my younger siblings"
          },
          {
            "zh": "遇到爭執先冷靜，不再動手搶",
            "en": "stay calm during disputes and never grab by force"
          }
        ],
        "feelings": [
          {
            "zh": "慚愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "後悔萬分",
            "en": "extremely regretful"
          }
        ],
        "id": "female",
        "label": "和妹妹爭玩具車",
        "labelEn": "Fighting over a toy car with my younger sister",
        "forbidden": [
          "弟弟",
          "他"
        ]
      }
    ]
  },
  {
    "id": "S3",
    "icon": "🍰",
    "title": "3. 偷吃留給家人的蛋糕",
    "titleEn": "3. Sneaking the Special Cake",
    "desc": "抵受不住誘惑，偷吃了留給媽媽或妹妹的蛋糕",
    "descEn": "Couldn't resist temptation and secretly ate the cake saved for Mum or sister",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期六下午",
            "en": "Saturday afternoon"
          },
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          }
        ],
        "whos": [
          {
            "zh": "我和媽媽",
            "en": "Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的廚房",
            "en": "the kitchen at home"
          },
          {
            "zh": "雪櫃旁邊",
            "en": "beside the refrigerator"
          }
        ],
        "causes": [
          {
            "zh": "雪櫃放着一盒留給媽媽的士多啤梨蛋糕",
            "en": "A box of strawberry cakes was saved for Mum in the fridge"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "趁沒人看見，把盒裏的蛋糕全部吃光",
            "actionEn": "ate all the cakes in the box while no one was looking",
            "faces": [
              {
                "zh": "吃得津津有味",
                "en": "eating with great relish"
              },
              {
                "zh": "舔着嘴角，滿心歡喜",
                "en": "licking my lips, full of joy"
              }
            ],
            "thoughts": [
              {
                "zh": "太美味了，吃光才算痛快！",
                "en": "So delicious! Eating it all feels wonderful!"
              },
              {
                "zh": "就說是小貓偷吃的吧！",
                "en": "I'll just say the cat ate it!"
              }
            ],
            "results": [
              {
                "zh": "媽媽回來後發現蛋糕沒了，失望地低下頭",
                "en": "Mum came back, found the cakes gone and lowered her head in disappointment",
                "introObj": "雪櫃上的蛋糕紙盒",
                "introObjEn": "the cake paper box on top of the fridge",
                "introEvent": "貪吃偷吃家人的蛋糕",
                "introEventEn": "secretly eating my family's cake out of greed"
              },
              {
                "zh": "媽媽問起蛋糕去了哪裏，我心虛得不敢回答",
                "en": "Mum asked where the cakes had gone, and I felt too guilty to answer",
                "introObj": "雪櫃上的蛋糕紙盒",
                "introObjEn": "the cake paper box on top of the fridge",
                "introEvent": "貪吃偷吃家人的蛋糕",
                "introEventEn": "secretly eating my family's cake out of greed"
              }
            ],
            "introObj": "雪櫃上的蛋糕紙盒",
            "introObjEn": "the cake paper box on top of the fridge",
            "introEvent": "貪吃偷吃家人的蛋糕",
            "introEventEn": "secretly eating my family's cake out of greed"
          },
          {
            "id": "B",
            "action": "偷挖走蛋糕上全部士多啤梨，還撒謊不承認",
            "actionEn": "secretly picked off all the strawberries on top and lied to deny it",
            "faces": [
              {
                "zh": "神色慌張，連忙抹嘴",
                "en": "looking flustered and wiping my mouth quickly"
              },
              {
                "zh": "假裝鎮定，搖頭否認",
                "en": "pretending to be calm and shaking my head in denial"
              }
            ],
            "thoughts": [
              {
                "zh": "只吃水果，應該沒人發覺吧！",
                "en": "Only eating the fruit—no one will notice!"
              },
              {
                "zh": "千萬不能承認，否則會被罵！",
                "en": "I must never admit it, or I will be scolded!"
              }
            ],
            "results": [
              {
                "zh": "媽媽看見我嘴角的忌廉，問我為甚麼說謊",
                "en": "Mum saw cream on my mouth and asked why I had lied",
                "introObj": "甜品店的小叉子",
                "introObjEn": "the small dessert fork from the bakery",
                "introEvent": "偷吃蛋糕還說謊瞞騙",
                "introEventEn": "sneaking the cake and lying to cover it up"
              },
              {
                "zh": "媽媽指出蛋糕上的水果全沒了，我羞愧地低下頭",
                "en": "Mum pointed out that all the fruit was missing and I lowered my head in shame",
                "introObj": "甜品店的小叉子",
                "introObjEn": "the small dessert fork from the bakery",
                "introEvent": "偷吃蛋糕還說謊瞞騙",
                "introEventEn": "sneaking the cake and lying to cover it up"
              }
            ],
            "introObj": "甜品店的小叉子",
            "introObjEn": "the small dessert fork from the bakery",
            "introEvent": "偷吃蛋糕還說謊瞞騙",
            "introEventEn": "sneaking the cake and lying to cover it up"
          },
          {
            "id": "C",
            "action": "一連偷吃三件蛋糕，完全停不下來",
            "actionEn": "secretly ate three pieces of cake in a row without stopping",
            "faces": [
              {
                "zh": "眉開眼笑，大口吞下",
                "en": "grinning broadly and gulping them down"
              },
              {
                "zh": "得意忘形，一吃再吃",
                "en": "carried away and eating one after another"
              }
            ],
            "thoughts": [
              {
                "zh": "這麼香甜，再吃兩件也沒關係！",
                "en": "It is so sweet—two more pieces will be fine!"
              },
              {
                "zh": "趁媽媽不在，吃個夠！",
                "en": "I will eat as much as I can while Mum is away!"
              }
            ],
            "results": [
              {
                "zh": "吃得太多，肚子脹痛，只好停下來休息",
                "en": "I ate too much, felt bloated and had to stop and rest",
                "introObj": "雪櫃裏的蛋糕盒",
                "introObjEn": "the cake box in the fridge",
                "introEvent": "貪吃太多蛋糕令肚子不適",
                "introEventEn": "eating too much cake and feeling unwell"
              },
              {
                "zh": "我抱着肚子說不舒服，媽媽擔心地過來照顧我",
                "en": "I held my stomach and said I felt unwell, so Mum came to look after me",
                "introObj": "雪櫃裏的蛋糕盒",
                "introObjEn": "the cake box in the fridge",
                "introEvent": "貪吃太多蛋糕令肚子不適",
                "introEventEn": "eating too much cake and feeling unwell"
              }
            ],
            "introObj": "雪櫃裏的蛋糕盒",
            "introObjEn": "the cake box in the fridge",
            "introEvent": "貪吃太多蛋糕令肚子不適",
            "introEventEn": "eating too much cake and feeling unwell"
          }
        ],
        "reactions": [
          {
            "zh": "臉紅耳赤，羞愧得無地自容",
            "en": "blushed deeply and felt too ashamed to show my face"
          },
          {
            "zh": "低着頭，雙手緊捏衣角不敢作聲",
            "en": "lowered my head and twisted my shirt corner in silence"
          }
        ],
        "regrets": [
          {
            "zh": "我真不該這麼貪吃自私，只顧自己！",
            "en": "I really shouldn't be so greedy and selfish, caring only for myself!"
          },
          {
            "zh": "既貪吃又連累家人擔心，真不應該！",
            "en": "Being greedy and making my family worry is truly wrong!"
          }
        ],
        "endings": [
          {
            "zh": "主動向媽媽認錯，並用零用錢買回蛋糕",
            "en": "admitted my mistake to Mum and bought replacement cakes with my pocket money"
          },
          {
            "zh": "誠懇向媽媽道歉，答應以後先問准才吃",
            "en": "apologized sincerely to Mum and promised to ask before eating"
          }
        ],
        "lessons": [
          {
            "zh": "做人要懂得自制，也要為家人着想",
            "en": "we must have self-control and be considerate of our family"
          },
          {
            "zh": "做錯事要誠實承認，不能自私貪吃",
            "en": "we should admit mistakes honestly and never be selfish or greedy"
          }
        ],
        "futureActions": [
          {
            "zh": "有美食先和家人分享，不再獨食",
            "en": "share delicious food with my family first instead of eating alone"
          },
          {
            "zh": "吃東西懂得節制，先問過家人",
            "en": "eat in moderation and always ask my family first"
          }
        ],
        "feelings": [
          {
            "zh": "羞愧萬分",
            "en": "extremely ashamed"
          },
          {
            "zh": "後悔不已",
            "en": "full of regret"
          }
        ],
        "id": "mum",
        "label": "留給媽媽的蛋糕",
        "labelEn": "The cake saved for Mum",
        "forbidden": [
          "弟弟",
          "妹妹"
        ]
      },
      {
        "times": [
          {
            "zh": "星期六下午",
            "en": "Saturday afternoon"
          },
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          }
        ],
        "whos": [
          {
            "zh": "我、妹妹和媽媽",
            "en": "My younger sister, Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的廚房",
            "en": "the kitchen at home"
          },
          {
            "zh": "雪櫃旁邊",
            "en": "beside the refrigerator"
          }
        ],
        "causes": [
          {
            "zh": "雪櫃放着一盒留給妹妹的士多啤梨蛋糕",
            "en": "A box of strawberry cakes was saved for my younger sister in the fridge"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "趁沒人看見，把盒裏的蛋糕全部吃光",
            "actionEn": "ate all the cakes in the box while no one was looking",
            "faces": [
              {
                "zh": "吃得津津有味",
                "en": "eating with great relish"
              },
              {
                "zh": "舔着嘴角，滿心歡喜",
                "en": "licking my lips, full of joy"
              }
            ],
            "thoughts": [
              {
                "zh": "太美味了，吃光才算痛快！",
                "en": "So delicious! Eating it all feels wonderful!"
              },
              {
                "zh": "就說是小貓偷吃的吧！",
                "en": "I'll just say the cat ate it!"
              }
            ],
            "results": [
              {
                "zh": "妹妹回來後發現蛋糕沒了，失望地低下頭",
                "en": "My younger sister came back, found the cakes gone and lowered her head in disappointment",
                "introObj": "雪櫃上的蛋糕紙盒",
                "introObjEn": "the cake paper box on top of the fridge",
                "introEvent": "貪吃偷吃家人的蛋糕",
                "introEventEn": "secretly eating my family's cake out of greed"
              },
              {
                "zh": "妹妹問起蛋糕去了哪裏，我心虛得不敢回答",
                "en": "My younger sister asked where the cakes had gone, and I felt too guilty to answer",
                "introObj": "雪櫃上的蛋糕紙盒",
                "introObjEn": "the cake paper box on top of the fridge",
                "introEvent": "貪吃偷吃家人的蛋糕",
                "introEventEn": "secretly eating my family's cake out of greed"
              }
            ],
            "introObj": "雪櫃上的蛋糕紙盒",
            "introObjEn": "the cake paper box on top of the fridge",
            "introEvent": "貪吃偷吃家人的蛋糕",
            "introEventEn": "secretly eating my family's cake out of greed"
          },
          {
            "id": "B",
            "action": "偷挖走蛋糕上全部士多啤梨，還撒謊不承認",
            "actionEn": "secretly picked off all the strawberries on top and lied to deny it",
            "faces": [
              {
                "zh": "神色慌張，連忙抹嘴",
                "en": "looking flustered and wiping my mouth quickly"
              },
              {
                "zh": "假裝鎮定，搖頭否認",
                "en": "pretending to be calm and shaking my head in denial"
              }
            ],
            "thoughts": [
              {
                "zh": "只吃水果，應該沒人發覺吧！",
                "en": "Only eating the fruit—no one will notice!"
              },
              {
                "zh": "千萬不能承認，否則會被罵！",
                "en": "I must never admit it, or I will be scolded!"
              }
            ],
            "results": [
              {
                "zh": "媽媽看見我嘴角的忌廉，問我為甚麼說謊",
                "en": "Mum saw cream on my mouth and asked why I had lied",
                "introObj": "甜品店的小叉子",
                "introObjEn": "the small dessert fork from the bakery",
                "introEvent": "偷吃蛋糕還說謊瞞騙",
                "introEventEn": "sneaking the cake and lying to cover it up"
              },
              {
                "zh": "媽媽指出蛋糕上的水果全沒了，我羞愧地低下頭",
                "en": "Mum pointed out that all the fruit was missing and I lowered my head in shame",
                "introObj": "甜品店的小叉子",
                "introObjEn": "the small dessert fork from the bakery",
                "introEvent": "偷吃蛋糕還說謊瞞騙",
                "introEventEn": "sneaking the cake and lying to cover it up"
              }
            ],
            "introObj": "甜品店的小叉子",
            "introObjEn": "the small dessert fork from the bakery",
            "introEvent": "偷吃蛋糕還說謊瞞騙",
            "introEventEn": "sneaking the cake and lying to cover it up"
          },
          {
            "id": "C",
            "action": "一連偷吃三件蛋糕，完全停不下來",
            "actionEn": "secretly ate three pieces of cake in a row without stopping",
            "faces": [
              {
                "zh": "眉開眼笑，大口吞下",
                "en": "grinning broadly and gulping them down"
              },
              {
                "zh": "得意忘形，一吃再吃",
                "en": "carried away and eating one after another"
              }
            ],
            "thoughts": [
              {
                "zh": "這麼香甜，再吃兩件也沒關係！",
                "en": "It is so sweet—two more pieces will be fine!"
              },
              {
                "zh": "趁媽媽不在，吃個夠！",
                "en": "I will eat as much as I can while Mum is away!"
              }
            ],
            "results": [
              {
                "zh": "吃得太多，肚子脹痛，只好停下來休息",
                "en": "I ate too much, felt bloated and had to stop and rest",
                "introObj": "雪櫃裏的蛋糕盒",
                "introObjEn": "the cake box in the fridge",
                "introEvent": "貪吃太多蛋糕令肚子不適",
                "introEventEn": "eating too much cake and feeling unwell"
              },
              {
                "zh": "我抱着肚子說不舒服，媽媽擔心地過來照顧我",
                "en": "I held my stomach and said I felt unwell, so Mum came to look after me",
                "introObj": "雪櫃裏的蛋糕盒",
                "introObjEn": "the cake box in the fridge",
                "introEvent": "貪吃太多蛋糕令肚子不適",
                "introEventEn": "eating too much cake and feeling unwell"
              }
            ],
            "introObj": "雪櫃裏的蛋糕盒",
            "introObjEn": "the cake box in the fridge",
            "introEvent": "貪吃太多蛋糕令肚子不適",
            "introEventEn": "eating too much cake and feeling unwell"
          }
        ],
        "reactions": [
          {
            "zh": "臉紅耳赤，羞愧得無地自容",
            "en": "blushed deeply and felt too ashamed to show my face"
          },
          {
            "zh": "低着頭，雙手緊捏衣角不敢作聲",
            "en": "lowered my head and twisted my shirt corner in silence"
          }
        ],
        "regrets": [
          {
            "zh": "我真不該這麼貪吃自私，只顧自己！",
            "en": "I really shouldn't be so greedy and selfish, caring only for myself!"
          },
          {
            "zh": "既貪吃又連累家人擔心，真不應該！",
            "en": "Being greedy and making my family worry is truly wrong!"
          }
        ],
        "endings": [
          {
            "zh": "主動向妹妹認錯，並用零用錢買回蛋糕",
            "en": "admitted my mistake to my younger sister and bought replacement cakes with my pocket money"
          },
          {
            "zh": "誠懇向妹妹道歉，答應以後先問准才吃",
            "en": "apologized sincerely to my younger sister and promised to ask before eating"
          }
        ],
        "lessons": [
          {
            "zh": "做人要懂得自制，也要為家人着想",
            "en": "we must have self-control and be considerate of our family"
          },
          {
            "zh": "做錯事要誠實承認，不能自私貪吃",
            "en": "we should admit mistakes honestly and never be selfish or greedy"
          }
        ],
        "futureActions": [
          {
            "zh": "有美食先和家人分享，不再獨食",
            "en": "share delicious food with my family first instead of eating alone"
          },
          {
            "zh": "吃東西懂得節制，先問過家人",
            "en": "eat in moderation and always ask my family first"
          }
        ],
        "feelings": [
          {
            "zh": "羞愧萬分",
            "en": "extremely ashamed"
          },
          {
            "zh": "後悔不已",
            "en": "full of regret"
          }
        ],
        "id": "sister",
        "label": "留給妹妹的蛋糕",
        "labelEn": "The cake saved for my younger sister",
        "forbidden": [
          "弟弟"
        ]
      }
    ]
  },
  {
    "id": "S4",
    "icon": "🎮",
    "title": "4. 偷玩平板電腦闖禍",
    "titleEn": "4. Secretly Playing with a Tablet",
    "desc": "趁家人不在偷玩平板或手機，結果摔裂螢幕或耽誤正事",
    "descEn": "Secretly played with a tablet and broke it, deleted a report or neglected revision",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期五晚上",
            "en": "Friday night"
          },
          {
            "zh": "週末下午",
            "en": "Weekend afternoon"
          }
        ],
        "whos": [
          {
            "zh": "我和爸爸",
            "en": "Dad and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的書房",
            "en": "the study at home"
          }
        ],
        "causes": [
          {
            "zh": "爸爸把工作平板留在家中，叮囑我先完成溫習",
            "en": "Dad left his work tablet at home and told me to finish revising first"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "偷拿平板玩遊戲，聽見腳步聲慌忙藏起",
            "actionEn": "secretly took the tablet to play games and hid it in panic upon hearing footsteps",
            "faces": [
              {
                "zh": "手忙腳亂，心跳加速",
                "en": "flustered with my heart beating fast"
              },
              {
                "zh": "神色慌張，雙手發抖",
                "en": "looking panicked with trembling hands"
              }
            ],
            "thoughts": [
              {
                "zh": "糟了！爸爸回來了，快藏好！",
                "en": "Oh no! Dad is coming back, hide it quickly!"
              },
              {
                "zh": "千萬別被發現我偷玩遊戲！",
                "en": "I must not get caught playing games secretly!"
              }
            ],
            "results": [
              {
                "zh": "平板滑落地上，螢幕摔出一道大裂痕",
                "en": "the tablet slipped onto the floor and a big crack appeared on the screen",
                "introObj": "那部弄壞後修理過的平板電腦",
                "introObjEn": "the tablet repaired after I broke it",
                "introEvent": "偷玩平板並失手弄壞",
                "introEventEn": "secretly playing with the tablet and accidentally breaking it"
              },
              {
                "zh": "「啪」一聲，平板邊角摔凹，開不了機",
                "en": "with a loud snap, the tablet corner dented and it wouldn't turn on",
                "introObj": "那部弄壞後修理過的平板電腦",
                "introObjEn": "the tablet repaired after I broke it",
                "introEvent": "偷玩平板並失手弄壞",
                "introEventEn": "secretly playing with the tablet and accidentally breaking it"
              }
            ],
            "introObj": "那部弄壞後修理過的平板電腦",
            "introObjEn": "the tablet repaired after I broke it",
            "introEvent": "偷玩平板並失手弄壞",
            "introEventEn": "secretly playing with the tablet and accidentally breaking it"
          },
          {
            "id": "B",
            "action": "偷玩平板時胡亂按鍵，誤刪爸爸的工作報告",
            "actionEn": "pressed buttons randomly while secretly playing with the tablet and deleted Dad’s work report",
            "faces": [
              {
                "zh": "只顧緊盯畫面，得意忘形",
                "en": "staring closely at the screen, completely carried away"
              },
              {
                "zh": "眉飛色舞，隨手亂按",
                "en": "excitedly clicking buttons at random"
              }
            ],
            "thoughts": [
              {
                "zh": "這個視窗真煩人，按刪掉就行！",
                "en": "This pop-up window is so annoying—just click delete!"
              },
              {
                "zh": "快點進入下一關吧！",
                "en": "Hurry up and enter the next game level!"
              }
            ],
            "results": [
              {
                "zh": "爸爸打開平板，發現工作報告不見了，焦急萬分",
                "en": "Dad opened the tablet, found his work report missing and became very anxious",
                "introObj": "爸爸書桌上的電腦支架",
                "introObjEn": "the tablet stand on Dad's desk",
                "introEvent": "偷玩平板誤刪爸爸的文件",
                "introEventEn": "deleting Dad's work file while playing secretly"
              },
              {
                "zh": "爸爸只好重新寫報告，忙到很晚",
                "en": "Dad had to rewrite his report and worked until very late",
                "introObj": "爸爸書桌上的電腦支架",
                "introObjEn": "the tablet stand on Dad's desk",
                "introEvent": "偷玩平板誤刪爸爸的文件",
                "introEventEn": "deleting Dad's work file while playing secretly"
              }
            ],
            "introObj": "爸爸書桌上的電腦支架",
            "introObjEn": "the tablet stand on Dad's desk",
            "introEvent": "偷玩平板誤刪爸爸的文件",
            "introEventEn": "deleting Dad's work file while playing secretly"
          },
          {
            "id": "C",
            "action": "躲在被窩偷玩到深夜，完全沒有溫習",
            "actionEn": "hid under the quilt playing until late at night without studying at all",
            "faces": [
              {
                "zh": "雙眼發亮，停不下來",
                "en": "with shining eyes, unable to stop playing"
              },
              {
                "zh": "精神亢奮，忘記時間",
                "en": "overexcited and completely forgetting the time"
              }
            ],
            "thoughts": [
              {
                "zh": "再玩最後一局就睡，沒事的！",
                "en": "Just one last round before sleeping—it'll be fine!"
              },
              {
                "zh": "明天的測驗很簡單，不用溫習！",
                "en": "Tomorrow's quiz is easy, no need to study!"
              }
            ],
            "results": [
              {
                "zh": "第二天上課不斷打瞌睡，測驗還不及格",
                "en": "I kept dozing off in class the next day and failed the quiz",
                "introObj": "書包裏那張不及格的測驗卷",
                "introObjEn": "that failed quiz paper in my schoolbag",
                "introEvent": "偷玩遊戲至深夜導致測驗失利",
                "introEventEn": "playing games till late night and failing the quiz"
              },
              {
                "zh": "測驗時精神不集中，派卷時才發現成績不及格",
                "en": "I could not concentrate in the quiz and later found I had failed",
                "introObj": "書包裏那張不及格的測驗卷",
                "introObjEn": "that failed quiz paper in my schoolbag",
                "introEvent": "偷玩遊戲至深夜導致測驗失利",
                "introEventEn": "playing games till late night and failing the quiz"
              }
            ],
            "introObj": "書包裏那張不及格的測驗卷",
            "introObjEn": "that failed quiz paper in my schoolbag",
            "introEvent": "偷玩遊戲至深夜導致測驗失利",
            "introEventEn": "playing games till late night and failing the quiz",
            "times": [
              {
                "zh": "星期一晚上",
                "en": "Monday evening"
              },
              {
                "zh": "測驗前一晚",
                "en": "the evening before a quiz"
              }
            ],
            "places": [
              {
                "zh": "自己的睡房",
                "en": "my bedroom"
              }
            ],
            "causes": [
              {
                "zh": "爸爸提醒我翌日有測驗，我卻惦記着平板遊戲",
                "en": "Dad reminded me about the next day’s quiz, but I kept thinking about the tablet game"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "嚇得臉色發白，冷汗直流",
            "en": "turned pale with fear and broke into a cold sweat"
          },
          {
            "zh": "低着頭，雙手發抖不敢說話",
            "en": "lowered my head with trembling hands, daring not to speak"
          }
        ],
        "regrets": [
          {
            "zh": "我真不該貪玩不自制，闖下大禍！",
            "en": "I really shouldn't have lacked self-control and caused such trouble!"
          },
          {
            "zh": "為了一時貪玩連累家人，真後悔！",
            "en": "Causing trouble for my family over a game makes me so regretful!"
          }
        ],
        "endings": [
          {
            "zh": "主動向爸媽坦白認錯，接受處罰",
            "en": "confessed my mistake honestly to my parents and accepted punishment"
          },
          {
            "zh": "誠懇道歉，並訂立時間表不再偷玩",
            "en": "apologized sincerely and made a study schedule to never play secretly again"
          }
        ],
        "lessons": [
          {
            "zh": "做人要自律守信，先完成本分工作",
            "en": "we must be self-disciplined and trustworthy, finishing our duties first"
          },
          {
            "zh": "未經准許不能亂動家人的工作物品",
            "en": "we must never touch family members' work items without permission"
          }
        ],
        "futureActions": [
          {
            "zh": "先做完功課和溫習，經准許才玩",
            "en": "finish homework and revision first, and only play with permission"
          },
          {
            "zh": "嚴格遵守約定時間，學會自制",
            "en": "strictly follow agreed time limits and practice self-control"
          }
        ],
        "feelings": [
          {
            "zh": "慚愧萬分",
            "en": "deeply ashamed"
          },
          {
            "zh": "內疚不已",
            "en": "extremely guilty"
          }
        ],
        "id": "tablet",
        "label": "爸爸的工作平板電腦",
        "labelEn": "Dad’s work tablet",
        "forbidden": []
      }
    ]
  },
  {
    "id": "S5",
    "icon": "🎨",
    "title": "5. 弄髒別人的重要作品",
    "titleEn": "5. Ruining Someone's Artwork or Project",
    "desc": "一時大意或貪玩，把哥哥／姐姐辛苦完成的畫作或專題報告弄髒了",
    "descEn": "Carelessly stained or ruined my older sibling's hard-earned painting or project report",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          },
          {
            "zh": "交作品前一天下午",
            "en": "the afternoon before the work was due"
          }
        ],
        "whos": [
          {
            "zh": "我和姐姐",
            "en": "My older sister and I"
          }
        ],
        "places": [
          {
            "zh": "客廳的長餐桌旁",
            "en": "beside the dining table in the living room"
          },
          {
            "zh": "書房的書桌旁",
            "en": "beside the desk in the study"
          }
        ],
        "causes": [
          {
            "zh": "姐姐花了整天完成參賽水彩畫，把作品放在桌上",
            "en": "My older sister spent the day finishing a contest watercolor painting and left it on the table"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "一邊喝朱古力奶一邊湊近看，失手打翻杯子",
            "actionEn": "leaned in close while drinking chocolate milk and knocked over the cup",
            "faces": [
              {
                "zh": "粗心大意，邊走邊搖晃杯子",
                "en": "carelessly swinging the cup while walking"
              },
              {
                "zh": "好奇地伸長脖子去看",
                "en": "stretching my neck curiously to take a look"
              }
            ],
            "thoughts": [
              {
                "zh": "我拿得很穩，邊喝邊看沒關係！",
                "en": "I am holding the cup steadily—drinking while looking will be fine!"
              },
              {
                "zh": "這份作品真精美，讓我湊近一點看！",
                "en": "This work looks wonderful; let me look closer!"
              }
            ],
            "results": [
              {
                "zh": "朱古力奶潑在參賽水彩畫上，留下洗不掉的深色污漬",
                "en": "Chocolate milk spilled onto the contest watercolor painting, leaving dark stains that would not come off",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒姐姐的參賽水彩畫",
                "introEventEn": "spilling a drink onto my older sister’s contest watercolor painting"
              },
              {
                "zh": "參賽水彩畫被飲品浸濕，紙上的顏色都化開了",
                "en": "The contest watercolor painting was soaked by the drink and the colors on the paper ran",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒姐姐的參賽水彩畫",
                "introEventEn": "spilling a drink onto my older sister’s contest watercolor painting"
              }
            ],
            "introObj": "桌上那個有卡通圖案的杯墊",
            "introObjEn": "that cartoon coaster on the table",
            "introEvent": "打翻飲品弄髒姐姐的參賽水彩畫",
            "introEventEn": "spilling a drink onto my older sister’s contest watercolor painting"
          },
          {
            "id": "B",
            "action": "手癢拿起顏色筆，在旁邊空白處亂加幾筆",
            "actionEn": "couldn't resist picking up a marker and doodling on the blank space",
            "faces": [
              {
                "zh": "自鳴得意，隨手塗鴉",
                "en": "feeling smug and doodling casually"
              },
              {
                "zh": "眉開眼笑，興致勃勃",
                "en": "grinning broadly and full of excitement"
              }
            ],
            "thoughts": [
              {
                "zh": "我幫姐姐加點圖案，一定更漂亮！",
                "en": "Adding a little decoration for my older sister will make it prettier!"
              },
              {
                "zh": "我畫畫這麼好，姐姐一定會感謝我！",
                "en": "I draw so well that my older sister will surely thank me!"
              }
            ],
            "results": [
              {
                "zh": "顏色筆墨水滲開，把參賽水彩畫弄得一團糟",
                "en": "The marker ink bled and made a mess of the contest watercolor painting",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花姐姐的參賽水彩畫",
                "introEventEn": "scribbling on my older sister’s contest watercolor painting"
              },
              {
                "zh": "姐姐看見參賽水彩畫被塗花，難過得紅了眼眶",
                "en": "My older sister saw the scribbles on the contest watercolor painting and became tearful",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花姐姐的參賽水彩畫",
                "introEventEn": "scribbling on my older sister’s contest watercolor painting"
              }
            ],
            "introObj": "筆筒裏那支粗頭水彩筆",
            "introObjEn": "that thick marker in the pen holder",
            "introEvent": "亂畫弄花姐姐的參賽水彩畫",
            "introEventEn": "scribbling on my older sister’s contest watercolor painting"
          },
          {
            "id": "C",
            "action": "在桌旁玩剪刀和膠水，不小心把膠水黏在作品上",
            "actionEn": "played with scissors and glue nearby and accidentally stuck glue onto the work",
            "faces": [
              {
                "zh": "漫不經心，隨手亂放",
                "en": "absent-minded and leaving glue everywhere"
              },
              {
                "zh": "只顧自己做手工，毫不留神",
                "en": "only caring about my own craft and paying no attention"
              }
            ],
            "thoughts": [
              {
                "zh": "桌子這麼大，不會碰到姐姐的作品！",
                "en": "The table is big enough; I will not touch my older sister’s work!"
              },
              {
                "zh": "用完膠水不用蓋好也沒關係吧！",
                "en": "Leaving the glue uncapped should be fine!"
              }
            ],
            "results": [
              {
                "zh": "參賽水彩畫被膠水黏在廢紙上，一拉開就撕破了",
                "en": "The contest watercolor painting stuck to scrap paper with glue and tore when pulled apart",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞姐姐的參賽水彩畫",
                "introEventEn": "carelessly damaging with glue my older sister’s contest watercolor painting"
              },
              {
                "zh": "參賽水彩畫表面沾滿膠水，無法按原樣交出去",
                "en": "The contest watercolor painting was covered in glue and could not be submitted as it was",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞姐姐的參賽水彩畫",
                "introEventEn": "carelessly damaging with glue my older sister’s contest watercolor painting"
              }
            ],
            "introObj": "文具盒裏的那支膠水筆",
            "introObjEn": "that glue stick inside my pencil case",
            "introEvent": "粗心用膠水弄壞姐姐的參賽水彩畫",
            "introEventEn": "carelessly damaging with glue my older sister’s contest watercolor painting"
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆若木雞，臉上一陣發熱",
            "en": "froze in shock and felt my face grow hot"
          },
          {
            "zh": "望着受損的作品，緊張得雙手發抖",
            "en": "looked at the damaged work with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "天啊！姐姐的心血被我毀了！",
            "en": "Oh no! I ruined my older sister’s hard work!"
          },
          {
            "zh": "我真不該這麼粗心，應該尊重姐姐的作品！",
            "en": "I should not have been so careless; I should respect my older sister’s work!"
          }
        ],
        "endings": [
          {
            "zh": "向姐姐道歉，並陪她一起重做參賽水彩畫",
            "en": "apologized to my older sister and helped redo the contest watercolor painting"
          },
          {
            "zh": "主動承認錯誤，準備新材料協助姐姐補救",
            "en": "admitted my mistake and prepared new materials to help my older sister repair the damage"
          }
        ],
        "lessons": [
          {
            "zh": "要尊重別人的心血結晶，做事小心謹慎",
            "en": "we must respect others' hard work and act carefully"
          },
          {
            "zh": "別人的重要物品，未經同意絕不能亂碰",
            "en": "we must never touch others' important items without permission"
          }
        ],
        "futureActions": [
          {
            "zh": "不在別人作品旁吃喝或亂動手",
            "en": "never eat, drink, or play around near others' work"
          },
          {
            "zh": "做事細心留神，愛惜家人的物品",
            "en": "be careful and attentive, cherishing family members' belongings"
          }
        ],
        "feelings": [
          {
            "zh": "內疚萬分",
            "en": "deeply guilty"
          },
          {
            "zh": "慚愧不已",
            "en": "full of shame"
          }
        ],
        "id": "sister-painting",
        "label": "姐姐的參賽水彩畫",
        "labelEn": "My older sister’s contest watercolor painting",
        "forbidden": [
          "哥哥",
          "他",
          "報告"
        ]
      },
      {
        "times": [
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          },
          {
            "zh": "交作品前一天下午",
            "en": "the afternoon before the work was due"
          }
        ],
        "whos": [
          {
            "zh": "我和姐姐",
            "en": "My older sister and I"
          }
        ],
        "places": [
          {
            "zh": "客廳的長餐桌旁",
            "en": "beside the dining table in the living room"
          },
          {
            "zh": "書房的書桌旁",
            "en": "beside the desk in the study"
          }
        ],
        "causes": [
          {
            "zh": "姐姐花了整天完成常識科專題報告，把作品放在桌上",
            "en": "My older sister spent the day finishing a General Studies project report and left it on the table"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "一邊喝朱古力奶一邊湊近看，失手打翻杯子",
            "actionEn": "leaned in close while drinking chocolate milk and knocked over the cup",
            "faces": [
              {
                "zh": "粗心大意，邊走邊搖晃杯子",
                "en": "carelessly swinging the cup while walking"
              },
              {
                "zh": "好奇地伸長脖子去看",
                "en": "stretching my neck curiously to take a look"
              }
            ],
            "thoughts": [
              {
                "zh": "我拿得很穩，邊喝邊看沒關係！",
                "en": "I am holding the cup steadily—drinking while looking will be fine!"
              },
              {
                "zh": "這份作品真精美，讓我湊近一點看！",
                "en": "This work looks wonderful; let me look closer!"
              }
            ],
            "results": [
              {
                "zh": "朱古力奶潑在常識科專題報告上，留下洗不掉的深色污漬",
                "en": "Chocolate milk spilled onto the General Studies project report, leaving dark stains that would not come off",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒姐姐的常識科專題報告",
                "introEventEn": "spilling a drink onto my older sister’s General Studies project report"
              },
              {
                "zh": "常識科專題報告被飲品浸濕，紙上的顏色都化開了",
                "en": "The General Studies project report was soaked by the drink and the colors on the paper ran",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒姐姐的常識科專題報告",
                "introEventEn": "spilling a drink onto my older sister’s General Studies project report"
              }
            ],
            "introObj": "桌上那個有卡通圖案的杯墊",
            "introObjEn": "that cartoon coaster on the table",
            "introEvent": "打翻飲品弄髒姐姐的常識科專題報告",
            "introEventEn": "spilling a drink onto my older sister’s General Studies project report"
          },
          {
            "id": "B",
            "action": "手癢拿起顏色筆，在旁邊空白處亂加幾筆",
            "actionEn": "couldn't resist picking up a marker and doodling on the blank space",
            "faces": [
              {
                "zh": "自鳴得意，隨手塗鴉",
                "en": "feeling smug and doodling casually"
              },
              {
                "zh": "眉開眼笑，興致勃勃",
                "en": "grinning broadly and full of excitement"
              }
            ],
            "thoughts": [
              {
                "zh": "我幫姐姐加點圖案，一定更漂亮！",
                "en": "Adding a little decoration for my older sister will make it prettier!"
              },
              {
                "zh": "我畫畫這麼好，姐姐一定會感謝我！",
                "en": "I draw so well that my older sister will surely thank me!"
              }
            ],
            "results": [
              {
                "zh": "顏色筆墨水滲開，把常識科專題報告弄得一團糟",
                "en": "The marker ink bled and made a mess of the General Studies project report",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花姐姐的常識科專題報告",
                "introEventEn": "scribbling on my older sister’s General Studies project report"
              },
              {
                "zh": "姐姐看見常識科專題報告被塗花，難過得紅了眼眶",
                "en": "My older sister saw the scribbles on the General Studies project report and became tearful",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花姐姐的常識科專題報告",
                "introEventEn": "scribbling on my older sister’s General Studies project report"
              }
            ],
            "introObj": "筆筒裏那支粗頭水彩筆",
            "introObjEn": "that thick marker in the pen holder",
            "introEvent": "亂畫弄花姐姐的常識科專題報告",
            "introEventEn": "scribbling on my older sister’s General Studies project report"
          },
          {
            "id": "C",
            "action": "在桌旁玩剪刀和膠水，不小心把膠水黏在作品上",
            "actionEn": "played with scissors and glue nearby and accidentally stuck glue onto the work",
            "faces": [
              {
                "zh": "漫不經心，隨手亂放",
                "en": "absent-minded and leaving glue everywhere"
              },
              {
                "zh": "只顧自己做手工，毫不留神",
                "en": "only caring about my own craft and paying no attention"
              }
            ],
            "thoughts": [
              {
                "zh": "桌子這麼大，不會碰到姐姐的作品！",
                "en": "The table is big enough; I will not touch my older sister’s work!"
              },
              {
                "zh": "用完膠水不用蓋好也沒關係吧！",
                "en": "Leaving the glue uncapped should be fine!"
              }
            ],
            "results": [
              {
                "zh": "常識科專題報告被膠水黏在廢紙上，一拉開就撕破了",
                "en": "The General Studies project report stuck to scrap paper with glue and tore when pulled apart",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞姐姐的常識科專題報告",
                "introEventEn": "carelessly damaging with glue my older sister’s General Studies project report"
              },
              {
                "zh": "常識科專題報告表面沾滿膠水，無法按原樣交出去",
                "en": "The General Studies project report was covered in glue and could not be submitted as it was",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞姐姐的常識科專題報告",
                "introEventEn": "carelessly damaging with glue my older sister’s General Studies project report"
              }
            ],
            "introObj": "文具盒裏的那支膠水筆",
            "introObjEn": "that glue stick inside my pencil case",
            "introEvent": "粗心用膠水弄壞姐姐的常識科專題報告",
            "introEventEn": "carelessly damaging with glue my older sister’s General Studies project report"
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆若木雞，臉上一陣發熱",
            "en": "froze in shock and felt my face grow hot"
          },
          {
            "zh": "望着受損的作品，緊張得雙手發抖",
            "en": "looked at the damaged work with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "天啊！姐姐的心血被我毀了！",
            "en": "Oh no! I ruined my older sister’s hard work!"
          },
          {
            "zh": "我真不該這麼粗心，應該尊重姐姐的作品！",
            "en": "I should not have been so careless; I should respect my older sister’s work!"
          }
        ],
        "endings": [
          {
            "zh": "向姐姐道歉，並陪她一起重做常識科專題報告",
            "en": "apologized to my older sister and helped redo the General Studies project report"
          },
          {
            "zh": "主動承認錯誤，準備新材料協助姐姐補救",
            "en": "admitted my mistake and prepared new materials to help my older sister repair the damage"
          }
        ],
        "lessons": [
          {
            "zh": "要尊重別人的心血結晶，做事小心謹慎",
            "en": "we must respect others' hard work and act carefully"
          },
          {
            "zh": "別人的重要物品，未經同意絕不能亂碰",
            "en": "we must never touch others' important items without permission"
          }
        ],
        "futureActions": [
          {
            "zh": "不在別人作品旁吃喝或亂動手",
            "en": "never eat, drink, or play around near others' work"
          },
          {
            "zh": "做事細心留神，愛惜家人的物品",
            "en": "be careful and attentive, cherishing family members' belongings"
          }
        ],
        "feelings": [
          {
            "zh": "內疚萬分",
            "en": "deeply guilty"
          },
          {
            "zh": "慚愧不已",
            "en": "full of shame"
          }
        ],
        "id": "sister-report",
        "label": "姐姐的常識科專題報告",
        "labelEn": "My older sister’s General Studies project report",
        "forbidden": [
          "哥哥",
          "他",
          "水彩畫",
          "畫作",
          "畫紙",
          "參賽"
        ]
      },
      {
        "times": [
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          },
          {
            "zh": "交作品前一天下午",
            "en": "the afternoon before the work was due"
          }
        ],
        "whos": [
          {
            "zh": "我和哥哥",
            "en": "My older brother and I"
          }
        ],
        "places": [
          {
            "zh": "客廳的長餐桌旁",
            "en": "beside the dining table in the living room"
          },
          {
            "zh": "書房的書桌旁",
            "en": "beside the desk in the study"
          }
        ],
        "causes": [
          {
            "zh": "哥哥花了整天完成參賽水彩畫，把作品放在桌上",
            "en": "My older brother spent the day finishing a contest watercolor painting and left it on the table"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "一邊喝朱古力奶一邊湊近看，失手打翻杯子",
            "actionEn": "leaned in close while drinking chocolate milk and knocked over the cup",
            "faces": [
              {
                "zh": "粗心大意，邊走邊搖晃杯子",
                "en": "carelessly swinging the cup while walking"
              },
              {
                "zh": "好奇地伸長脖子去看",
                "en": "stretching my neck curiously to take a look"
              }
            ],
            "thoughts": [
              {
                "zh": "我拿得很穩，邊喝邊看沒關係！",
                "en": "I am holding the cup steadily—drinking while looking will be fine!"
              },
              {
                "zh": "這份作品真精美，讓我湊近一點看！",
                "en": "This work looks wonderful; let me look closer!"
              }
            ],
            "results": [
              {
                "zh": "朱古力奶潑在參賽水彩畫上，留下洗不掉的深色污漬",
                "en": "Chocolate milk spilled onto the contest watercolor painting, leaving dark stains that would not come off",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒哥哥的參賽水彩畫",
                "introEventEn": "spilling a drink onto my older brother’s contest watercolor painting"
              },
              {
                "zh": "參賽水彩畫被飲品浸濕，紙上的顏色都化開了",
                "en": "The contest watercolor painting was soaked by the drink and the colors on the paper ran",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒哥哥的參賽水彩畫",
                "introEventEn": "spilling a drink onto my older brother’s contest watercolor painting"
              }
            ],
            "introObj": "桌上那個有卡通圖案的杯墊",
            "introObjEn": "that cartoon coaster on the table",
            "introEvent": "打翻飲品弄髒哥哥的參賽水彩畫",
            "introEventEn": "spilling a drink onto my older brother’s contest watercolor painting"
          },
          {
            "id": "B",
            "action": "手癢拿起顏色筆，在旁邊空白處亂加幾筆",
            "actionEn": "couldn't resist picking up a marker and doodling on the blank space",
            "faces": [
              {
                "zh": "自鳴得意，隨手塗鴉",
                "en": "feeling smug and doodling casually"
              },
              {
                "zh": "眉開眼笑，興致勃勃",
                "en": "grinning broadly and full of excitement"
              }
            ],
            "thoughts": [
              {
                "zh": "我幫哥哥加點圖案，一定更漂亮！",
                "en": "Adding a little decoration for my older brother will make it prettier!"
              },
              {
                "zh": "我畫畫這麼好，哥哥一定會感謝我！",
                "en": "I draw so well that my older brother will surely thank me!"
              }
            ],
            "results": [
              {
                "zh": "顏色筆墨水滲開，把參賽水彩畫弄得一團糟",
                "en": "The marker ink bled and made a mess of the contest watercolor painting",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花哥哥的參賽水彩畫",
                "introEventEn": "scribbling on my older brother’s contest watercolor painting"
              },
              {
                "zh": "哥哥看見參賽水彩畫被塗花，難過得紅了眼眶",
                "en": "My older brother saw the scribbles on the contest watercolor painting and became tearful",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花哥哥的參賽水彩畫",
                "introEventEn": "scribbling on my older brother’s contest watercolor painting"
              }
            ],
            "introObj": "筆筒裏那支粗頭水彩筆",
            "introObjEn": "that thick marker in the pen holder",
            "introEvent": "亂畫弄花哥哥的參賽水彩畫",
            "introEventEn": "scribbling on my older brother’s contest watercolor painting"
          },
          {
            "id": "C",
            "action": "在桌旁玩剪刀和膠水，不小心把膠水黏在作品上",
            "actionEn": "played with scissors and glue nearby and accidentally stuck glue onto the work",
            "faces": [
              {
                "zh": "漫不經心，隨手亂放",
                "en": "absent-minded and leaving glue everywhere"
              },
              {
                "zh": "只顧自己做手工，毫不留神",
                "en": "only caring about my own craft and paying no attention"
              }
            ],
            "thoughts": [
              {
                "zh": "桌子這麼大，不會碰到哥哥的作品！",
                "en": "The table is big enough; I will not touch my older brother’s work!"
              },
              {
                "zh": "用完膠水不用蓋好也沒關係吧！",
                "en": "Leaving the glue uncapped should be fine!"
              }
            ],
            "results": [
              {
                "zh": "參賽水彩畫被膠水黏在廢紙上，一拉開就撕破了",
                "en": "The contest watercolor painting stuck to scrap paper with glue and tore when pulled apart",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞哥哥的參賽水彩畫",
                "introEventEn": "carelessly damaging with glue my older brother’s contest watercolor painting"
              },
              {
                "zh": "參賽水彩畫表面沾滿膠水，無法按原樣交出去",
                "en": "The contest watercolor painting was covered in glue and could not be submitted as it was",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞哥哥的參賽水彩畫",
                "introEventEn": "carelessly damaging with glue my older brother’s contest watercolor painting"
              }
            ],
            "introObj": "文具盒裏的那支膠水筆",
            "introObjEn": "that glue stick inside my pencil case",
            "introEvent": "粗心用膠水弄壞哥哥的參賽水彩畫",
            "introEventEn": "carelessly damaging with glue my older brother’s contest watercolor painting"
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆若木雞，臉上一陣發熱",
            "en": "froze in shock and felt my face grow hot"
          },
          {
            "zh": "望着受損的作品，緊張得雙手發抖",
            "en": "looked at the damaged work with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "天啊！哥哥的心血被我毀了！",
            "en": "Oh no! I ruined my older brother’s hard work!"
          },
          {
            "zh": "我真不該這麼粗心，應該尊重哥哥的作品！",
            "en": "I should not have been so careless; I should respect my older brother’s work!"
          }
        ],
        "endings": [
          {
            "zh": "向哥哥道歉，並陪他一起重做參賽水彩畫",
            "en": "apologized to my older brother and helped redo the contest watercolor painting"
          },
          {
            "zh": "主動承認錯誤，準備新材料協助哥哥補救",
            "en": "admitted my mistake and prepared new materials to help my older brother repair the damage"
          }
        ],
        "lessons": [
          {
            "zh": "要尊重別人的心血結晶，做事小心謹慎",
            "en": "we must respect others' hard work and act carefully"
          },
          {
            "zh": "別人的重要物品，未經同意絕不能亂碰",
            "en": "we must never touch others' important items without permission"
          }
        ],
        "futureActions": [
          {
            "zh": "不在別人作品旁吃喝或亂動手",
            "en": "never eat, drink, or play around near others' work"
          },
          {
            "zh": "做事細心留神，愛惜家人的物品",
            "en": "be careful and attentive, cherishing family members' belongings"
          }
        ],
        "feelings": [
          {
            "zh": "內疚萬分",
            "en": "deeply guilty"
          },
          {
            "zh": "慚愧不已",
            "en": "full of shame"
          }
        ],
        "id": "brother-painting",
        "label": "哥哥的參賽水彩畫",
        "labelEn": "My older brother’s contest watercolor painting",
        "forbidden": [
          "姐姐",
          "她",
          "報告"
        ]
      },
      {
        "times": [
          {
            "zh": "星期天下午",
            "en": "Sunday afternoon"
          },
          {
            "zh": "交作品前一天下午",
            "en": "the afternoon before the work was due"
          }
        ],
        "whos": [
          {
            "zh": "我和哥哥",
            "en": "My older brother and I"
          }
        ],
        "places": [
          {
            "zh": "客廳的長餐桌旁",
            "en": "beside the dining table in the living room"
          },
          {
            "zh": "書房的書桌旁",
            "en": "beside the desk in the study"
          }
        ],
        "causes": [
          {
            "zh": "哥哥花了整天完成常識科專題報告，把作品放在桌上",
            "en": "My older brother spent the day finishing a General Studies project report and left it on the table"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "一邊喝朱古力奶一邊湊近看，失手打翻杯子",
            "actionEn": "leaned in close while drinking chocolate milk and knocked over the cup",
            "faces": [
              {
                "zh": "粗心大意，邊走邊搖晃杯子",
                "en": "carelessly swinging the cup while walking"
              },
              {
                "zh": "好奇地伸長脖子去看",
                "en": "stretching my neck curiously to take a look"
              }
            ],
            "thoughts": [
              {
                "zh": "我拿得很穩，邊喝邊看沒關係！",
                "en": "I am holding the cup steadily—drinking while looking will be fine!"
              },
              {
                "zh": "這份作品真精美，讓我湊近一點看！",
                "en": "This work looks wonderful; let me look closer!"
              }
            ],
            "results": [
              {
                "zh": "朱古力奶潑在常識科專題報告上，留下洗不掉的深色污漬",
                "en": "Chocolate milk spilled onto the General Studies project report, leaving dark stains that would not come off",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒哥哥的常識科專題報告",
                "introEventEn": "spilling a drink onto my older brother’s General Studies project report"
              },
              {
                "zh": "常識科專題報告被飲品浸濕，紙上的顏色都化開了",
                "en": "The General Studies project report was soaked by the drink and the colors on the paper ran",
                "introObj": "桌上那個有卡通圖案的杯墊",
                "introObjEn": "that cartoon coaster on the table",
                "introEvent": "打翻飲品弄髒哥哥的常識科專題報告",
                "introEventEn": "spilling a drink onto my older brother’s General Studies project report"
              }
            ],
            "introObj": "桌上那個有卡通圖案的杯墊",
            "introObjEn": "that cartoon coaster on the table",
            "introEvent": "打翻飲品弄髒哥哥的常識科專題報告",
            "introEventEn": "spilling a drink onto my older brother’s General Studies project report"
          },
          {
            "id": "B",
            "action": "手癢拿起顏色筆，在旁邊空白處亂加幾筆",
            "actionEn": "couldn't resist picking up a marker and doodling on the blank space",
            "faces": [
              {
                "zh": "自鳴得意，隨手塗鴉",
                "en": "feeling smug and doodling casually"
              },
              {
                "zh": "眉開眼笑，興致勃勃",
                "en": "grinning broadly and full of excitement"
              }
            ],
            "thoughts": [
              {
                "zh": "我幫哥哥加點圖案，一定更漂亮！",
                "en": "Adding a little decoration for my older brother will make it prettier!"
              },
              {
                "zh": "我畫畫這麼好，哥哥一定會感謝我！",
                "en": "I draw so well that my older brother will surely thank me!"
              }
            ],
            "results": [
              {
                "zh": "顏色筆墨水滲開，把常識科專題報告弄得一團糟",
                "en": "The marker ink bled and made a mess of the General Studies project report",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花哥哥的常識科專題報告",
                "introEventEn": "scribbling on my older brother’s General Studies project report"
              },
              {
                "zh": "哥哥看見常識科專題報告被塗花，難過得紅了眼眶",
                "en": "My older brother saw the scribbles on the General Studies project report and became tearful",
                "introObj": "筆筒裏那支粗頭水彩筆",
                "introObjEn": "that thick marker in the pen holder",
                "introEvent": "亂畫弄花哥哥的常識科專題報告",
                "introEventEn": "scribbling on my older brother’s General Studies project report"
              }
            ],
            "introObj": "筆筒裏那支粗頭水彩筆",
            "introObjEn": "that thick marker in the pen holder",
            "introEvent": "亂畫弄花哥哥的常識科專題報告",
            "introEventEn": "scribbling on my older brother’s General Studies project report"
          },
          {
            "id": "C",
            "action": "在桌旁玩剪刀和膠水，不小心把膠水黏在作品上",
            "actionEn": "played with scissors and glue nearby and accidentally stuck glue onto the work",
            "faces": [
              {
                "zh": "漫不經心，隨手亂放",
                "en": "absent-minded and leaving glue everywhere"
              },
              {
                "zh": "只顧自己做手工，毫不留神",
                "en": "only caring about my own craft and paying no attention"
              }
            ],
            "thoughts": [
              {
                "zh": "桌子這麼大，不會碰到哥哥的作品！",
                "en": "The table is big enough; I will not touch my older brother’s work!"
              },
              {
                "zh": "用完膠水不用蓋好也沒關係吧！",
                "en": "Leaving the glue uncapped should be fine!"
              }
            ],
            "results": [
              {
                "zh": "常識科專題報告被膠水黏在廢紙上，一拉開就撕破了",
                "en": "The General Studies project report stuck to scrap paper with glue and tore when pulled apart",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞哥哥的常識科專題報告",
                "introEventEn": "carelessly damaging with glue my older brother’s General Studies project report"
              },
              {
                "zh": "常識科專題報告表面沾滿膠水，無法按原樣交出去",
                "en": "The General Studies project report was covered in glue and could not be submitted as it was",
                "introObj": "文具盒裏的那支膠水筆",
                "introObjEn": "that glue stick inside my pencil case",
                "introEvent": "粗心用膠水弄壞哥哥的常識科專題報告",
                "introEventEn": "carelessly damaging with glue my older brother’s General Studies project report"
              }
            ],
            "introObj": "文具盒裏的那支膠水筆",
            "introObjEn": "that glue stick inside my pencil case",
            "introEvent": "粗心用膠水弄壞哥哥的常識科專題報告",
            "introEventEn": "carelessly damaging with glue my older brother’s General Studies project report"
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆若木雞，臉上一陣發熱",
            "en": "froze in shock and felt my face grow hot"
          },
          {
            "zh": "望着受損的作品，緊張得雙手發抖",
            "en": "looked at the damaged work with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "天啊！哥哥的心血被我毀了！",
            "en": "Oh no! I ruined my older brother’s hard work!"
          },
          {
            "zh": "我真不該這麼粗心，應該尊重哥哥的作品！",
            "en": "I should not have been so careless; I should respect my older brother’s work!"
          }
        ],
        "endings": [
          {
            "zh": "向哥哥道歉，並陪他一起重做常識科專題報告",
            "en": "apologized to my older brother and helped redo the General Studies project report"
          },
          {
            "zh": "主動承認錯誤，準備新材料協助哥哥補救",
            "en": "admitted my mistake and prepared new materials to help my older brother repair the damage"
          }
        ],
        "lessons": [
          {
            "zh": "要尊重別人的心血結晶，做事小心謹慎",
            "en": "we must respect others' hard work and act carefully"
          },
          {
            "zh": "別人的重要物品，未經同意絕不能亂碰",
            "en": "we must never touch others' important items without permission"
          }
        ],
        "futureActions": [
          {
            "zh": "不在別人作品旁吃喝或亂動手",
            "en": "never eat, drink, or play around near others' work"
          },
          {
            "zh": "做事細心留神，愛惜家人的物品",
            "en": "be careful and attentive, cherishing family members' belongings"
          }
        ],
        "feelings": [
          {
            "zh": "內疚萬分",
            "en": "deeply guilty"
          },
          {
            "zh": "慚愧不已",
            "en": "full of shame"
          }
        ],
        "id": "brother-report",
        "label": "哥哥的常識科專題報告",
        "labelEn": "My older brother’s General Studies project report",
        "forbidden": [
          "姐姐",
          "她",
          "水彩畫",
          "畫作",
          "畫紙",
          "參賽"
        ]
      }
    ]
  },
  {
    "id": "S6",
    "icon": "🌂",
    "title": "6. 惡作劇藏起同學物品",
    "titleEn": "6. The Classroom Prank Gone Wrong",
    "desc": "放學時貪玩藏起同學的雨傘或書包，卻害同學淋雨或焦急痛哭",
    "descEn": "Hid a classmate's umbrella or bag as a prank after school, causing them to get soaked or cry",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期一放學時",
            "en": "Monday at dismissal time"
          },
          {
            "zh": "星期二放學時",
            "en": "Tuesday at dismissal time"
          }
        ],
        "whos": [
          {
            "zh": "我和男同學志明",
            "en": "Chi Ming and I"
          }
        ],
        "places": [
          {
            "zh": "課室裏",
            "en": "the classroom"
          }
        ],
        "causes": [
          {
            "zh": "窗外下着傾盆大雨，同學去洗手間未回",
            "en": "it was pouring heavily outside while my classmate went to the washroom"
          },
          {
            "zh": "放學鐘聲響起，我看見他的書包放在椅上",
            "en": "the dismissal bell rang and I saw his schoolbag on the chair"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "悄悄把他的雨傘藏進清潔櫃，躲在一旁偷看",
            "actionEn": "secretly hid his umbrella in the cleaning cupboard and watched from nearby",
            "faces": [
              {
                "zh": "嘴角露出壞笑，得意洋洋",
                "en": "with a mischievous grin, feeling smug"
              },
              {
                "zh": "躡手躡腳，偷笑不已",
                "en": "tiptoeing quietly and giggling to myself"
              }
            ],
            "thoughts": [
              {
                "zh": "看他找不到雨傘，一定急得團團轉！",
                "en": "Seeing him unable to find his umbrella will make him spin in panic!"
              },
              {
                "zh": "只是開個小玩笑，真好玩！",
                "en": "It's just a little prank—so much fun!"
              }
            ],
            "results": [
              {
                "zh": "他找不到雨傘，只好冒雨回家，衣服全濕了",
                "en": "he could not find the umbrella and went home in the rain with soaked clothes",
                "introObj": "課室角落的雨傘架",
                "introObjEn": "the umbrella stand in the corner of the classroom",
                "introEvent": "惡作劇藏雨傘害同學淋雨",
                "introEventEn": "hiding my classmate's umbrella as a prank and making him soaked"
              },
              {
                "zh": "他在雨中跑到校門，渾身濕透，冷得發抖",
                "en": "he ran to the school gate in the rain, soaked and shivering",
                "introObj": "課室角落的雨傘架",
                "introObjEn": "the umbrella stand in the corner of the classroom",
                "introEvent": "惡作劇藏雨傘害同學淋雨",
                "introEventEn": "hiding my classmate's umbrella as a prank and making him soaked"
              }
            ],
            "introObj": "課室角落的雨傘架",
            "introObjEn": "the umbrella stand in the corner of the classroom",
            "introEvent": "惡作劇藏雨傘害同學淋雨",
            "introEventEn": "hiding my classmate's umbrella as a prank and making him soaked",
            "causes": [
              {
                "zh": "窗外下着大雨，他把雨傘留在課室後去了洗手間",
                "en": "It was raining heavily; he left the umbrella in the classroom and went to the washroom"
              }
            ]
          },
          {
            "id": "B",
            "action": "把他的手冊和文具盒藏在抽屜深處",
            "actionEn": "hid his student handbook and pencil case deep inside a desk drawer",
            "faces": [
              {
                "zh": "擠眉弄眼，幸災樂禍",
                "en": "winking and gloating over his trouble"
              },
              {
                "zh": "假裝不知道，在旁偷笑",
                "en": "pretending not to know while snickering nearby"
              }
            ],
            "thoughts": [
              {
                "zh": "讓他找半天，急一下他才好玩！",
                "en": "Let him search for ages—it's fun to make him anxious!"
              },
              {
                "zh": "誰叫他平時動作這麼慢！",
                "en": "Who told him to be so slow all the time!"
              }
            ],
            "results": [
              {
                "zh": "他以為弄丟了手冊，急得當場放聲大哭",
                "en": "thinking he lost his handbook, he burst into loud tears on the spot",
                "introObj": "書桌上的藍色文具盒",
                "introObjEn": "the blue pencil case on the desk",
                "introEvent": "藏起同學文具令他急哭",
                "introEventEn": "hiding my classmate's stationery and making him cry in anxiety"
              },
              {
                "zh": "他錯過了校車，急得滿臉淚水、全身發抖",
                "en": "he missed the school bus, crying and trembling all over",
                "introObj": "書桌上的藍色文具盒",
                "introObjEn": "the blue pencil case on the desk",
                "introEvent": "藏起同學文具令他急哭",
                "introEventEn": "hiding my classmate's stationery and making him cry in anxiety"
              }
            ],
            "introObj": "書桌上的藍色文具盒",
            "introObjEn": "the blue pencil case on the desk",
            "introEvent": "藏起同學文具令他急哭",
            "introEventEn": "hiding my classmate's stationery and making him cry in anxiety",
            "causes": [
              {
                "zh": "放學鐘聲響起，他把手冊和文具盒放在桌上",
                "en": "The dismissal bell rang and he left a handbook and pencil case on the desk"
              }
            ]
          },
          {
            "id": "C",
            "action": "故意把廢紙塞進他的書包，還替他拉上拉鏈",
            "actionEn": "purposely stuffed scrap paper into his bag and zipped it up",
            "faces": [
              {
                "zh": "滿心歡喜，自以為幽默",
                "en": "full of joy, thinking I was being humorous"
              },
              {
                "zh": "笑得合不攏嘴",
                "en": "grinning from ear to ear"
              }
            ],
            "thoughts": [
              {
                "zh": "他回家打開書包一定嚇一跳！",
                "en": "He will surely get a big surprise when he opens his bag at home!"
              },
              {
                "zh": "大家一定覺得我很風趣！",
                "en": "Everyone will think I am so funny!"
              }
            ],
            "results": [
              {
                "zh": "紙團弄皺了他要送給媽媽的生日卡，他傷心極了",
                "en": "the paper balls crumpled the birthday card he made for his mum, breaking his heart",
                "introObj": "書包上的那個鎖匙扣",
                "introObjEn": "that keychain hanging on my schoolbag",
                "introEvent": "捉弄同學卻弄壞他的心意卡",
                "introEventEn": "pranking a classmate and ruining his handmade card"
              },
              {
                "zh": "他打開書包時發現生日卡被廢紙壓皺，難過得哭了",
                "en": "he opened the bag, found the birthday card crumpled under the paper and cried",
                "introObj": "書包上的那個鎖匙扣",
                "introObjEn": "that keychain hanging on my schoolbag",
                "introEvent": "捉弄同學卻弄壞他的心意卡",
                "introEventEn": "pranking a classmate and ruining his handmade card"
              }
            ],
            "introObj": "書包上的那個鎖匙扣",
            "introObjEn": "that keychain hanging on my schoolbag",
            "introEvent": "捉弄同學卻弄壞他的心意卡",
            "introEventEn": "pranking a classmate and ruining his handmade card",
            "causes": [
              {
                "zh": "放學時，他把書包放在椅上，裏面有送給媽媽的生日卡",
                "en": "At dismissal time, he left a schoolbag on the chair with a birthday card for Mum inside"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "臉上一陣發熱，羞愧得低下頭",
            "en": "felt my face burn hot and lowered my head in shame"
          },
          {
            "zh": "心裏像壓了大石，難受極了",
            "en": "felt as if a heavy stone pressed on my heart, feeling terrible"
          }
        ],
        "regrets": [
          {
            "zh": "我真不該拿別人的難受當作玩笑！",
            "en": "I should not have treated someone else’s distress as a joke!"
          },
          {
            "zh": "同學待我這麼好，我竟然這樣捉弄他！",
            "en": "My classmate treats me kindly, yet I played such a prank on him!"
          }
        ],
        "endings": [
          {
            "zh": "主動向他鞠躬道歉，真誠地說對不起",
            "en": "bowed to apologize to him willingly and said sorry sincerely"
          },
          {
            "zh": "寫了一張道歉卡送給他，請求原諒",
            "en": "wrote an apology card for him to ask for his forgiveness"
          }
        ],
        "lessons": [
          {
            "zh": "開玩笑要有分寸，要懂得體諒別人",
            "en": "jokes must have limits, and we should be considerate of others"
          },
          {
            "zh": "真正的朋友應該互相幫助，而非捉弄",
            "en": "true friends should help each other instead of playing pranks"
          }
        ],
        "futureActions": [
          {
            "zh": "不再隨便捉弄同學，尊重身邊朋友",
            "en": "never prank classmates casually again and respect my friends"
          },
          {
            "zh": "做事前先設身處地感受別人的心情",
            "en": "put myself in others' shoes before doing anything"
          }
        ],
        "feelings": [
          {
            "zh": "羞愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "後悔萬分",
            "en": "extremely regretful"
          }
        ],
        "id": "boy",
        "label": "男同學志明",
        "labelEn": "My classmate Chi Ming (boy)",
        "forbidden": [
          "她",
          "小文"
        ]
      },
      {
        "times": [
          {
            "zh": "星期一放學時",
            "en": "Monday at dismissal time"
          },
          {
            "zh": "星期二放學時",
            "en": "Tuesday at dismissal time"
          }
        ],
        "whos": [
          {
            "zh": "我和女同學小文",
            "en": "Siu Man and I"
          }
        ],
        "places": [
          {
            "zh": "課室裏",
            "en": "the classroom"
          }
        ],
        "causes": [
          {
            "zh": "窗外下着傾盆大雨，同學去洗手間未回",
            "en": "it was pouring heavily outside while my classmate went to tshe washroom"
          },
          {
            "zh": "放學鐘聲響起，我看見她的書包放在椅上",
            "en": "tshe dismissal bell rang and I saw her schoolbag on tshe chair"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "悄悄把她的雨傘藏進清潔櫃，躲在一旁偷看",
            "actionEn": "secretly hid her umbrella in the cleaning cupboard and watched from nearby",
            "faces": [
              {
                "zh": "嘴角露出壞笑，得意洋洋",
                "en": "with a mischievous grin, feeling smug"
              },
              {
                "zh": "躡手躡腳，偷笑不已",
                "en": "tiptoeing quietly and giggling to myself"
              }
            ],
            "thoughts": [
              {
                "zh": "看她找不到雨傘，一定急得團團轉！",
                "en": "Seeing her unable to find her umbrella will make her spin in panic!"
              },
              {
                "zh": "只是開個小玩笑，真好玩！",
                "en": "It's just a little prank—so much fun!"
              }
            ],
            "results": [
              {
                "zh": "她找不到雨傘，只好冒雨回家，衣服全濕了",
                "en": "she could not find the umbrella and went home in the rain with soaked clothes",
                "introObj": "課室角落的雨傘架",
                "introObjEn": "tshe umbrella stand in tshe corner of tshe classroom",
                "introEvent": "惡作劇藏雨傘害同學淋雨",
                "introEventEn": "hiding my classmate's umbrella as a prank and making her soaked"
              },
              {
                "zh": "她在雨中跑到校門，渾身濕透，冷得發抖",
                "en": "she ran to the school gate in the rain, soaked and shivering",
                "introObj": "課室角落的雨傘架",
                "introObjEn": "tshe umbrella stand in tshe corner of tshe classroom",
                "introEvent": "惡作劇藏雨傘害同學淋雨",
                "introEventEn": "hiding my classmate's umbrella as a prank and making her soaked"
              }
            ],
            "introObj": "課室角落的雨傘架",
            "introObjEn": "tshe umbrella stand in tshe corner of tshe classroom",
            "introEvent": "惡作劇藏雨傘害同學淋雨",
            "introEventEn": "hiding my classmate's umbrella as a prank and making her soaked",
            "causes": [
              {
                "zh": "窗外下着大雨，她把雨傘留在課室後去了洗手間",
                "en": "It was raining heavily; she left the umbrella in the classroom and went to the washroom"
              }
            ]
          },
          {
            "id": "B",
            "action": "把她的手冊和文具盒藏在抽屜深處",
            "actionEn": "hid her student handbook and pencil case deep inside a desk drawer",
            "faces": [
              {
                "zh": "擠眉弄眼，幸災樂禍",
                "en": "winking and gloating over her trouble"
              },
              {
                "zh": "假裝不知道，在旁偷笑",
                "en": "pretending not to know while snickering nearby"
              }
            ],
            "thoughts": [
              {
                "zh": "讓她找半天，急一下她才好玩！",
                "en": "Let her search for ages—it's fun to make her anxious!"
              },
              {
                "zh": "誰叫她平時動作這麼慢！",
                "en": "Who told her to be so slow all tshe time!"
              }
            ],
            "results": [
              {
                "zh": "她以為弄丟了手冊，急得當場放聲大哭",
                "en": "thinking she lost her handbook, she burst into loud tears on tshe spot",
                "introObj": "書桌上的藍色文具盒",
                "introObjEn": "tshe blue pencil case on tshe desk",
                "introEvent": "藏起同學文具令她急哭",
                "introEventEn": "hiding my classmate's stationery and making her cry in anxiety"
              },
              {
                "zh": "她錯過了校車，急得滿臉淚水、全身發抖",
                "en": "she missed tshe school bus, crying and trembling all over",
                "introObj": "書桌上的藍色文具盒",
                "introObjEn": "tshe blue pencil case on tshe desk",
                "introEvent": "藏起同學文具令她急哭",
                "introEventEn": "hiding my classmate's stationery and making her cry in anxiety"
              }
            ],
            "introObj": "書桌上的藍色文具盒",
            "introObjEn": "tshe blue pencil case on tshe desk",
            "introEvent": "藏起同學文具令她急哭",
            "introEventEn": "hiding my classmate's stationery and making her cry in anxiety",
            "causes": [
              {
                "zh": "放學鐘聲響起，她把手冊和文具盒放在桌上",
                "en": "The dismissal bell rang and she left a handbook and pencil case on the desk"
              }
            ]
          },
          {
            "id": "C",
            "action": "故意把廢紙塞進她的書包，還替她拉上拉鏈",
            "actionEn": "purposely stuffed scrap paper into her bag and zipped it up",
            "faces": [
              {
                "zh": "滿心歡喜，自以為幽默",
                "en": "full of joy, thinking I was being humorous"
              },
              {
                "zh": "笑得合不攏嘴",
                "en": "grinning from ear to ear"
              }
            ],
            "thoughts": [
              {
                "zh": "她回家打開書包一定嚇一跳！",
                "en": "She will surely get a big surprise when she opens her bag at home!"
              },
              {
                "zh": "大家一定覺得我很風趣！",
                "en": "Everyone will think I am so funny!"
              }
            ],
            "results": [
              {
                "zh": "紙團弄皺了她要送給媽媽的生日卡，她傷心極了",
                "en": "tshe paper balls crumpled tshe birthday card she made for her mum, breaking her heart",
                "introObj": "書包上的那個鎖匙扣",
                "introObjEn": "that keychain hanging on my schoolbag",
                "introEvent": "捉弄同學卻弄壞她的心意卡",
                "introEventEn": "pranking a classmate and ruining her handmade card"
              },
              {
                "zh": "她打開書包時發現生日卡被廢紙壓皺，難過得哭了",
                "en": "she opened the bag, found the birthday card crumpled under the paper and cried",
                "introObj": "書包上的那個鎖匙扣",
                "introObjEn": "that keychain hanging on my schoolbag",
                "introEvent": "捉弄同學卻弄壞她的心意卡",
                "introEventEn": "pranking a classmate and ruining her handmade card"
              }
            ],
            "introObj": "書包上的那個鎖匙扣",
            "introObjEn": "that keychain hanging on my schoolbag",
            "introEvent": "捉弄同學卻弄壞她的心意卡",
            "introEventEn": "pranking a classmate and ruining her handmade card",
            "causes": [
              {
                "zh": "放學時，她把書包放在椅上，裏面有送給媽媽的生日卡",
                "en": "At dismissal time, she left a schoolbag on the chair with a birthday card for Mum inside"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "臉上一陣發熱，羞愧得低下頭",
            "en": "felt my face burn hot and lowered my head in shame"
          },
          {
            "zh": "心裏像壓了大石，難受極了",
            "en": "felt as if a heavy stone pressed on my heart, feeling terrible"
          }
        ],
        "regrets": [
          {
            "zh": "我真不該拿別人的難受當作玩笑！",
            "en": "I should not have treated someone else’s distress as a joke!"
          },
          {
            "zh": "同學待我這麼好，我竟然這樣捉弄她！",
            "en": "My classmate treats me kindly, yet I played such a prank on her!"
          }
        ],
        "endings": [
          {
            "zh": "主動向她鞠躬道歉，真誠地說對不起",
            "en": "bowed to apologize to her willingly and said sorry sincerely"
          },
          {
            "zh": "寫了一張道歉卡送給她，請求原諒",
            "en": "wrote an apology card for her to ask for her forgiveness"
          }
        ],
        "lessons": [
          {
            "zh": "開玩笑要有分寸，要懂得體諒別人",
            "en": "jokes must have limits, and we should be considerate of others"
          },
          {
            "zh": "真正的朋友應該互相幫助，而非捉弄",
            "en": "true friends should help each other instead of playing pranks"
          }
        ],
        "futureActions": [
          {
            "zh": "不再隨便捉弄同學，尊重身邊朋友",
            "en": "never prank classmates casually again and respect my friends"
          },
          {
            "zh": "做事前先設身處地感受別人的心情",
            "en": "put myself in others' shoes before doing anything"
          }
        ],
        "feelings": [
          {
            "zh": "羞愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "後悔萬分",
            "en": "extremely regretful"
          }
        ],
        "id": "girl",
        "label": "女同學小文",
        "labelEn": "My classmate Siu Man (girl)",
        "forbidden": [
          "他",
          "志明"
        ]
      }
    ]
  },
  {
    "id": "S7",
    "icon": "📝",
    "title": "7. 默書／測驗偷看作弊",
    "titleEn": "7. Cheating on a Dictation or Quiz",
    "desc": "因貪玩沒溫習，在默書或小測時偷看，事後良心不安",
    "descEn": "Didn't study due to playing, peeked during a dictation or quiz, and felt guilty",
    "contexts": [
      {
        "times": [
          {
            "zh": "上星期二早上",
            "en": "last Tuesday morning"
          },
          {
            "zh": "上星期三早上",
            "en": "last Wednesday morning"
          }
        ],
        "whos": [
          {
            "zh": "我、老師和鄰座同學",
            "en": "My teacher, my neighboring classmate and I"
          }
        ],
        "places": [
          {
            "zh": "安靜的課室裏",
            "en": "in the quiet classroom"
          },
          {
            "zh": "自己的座位上",
            "en": "at my own desk"
          }
        ],
        "causes": [
          {
            "zh": "前一晚只顧看電視，沒有溫習中文默書",
            "en": "I only watched TV the night before and did not revise for the Chinese dictation"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "趁老師轉身，偷偷瞄了鄰座同學的默書簿",
            "actionEn": "secretly peeked at my neighbor's dictation book when the teacher turned around",
            "faces": [
              {
                "zh": "心跳如鼓，手心冒汗",
                "en": "heart pounding like a drum and palms sweating"
              },
              {
                "zh": "眼神閃縮，緊張得發抖",
                "en": "eyes darting around, trembling with nervousness"
              }
            ],
            "thoughts": [
              {
                "zh": "只偷看兩個詞，不會被發現的！",
                "en": "Just peeking at two words—nobody will find out!"
              },
              {
                "zh": "如果不及格，回家一定被媽媽罵！",
                "en": "If I fail, Mum will definitely scold me at home!"
              }
            ],
            "results": [
              {
                "zh": "派簿時拿了高分並獲老師稱讚，我卻心虛極了",
                "en": "I got high marks and praise from the teacher, but felt terribly guilty",
                "introObj": "書桌上那本默書簿",
                "introObjEn": "the dictation book on my desk",
                "introEvent": "沒溫習而偷看鄰座的默書",
                "introEventEn": "peeking at my neighbor’s dictation without revising"
              },
              {
                "zh": "鄰座同學懷疑地看着我，我羞愧得不敢對望",
                "en": "my neighbor looked at me suspiciously, and I was too ashamed to look back",
                "introObj": "書桌上那本默書簿",
                "introObjEn": "the dictation book on my desk",
                "introEvent": "沒溫習而偷看鄰座的默書",
                "introEventEn": "peeking at my neighbor’s dictation without revising"
              }
            ],
            "introObj": "書桌上那本默書簿",
            "introObjEn": "the dictation book on my desk",
            "introEvent": "沒溫習而偷看鄰座的默書",
            "introEventEn": "peeking at my neighbor’s dictation without revising"
          },
          {
            "id": "B",
            "action": "把寫了難字的紙條藏在筆盒下偷看",
            "actionEn": "hid a small cheat note with hard words under my pencil case to peek",
            "faces": [
              {
                "zh": "滿頭大汗，呼吸急促",
                "en": "sweating heavily and breathing rapidly"
              },
              {
                "zh": "左顧右盼，驚慌失措",
                "en": "looking left and right in panic"
              }
            ],
            "thoughts": [
              {
                "zh": "快點抄完收起來，神不知鬼不覺！",
                "en": "Copy it quickly and hide it—no one will ever know!"
              },
              {
                "zh": "這次先過關，下次才溫習吧！",
                "en": "Just pass this time first, and I'll study next time!"
              }
            ],
            "results": [
              {
                "zh": "老師走到我身旁，紙條掉在地上被當場發現",
                "en": "the teacher walked by my desk and the note fell on the floor, caught on the spot",
                "introObj": "文具盒底下那格夾層",
                "introObjEn": "that hidden compartment under my pencil case",
                "introEvent": "默書夾帶紙條作弊",
                "introEventEn": "hiding a cheat note during dictation"
              },
              {
                "zh": "老師發現了紙條，失望地看着我，令我無地自容",
                "en": "The teacher found the cheat note and looked at me with disappointment, leaving me ashamed",
                "introObj": "文具盒底下那格夾層",
                "introObjEn": "that hidden compartment under my pencil case",
                "introEvent": "默書夾帶紙條作弊",
                "introEventEn": "hiding a cheat note during dictation"
              }
            ],
            "introObj": "文具盒底下那格夾層",
            "introObjEn": "that hidden compartment under my pencil case",
            "introEvent": "默書夾帶紙條作弊",
            "introEventEn": "hiding a cheat note during dictation"
          },
          {
            "id": "C",
            "action": "改簿時偷偷擦掉錯字，改成正確答案騙分數",
            "actionEn": "secretly erased wrong words during checking and changed them to fake high marks",
            "faces": [
              {
                "zh": "鬼鬼祟祟，假裝鎮定",
                "en": "acting sneaky while pretending to be calm"
              },
              {
                "zh": "手忙腳亂，偷偷摸摸",
                "en": "flustered and secretive"
              }
            ],
            "thoughts": [
              {
                "zh": "改對兩個字，就能拿滿分貼紙了！",
                "en": "Fixing two words will get me the full-mark reward sticker!"
              },
              {
                "zh": "沒有人會留意我擦過字跡的！",
                "en": "Nobody will notice that I erased and rewrote it!"
              }
            ],
            "results": [
              {
                "zh": "看着騙回來的獎勵貼紙，我整天都坐立不安",
                "en": "looking at the cheated reward sticker, I felt restless all day long",
                "introObj": "手冊上那張閃亮的獎勵貼紙",
                "introObjEn": "that shiny reward sticker in my handbook",
                "introEvent": "偷偷改答案騙取分數",
                "introEventEn": "secretly changing answers to cheat for marks"
              },
              {
                "zh": "拿着騙回來的獎勵貼紙，我羞愧得不敢抬頭",
                "en": "Holding the reward sticker I had cheated to get, I was too ashamed to look up",
                "introObj": "手冊上那張閃亮的獎勵貼紙",
                "introObjEn": "that shiny reward sticker in my handbook",
                "introEvent": "偷偷改答案騙取分數",
                "introEventEn": "secretly changing answers to cheat for marks"
              }
            ],
            "introObj": "手冊上那張閃亮的獎勵貼紙",
            "introObjEn": "that shiny reward sticker in my handbook",
            "introEvent": "偷偷改答案騙取分數",
            "introEventEn": "secretly changing answers to cheat for marks"
          }
        ],
        "reactions": [
          {
            "zh": "臉紅耳赤，頭垂得低低的",
            "en": "blushed deeply and hung my head very low"
          },
          {
            "zh": "心裏像有一塊大石，羞愧萬分",
            "en": "felt a heavy stone in my heart, extremely ashamed"
          }
        ],
        "regrets": [
          {
            "zh": "不誠實得來的分數，一點也不光彩！",
            "en": "Marks gained through dishonesty are not glorious at all!"
          },
          {
            "zh": "我既欺騙了老師，也欺騙了自己！",
            "en": "I deceived both my teacher and myself!"
          }
        ],
        "endings": [
          {
            "zh": "到教員室主動向老師坦白認錯，申請重默",
            "en": "went to the staffroom to confess to my teacher and asked for a re-dictation"
          },
          {
            "zh": "向媽媽和老師道出真相，誠懇道歉",
            "en": "told Mum and my teacher the truth and apologized sincerely"
          }
        ],
        "lessons": [
          {
            "zh": "做人最緊要誠實，一分耕耘一分收穫",
            "en": "honesty is the most important; no pain, no gain"
          },
          {
            "zh": "作弊只會自欺欺人，努力溫習才踏實",
            "en": "cheating only fools oneself, while hard study brings true peace of mind"
          }
        ],
        "futureActions": [
          {
            "zh": "提早認真溫習，堂堂正正靠自己考好",
            "en": "revise early and earn good grades honestly on my own"
          },
          {
            "zh": "做個誠實守規的學生，絕不再作弊",
            "en": "be an honest, rule-abiding student and never cheat again"
          }
        ],
        "feelings": [
          {
            "zh": "羞愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "懊悔萬分",
            "en": "full of remorse"
          }
        ],
        "id": "dictation",
        "label": "中文默書",
        "labelEn": "Chinese dictation",
        "forbidden": [
          "測驗"
        ]
      },
      {
        "times": [
          {
            "zh": "上星期二早上",
            "en": "last Tuesday morning"
          },
          {
            "zh": "上星期三早上",
            "en": "last Wednesday morning"
          }
        ],
        "whos": [
          {
            "zh": "我、老師和鄰座同學",
            "en": "My teacher, my neighboring classmate and I"
          }
        ],
        "places": [
          {
            "zh": "安靜的課室裏",
            "en": "in the quiet classroom"
          },
          {
            "zh": "自己的座位上",
            "en": "at my own desk"
          }
        ],
        "causes": [
          {
            "zh": "前一晚只顧看電視，沒有溫習中文測驗",
            "en": "I only watched TV the night before and did not revise for the Chinese quiz"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "趁老師轉身，偷偷瞄了鄰座同學的測驗簿",
            "actionEn": "secretly peeked at my neighbor's quiz book when the teacher turned around",
            "faces": [
              {
                "zh": "心跳如鼓，手心冒汗",
                "en": "heart pounding like a drum and palms sweating"
              },
              {
                "zh": "眼神閃縮，緊張得發抖",
                "en": "eyes darting around, trembling with nervousness"
              }
            ],
            "thoughts": [
              {
                "zh": "只偷看兩個詞，不會被發現的！",
                "en": "Just peeking at two words—nobody will find out!"
              },
              {
                "zh": "如果不及格，回家一定被媽媽罵！",
                "en": "If I fail, Mum will definitely scold me at home!"
              }
            ],
            "results": [
              {
                "zh": "派簿時拿了高分並獲老師稱讚，我卻心虛極了",
                "en": "I got high marks and praise from the teacher, but felt terribly guilty",
                "introObj": "書桌上那張測驗卷",
                "introObjEn": "the quiz paper on my desk",
                "introEvent": "沒溫習而偷看鄰座的測驗",
                "introEventEn": "peeking at my neighbor’s quiz without revising"
              },
              {
                "zh": "鄰座同學懷疑地看着我，我羞愧得不敢對望",
                "en": "my neighbor looked at me suspiciously, and I was too ashamed to look back",
                "introObj": "書桌上那張測驗卷",
                "introObjEn": "the quiz paper on my desk",
                "introEvent": "沒溫習而偷看鄰座的測驗",
                "introEventEn": "peeking at my neighbor’s quiz without revising"
              }
            ],
            "introObj": "書桌上那張測驗卷",
            "introObjEn": "the quiz paper on my desk",
            "introEvent": "沒溫習而偷看鄰座的測驗",
            "introEventEn": "peeking at my neighbor’s quiz without revising"
          },
          {
            "id": "B",
            "action": "把寫了難字的紙條藏在筆盒下偷看",
            "actionEn": "hid a small cheat note with hard words under my pencil case to peek",
            "faces": [
              {
                "zh": "滿頭大汗，呼吸急促",
                "en": "sweating heavily and breathing rapidly"
              },
              {
                "zh": "左顧右盼，驚慌失措",
                "en": "looking left and right in panic"
              }
            ],
            "thoughts": [
              {
                "zh": "快點抄完收起來，神不知鬼不覺！",
                "en": "Copy it quickly and hide it—no one will ever know!"
              },
              {
                "zh": "這次先過關，下次才溫習吧！",
                "en": "Just pass this time first, and I'll study next time!"
              }
            ],
            "results": [
              {
                "zh": "老師走到我身旁，紙條掉在地上被當場發現",
                "en": "the teacher walked by my desk and the note fell on the floor, caught on the spot",
                "introObj": "文具盒底下那格夾層",
                "introObjEn": "that hidden compartment under my pencil case",
                "introEvent": "測驗夾帶紙條作弊",
                "introEventEn": "hiding a cheat note during quiz"
              },
              {
                "zh": "老師發現了紙條，失望地看着我，令我無地自容",
                "en": "The teacher found the cheat note and looked at me with disappointment, leaving me ashamed",
                "introObj": "文具盒底下那格夾層",
                "introObjEn": "that hidden compartment under my pencil case",
                "introEvent": "測驗夾帶紙條作弊",
                "introEventEn": "hiding a cheat note during quiz"
              }
            ],
            "introObj": "文具盒底下那格夾層",
            "introObjEn": "that hidden compartment under my pencil case",
            "introEvent": "測驗夾帶紙條作弊",
            "introEventEn": "hiding a cheat note during quiz"
          },
          {
            "id": "C",
            "action": "改簿時偷偷擦掉錯字，改成正確答案騙分數",
            "actionEn": "secretly erased wrong words during checking and changed them to fake high marks",
            "faces": [
              {
                "zh": "鬼鬼祟祟，假裝鎮定",
                "en": "acting sneaky while pretending to be calm"
              },
              {
                "zh": "手忙腳亂，偷偷摸摸",
                "en": "flustered and secretive"
              }
            ],
            "thoughts": [
              {
                "zh": "改對兩個字，就能拿滿分貼紙了！",
                "en": "Fixing two words will get me the full-mark reward sticker!"
              },
              {
                "zh": "沒有人會留意我擦過字跡的！",
                "en": "Nobody will notice that I erased and rewrote it!"
              }
            ],
            "results": [
              {
                "zh": "看着騙回來的獎勵貼紙，我整天都坐立不安",
                "en": "looking at the cheated reward sticker, I felt restless all day long",
                "introObj": "手冊上那張閃亮的獎勵貼紙",
                "introObjEn": "that shiny reward sticker in my handbook",
                "introEvent": "偷偷改答案騙取分數",
                "introEventEn": "secretly changing answers to cheat for marks"
              },
              {
                "zh": "拿着騙回來的獎勵貼紙，我羞愧得不敢抬頭",
                "en": "Holding the reward sticker I had cheated to get, I was too ashamed to look up",
                "introObj": "手冊上那張閃亮的獎勵貼紙",
                "introObjEn": "that shiny reward sticker in my handbook",
                "introEvent": "偷偷改答案騙取分數",
                "introEventEn": "secretly changing answers to cheat for marks"
              }
            ],
            "introObj": "手冊上那張閃亮的獎勵貼紙",
            "introObjEn": "that shiny reward sticker in my handbook",
            "introEvent": "偷偷改答案騙取分數",
            "introEventEn": "secretly changing answers to cheat for marks"
          }
        ],
        "reactions": [
          {
            "zh": "臉紅耳赤，頭垂得低低的",
            "en": "blushed deeply and hung my head very low"
          },
          {
            "zh": "心裏像有一塊大石，羞愧萬分",
            "en": "felt a heavy stone in my heart, extremely ashamed"
          }
        ],
        "regrets": [
          {
            "zh": "不誠實得來的分數，一點也不光彩！",
            "en": "Marks gained through dishonesty are not glorious at all!"
          },
          {
            "zh": "我既欺騙了老師，也欺騙了自己！",
            "en": "I deceived both my teacher and myself!"
          }
        ],
        "endings": [
          {
            "zh": "到教員室主動向老師坦白認錯，申請重新測驗",
            "en": "went to the staffroom to confess to my teacher and asked for a re-quiz"
          },
          {
            "zh": "向媽媽和老師道出真相，誠懇道歉",
            "en": "told Mum and my teacher the truth and apologized sincerely"
          }
        ],
        "lessons": [
          {
            "zh": "做人最緊要誠實，一分耕耘一分收穫",
            "en": "honesty is the most important; no pain, no gain"
          },
          {
            "zh": "作弊只會自欺欺人，努力溫習才踏實",
            "en": "cheating only fools oneself, while hard study brings true peace of mind"
          }
        ],
        "futureActions": [
          {
            "zh": "提早認真溫習，堂堂正正靠自己考好",
            "en": "revise early and earn good grades honestly on my own"
          },
          {
            "zh": "做個誠實守規的學生，絕不再作弊",
            "en": "be an honest, rule-abiding student and never cheat again"
          }
        ],
        "feelings": [
          {
            "zh": "羞愧不已",
            "en": "deeply ashamed"
          },
          {
            "zh": "懊悔萬分",
            "en": "full of remorse"
          }
        ],
        "id": "quiz",
        "label": "中文測驗",
        "labelEn": "Chinese quiz",
        "forbidden": [
          "默書",
          "重默"
        ]
      }
    ]
  },
  {
    "id": "S8",
    "icon": "🏺",
    "title": "8. 在客廳踢球打碎物品",
    "titleEn": "8. Playing Ball Indoors & Breaking a Vase",
    "desc": "不聽家人勸告在屋內踢球或亂扔東西，結果打碎心愛的花瓶或相架",
    "descEn": "Ignored advice and played ball indoors, shattering Mum's favorite vase or photo frame",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期六下午",
            "en": "Saturday afternoon"
          },
          {
            "zh": "雨天留在家中的下午",
            "en": "a rainy afternoon staying at home"
          }
        ],
        "whos": [
          {
            "zh": "我和媽媽",
            "en": "Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的客廳",
            "en": "the living room at home"
          }
        ],
        "causes": [
          {
            "zh": "媽媽叮囑不要在客廳玩球，我卻沒理會",
            "en": "Mum told me not to play ball in the living room, but I ignored her"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "起腳大力抽射，足球直飛向電視櫃",
            "actionEn": "kicked a powerful shot and the ball flew straight toward the TV cabinet",
            "faces": [
              {
                "zh": "興高采烈，忘乎所以",
                "en": "overjoyed and completely carried away"
              },
              {
                "zh": "眉飛色舞，越踢越起勁",
                "en": "beaming with excitement, kicking harder and harder"
              }
            ],
            "thoughts": [
              {
                "zh": "看我這記世界波，射術真準！",
                "en": "Watch my super goal—my shooting is so accurate!"
              },
              {
                "zh": "只踢一下，不會碰到東西！",
                "en": "One little kick will not hit anything!"
              }
            ],
            "results": [
              {
                "zh": "「砰」一聲，媽媽心愛的陶瓷花瓶摔得粉碎",
                "en": "With a crash, Mum’s favorite ceramic vase shattered",
                "introObj": "櫃上那個新花瓶",
                "introObjEn": "the new vase on the cabinet",
                "introEvent": "在客廳踢球打碎花瓶",
                "introEventEn": "playing ball in the living room and breaking the vase"
              },
              {
                "zh": "足球撞倒陶瓷花瓶，花瓶掉在地上碎了",
                "en": "The ball knocked over the ceramic vase, which fell to the floor and broke",
                "introObj": "櫃上那個新花瓶",
                "introObjEn": "the new vase on the cabinet",
                "introEvent": "在客廳踢球打碎花瓶",
                "introEventEn": "playing ball in the living room and breaking the vase"
              }
            ],
            "introObj": "櫃上那個新花瓶",
            "introObjEn": "the new vase on the cabinet",
            "introEvent": "在客廳踢球打碎花瓶",
            "introEventEn": "playing ball in the living room and breaking the vase",
            "endings": [
              {
                "zh": "向媽媽認錯，在大人協助下安全清理碎片",
                "en": "apologized to Mum and helped clear the pieces safely with an adult"
              },
              {
                "zh": "誠懇向媽媽道歉，用儲蓄買新花瓶賠償",
                "en": "apologized sincerely to Mum and used my savings to buy a replacement vase"
              }
            ]
          },
          {
            "id": "B",
            "action": "踢球打碎陶瓷花瓶後，偷偷把碎片掃進垃圾桶",
            "actionEn": "secretly swept the broken ceramic vase into the bin after kicking a ball into it",
            "faces": [
              {
                "zh": "驚慌失措，手忙腳亂",
                "en": "panicked and flustered"
              },
              {
                "zh": "臉色發白，眼神閃縮",
                "en": "pale-faced with darting eyes"
              }
            ],
            "thoughts": [
              {
                "zh": "快把碎片藏起來，媽媽可能不會發現！",
                "en": "Hide the broken pieces fast—Mum might not notice!"
              },
              {
                "zh": "要是承認了，一定會被重重責罰！",
                "en": "If I admit it, I will surely be punished severely!"
              }
            ],
            "results": [
              {
                "zh": "媽媽倒垃圾時被花瓶碎片割傷了手指",
                "en": "Mum cut her finger on the vase fragments while taking out the rubbish",
                "introObj": "急救箱裏的那盒膠布",
                "introObjEn": "that box of bandages in the first-aid kit",
                "introEvent": "打碎東西隱瞞害媽媽割傷手",
                "introEventEn": "hiding broken shards and causing Mum to cut her hand"
              },
              {
                "zh": "花瓶碎片劃破垃圾袋，還割傷了媽媽的手指",
                "en": "The vase fragments tore the rubbish bag and cut Mum’s finger",
                "introObj": "急救箱裏的那盒膠布",
                "introObjEn": "that box of bandages in the first-aid kit",
                "introEvent": "打碎東西隱瞞害媽媽割傷手",
                "introEventEn": "hiding broken shards and causing Mum to cut her hand"
              }
            ],
            "introObj": "急救箱裏的那盒膠布",
            "introObjEn": "that box of bandages in the first-aid kit",
            "introEvent": "打碎東西隱瞞害媽媽割傷手",
            "introEventEn": "hiding broken shards and causing Mum to cut her hand",
            "endings": [
              {
                "zh": "向媽媽坦白，請大人處理傷口及安全清理碎片",
                "en": "told Mum the truth and asked an adult to treat her wound and clear the pieces safely"
              },
              {
                "zh": "向媽媽道歉，請爸爸幫忙處理傷口並收拾碎片",
                "en": "apologized to Mum and asked Dad to help treat her wound and clear the pieces"
              }
            ]
          },
          {
            "id": "C",
            "action": "在沙發上跳來跳去接球，撞翻了整張小茶几",
            "actionEn": "jumped around on the sofa to catch the ball and knocked over the tea table",
            "faces": [
              {
                "zh": "手舞足蹈，大喊大叫",
                "en": "dancing and shouting wildly"
              },
              {
                "zh": "得意忘形，左撲右跳",
                "en": "carried away, diving left and right"
              }
            ],
            "thoughts": [
              {
                "zh": "我是最厲害的守門員，一定接得住！",
                "en": "I am the best goalkeeper—I can surely catch it!"
              },
              {
                "zh": "在沙發上跳真刺激！",
                "en": "Jumping on the sofa is so thrilling!"
              }
            ],
            "results": [
              {
                "zh": "茶几翻倒，茶壺摔破，茶水灑滿地毯",
                "en": "The tea table tipped over, the teapot broke and tea spilled over the carpet",
                "introObj": "客廳茶几上的新茶壺",
                "introObjEn": "the new teapot on the tea table",
                "introEvent": "在屋內玩球撞翻茶几，摔破茶壺",
                "introEventEn": "playing ball indoors, knocking over the tea table and breaking the teapot"
              },
              {
                "zh": "茶壺掉到地上摔破，我的膝蓋也撞瘀了",
                "en": "The teapot fell to the floor and broke, and I bruised my knee",
                "introObj": "客廳茶几上的新茶壺",
                "introObjEn": "the new teapot on the tea table",
                "introEvent": "在屋內玩球撞翻茶几，摔破茶壺",
                "introEventEn": "playing ball indoors, knocking over the tea table and breaking the teapot"
              }
            ],
            "introObj": "客廳茶几上的新茶壺",
            "introObjEn": "the new teapot on the tea table",
            "introEvent": "在屋內玩球撞翻茶几，摔破茶壺",
            "introEventEn": "playing ball indoors, knocking over the tea table and breaking the teapot",
            "endings": [
              {
                "zh": "向媽媽承認錯誤，請大人幫忙安全收拾碎片",
                "en": "admitted my mistake to Mum and asked an adult to help clear the broken pieces safely"
              },
              {
                "zh": "向媽媽道歉，提出用儲蓄賠償茶壺",
                "en": "apologized to Mum and offered to pay for a replacement teapot with my savings"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "嚇得呆立當場，大氣也不敢喘",
            "en": "stood frozen on the spot, daring not to breathe"
          },
          {
            "zh": "臉紅耳赤，雙手發抖低着頭",
            "en": "blushed deeply, lowering my head with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "為甚麼我不聽媽媽的勸告，偏要在屋內玩球呢？",
            "en": "Why didn't I listen to Mum's advice and insisted on playing ball indoors?"
          },
          {
            "zh": "都怪我一時貪玩，闖下這樣的大禍！",
            "en": "It's all my fault for being playful and causing such a big disaster!"
          }
        ],
        "endings": [
          {
            "zh": "主動向媽媽低頭認錯，並小心清理好地面",
            "en": "lowered my head to apologize to Mum and carefully cleaned up the floor"
          },
          {
            "zh": "誠懇地道出真相，用儲蓄買回新花瓶賠給媽媽",
            "en": "told the truth sincerely and used my savings to buy a new vase for Mum"
          }
        ],
        "lessons": [
          {
            "zh": "要聽從家人的勸告，注意家居安全",
            "en": "we should listen to family advice and pay attention to home safety"
          },
          {
            "zh": "做錯事要勇於承擔責任，絕不能隱瞞",
            "en": "we must be brave to take responsibility for mistakes and never hide them"
          }
        ],
        "futureActions": [
          {
            "zh": "只在戶外球場踢球，不在屋內亂跑亂撞",
            "en": "only play ball on outdoor courts and never run wildly indoors"
          },
          {
            "zh": "做個聽話守規、勇於負責的孩子",
            "en": "be an obedient, rule-abiding, and responsible child"
          }
        ],
        "feelings": [
          {
            "zh": "後悔不已",
            "en": "full of regret"
          },
          {
            "zh": "慚愧萬分",
            "en": "deeply ashamed"
          }
        ],
        "id": "home",
        "label": "媽媽在家的客廳",
        "labelEn": "The living room with Mum at home",
        "forbidden": []
      }
    ]
  },
  {
    "id": "S9",
    "icon": "🐶",
    "title": "9. 忘記關籠門令寵物走失",
    "titleEn": "9. Leaving the Pet Cage Open",
    "desc": "餵完寵物後貪快忘記鎖好門，害小狗或倉鼠跑出去闖禍或差點走失",
    "descEn": "Forgot to lock the cage door after feeding, causing the pet to run out or almost get lost",
    "contexts": [
      {
        "times": [
          {
            "zh": "星期天早上",
            "en": "Sunday morning"
          },
          {
            "zh": "放學回家後",
            "en": "after coming home from school"
          }
        ],
        "whos": [
          {
            "zh": "我和媽媽",
            "en": "Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的客廳",
            "en": "the living room at home"
          }
        ],
        "causes": [
          {
            "zh": "媽媽叮囑我餵完小狗後，一定要關好籠門",
            "en": "Mum reminded me to close the puppy’s cage properly after feeding"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "貪快沒有扣好籠門鎖扣，便跑去看電視",
            "actionEn": "didn't latch the cage door out of haste and ran to watch TV",
            "faces": [
              {
                "zh": "心急如焚，敷衍了事",
                "en": "in a huge rush, doing it carelessly"
              },
              {
                "zh": "漫不經心，隨手一推",
                "en": "absent-minded, just pushing the door lightly"
              }
            ],
            "thoughts": [
              {
                "zh": "隨便掩上門就行，小狗不會推開的！",
                "en": "Just closing the door lightly is fine—the puppy won't push it open!"
              },
              {
                "zh": "卡通片快開始了，哪有空鎖門！",
                "en": "My cartoon is starting soon—no time to lock the door!"
              }
            ],
            "results": [
              {
                "zh": "小狗溜出大門，我們焦急尋找，最後在街角找回牠",
                "en": "The puppy slipped out; we searched anxiously and finally found it at the street corner",
                "introObj": "小狗圍欄上的那個金屬鎖扣",
                "introObjEn": "that metal latch on the puppy's fence",
                "introEvent": "貪快忘記鎖門害小狗走失",
                "introEventEn": "forgetting to lock the door in haste and almost losing the puppy"
              },
              {
                "zh": "小狗跑到走廊，嚇得發抖，我們連忙把牠帶回家",
                "en": "The puppy ran into the corridor, trembling in fear, and we brought it home",
                "introObj": "小狗圍欄上的那個金屬鎖扣",
                "introObjEn": "that metal latch on the puppy's fence",
                "introEvent": "貪快忘記鎖門害小狗走失",
                "introEventEn": "forgetting to lock the door in haste and almost losing the puppy"
              }
            ],
            "introObj": "小狗圍欄上的那個金屬鎖扣",
            "introObjEn": "that metal latch on the puppy's fence",
            "introEvent": "貪快忘記鎖門害小狗走失",
            "introEventEn": "forgetting to lock the door in haste and almost losing the puppy"
          },
          {
            "id": "C",
            "action": "沒有關好門，讓小狗跑進廚房亂翻垃圾桶",
            "actionEn": "left the door unclosed and let the puppy run into the kitchen to raid the bin",
            "faces": [
              {
                "zh": "只顧低頭玩耍，毫不察覺",
                "en": "only looking down at my toys without noticing at all"
              },
              {
                "zh": "心不在焉，掉以輕心",
                "en": "absent-minded and taking it lightly"
              }
            ],
            "thoughts": [
              {
                "zh": "小狗這麼乖，不用看管牠的！",
                "en": "The puppy is so well-behaved—no need to watch over it!"
              },
              {
                "zh": "少鎖一次門不會出事的！",
                "en": "Skipping locking the door just once won't cause any trouble!"
              }
            ],
            "results": [
              {
                "zh": "小狗在垃圾桶找吃的，誤吞雞骨頭，不停哀叫",
                "en": "The puppy searched the bin, swallowed a chicken bone and kept whining",
                "introObj": "小狗頸上的那個小鈴鐺項圈",
                "introObjEn": "that little bell collar around the puppy's neck",
                "introEvent": "疏忽沒鎖門害小狗誤食生病",
                "introEventEn": "neglecting to lock the door and causing the puppy to eat bones and get sick"
              },
              {
                "zh": "小狗誤食垃圾後嘔吐，我們連忙請獸醫幫忙",
                "en": "The puppy vomited after eating rubbish, so we asked a vet for help",
                "introObj": "小狗頸上的那個小鈴鐺項圈",
                "introObjEn": "that little bell collar around the puppy's neck",
                "introEvent": "疏忽沒鎖門害小狗誤食生病",
                "introEventEn": "neglecting to lock the door and causing the puppy to eat bones and get sick"
              }
            ],
            "introObj": "小狗頸上的那個小鈴鐺項圈",
            "introObjEn": "that little bell collar around the puppy's neck",
            "introEvent": "疏忽沒鎖門害小狗誤食生病",
            "introEventEn": "neglecting to lock the door and causing the puppy to eat bones and get sick",
            "endings": [
              {
                "zh": "向媽媽認錯，立即請獸醫照顧小狗，並鎖好籠門",
                "en": "admitted my mistake to Mum, sought veterinary care for the puppy and secured the cage"
              },
              {
                "zh": "誠懇向家人道歉，按獸醫指示照顧小狗",
                "en": "apologized sincerely to my family and followed the vet’s instructions to care for the puppy"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "急得眼淚直流，心慌意亂",
            "en": "cried anxiously and felt panicked"
          },
          {
            "zh": "愧疚地低下頭，雙手不停發抖",
            "en": "lowered my head in guilt with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "都怪我一時疏忽貪快，差點害了小生命！",
            "en": "It's all my fault for being careless and hasty, almost harming a little life!"
          },
          {
            "zh": "如果牠真的出事了，我一輩子也不會原諒自己！",
            "en": "If anything bad really happened to it, I would never forgive myself!"
          }
        ],
        "endings": [
          {
            "zh": "向媽媽認錯，安頓好小狗，並仔細鎖好籠門",
            "en": "admitted my mistake to Mum, settled the puppy safely and secured the cage"
          },
          {
            "zh": "誠懇向家人道歉，承諾每次檢查籠門鎖扣",
            "en": "apologized sincerely to my family and promised to check the cage latch every time"
          }
        ],
        "lessons": [
          {
            "zh": "飼養寵物要有責任感，做事不能粗心馬虎",
            "en": "keeping a pet requires responsibility, and we must never be careless"
          },
          {
            "zh": "一時疏忽會釀成大錯，做事必須認真細心",
            "en": "a moment of neglect can cause a huge mistake, so we must be careful"
          }
        ],
        "futureActions": [
          {
            "zh": "每次餵食後必定親手鎖緊籠門並檢查一次",
            "en": "always lock the cage door tightly and double-check it after feeding"
          },
          {
            "zh": "做個有責任感的小主人，細心照顧寵物",
            "en": "be a responsible little owner and take good care of my pet"
          }
        ],
        "feelings": [
          {
            "zh": "內疚不已",
            "en": "deeply guilty"
          },
          {
            "zh": "後怕又慚愧",
            "en": "scared and ashamed"
          }
        ],
        "id": "puppy",
        "label": "小狗",
        "labelEn": "Puppy",
        "forbidden": [
          "倉鼠",
          "鼠籠"
        ]
      },
      {
        "times": [
          {
            "zh": "星期天早上",
            "en": "Sunday morning"
          },
          {
            "zh": "放學回家後",
            "en": "after coming home from school"
          }
        ],
        "whos": [
          {
            "zh": "我和媽媽",
            "en": "Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的客廳",
            "en": "the living room at home"
          }
        ],
        "causes": [
          {
            "zh": "媽媽叮囑我餵完倉鼠後，一定要關好籠門",
            "en": "Mum reminded me to close the hamster’s cage properly after feeding"
          }
        ],
        "branches": [
          {
            "id": "B",
            "action": "忘記關好倉鼠籠門，便回房間睡午覺",
            "actionEn": "forgot to close the hamster cage door and went back to my room for a nap",
            "faces": [
              {
                "zh": "粗心大意，打着呵欠",
                "en": "careless and yawning sleepily"
              },
              {
                "zh": "只顧着休息，忘得一乾二淨",
                "en": "caring only about resting and forgetting it completely"
              }
            ],
            "thoughts": [
              {
                "zh": "倉鼠正在睡覺，不鎖門也不會跑出來！",
                "en": "The hamster is sleeping—it won't run out even if unlocked!"
              },
              {
                "zh": "等我睡醒再關門也不遲吧！",
                "en": "It won't be too late to close the door after I wake up!"
              }
            ],
            "results": [
              {
                "zh": "倉鼠溜出來咬爛了電線，還卡在沙發底差點受傷",
                "en": "the hamster slipped out, chewed up wires, and got stuck under the sofa",
                "introObj": "客廳角落那個小倉鼠籠",
                "introObjEn": "that small hamster cage in the corner of the living room",
                "introEvent": "忘記關籠門令倉鼠跑出受驚",
                "introEventEn": "forgetting to close the cage and letting the hamster run out in fright"
              },
              {
                "zh": "我們找了整整兩小時，才在櫃底找回受驚的倉鼠",
                "en": "we searched for two whole hours before finding the frightened hamster under the cabinet",
                "introObj": "客廳角落那個小倉鼠籠",
                "introObjEn": "that small hamster cage in the corner of the living room",
                "introEvent": "忘記關籠門令倉鼠跑出受驚",
                "introEventEn": "forgetting to close the cage and letting the hamster run out in fright"
              }
            ],
            "introObj": "客廳角落那個小倉鼠籠",
            "introObjEn": "that small hamster cage in the corner of the living room",
            "introEvent": "忘記關籠門令倉鼠跑出受驚",
            "introEventEn": "forgetting to close the cage and letting the hamster run out in fright",
            "times": [
              {
                "zh": "星期天下午",
                "en": "Sunday afternoon"
              },
              {
                "zh": "星期六午飯後",
                "en": "after lunch on Saturday"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "急得眼淚直流，心慌意亂",
            "en": "cried anxiously and felt panicked"
          },
          {
            "zh": "愧疚地低下頭，雙手不停發抖",
            "en": "lowered my head in guilt with trembling hands"
          }
        ],
        "regrets": [
          {
            "zh": "都怪我一時疏忽貪快，差點害了小生命！",
            "en": "It's all my fault for being careless and hasty, almost harming a little life!"
          },
          {
            "zh": "如果牠真的出事了，我一輩子也不會原諒自己！",
            "en": "If anything bad really happened to it, I would never forgive myself!"
          }
        ],
        "endings": [
          {
            "zh": "向媽媽認錯，安頓好倉鼠，並仔細鎖好籠門",
            "en": "admitted my mistake to Mum, settled the hamster safely and secured the cage"
          },
          {
            "zh": "誠懇向家人道歉，承諾每次檢查籠門鎖扣",
            "en": "apologized sincerely to my family and promised to check the cage latch every time"
          }
        ],
        "lessons": [
          {
            "zh": "飼養寵物要有責任感，做事不能粗心馬虎",
            "en": "keeping a pet requires responsibility, and we must never be careless"
          },
          {
            "zh": "一時疏忽會釀成大錯，做事必須認真細心",
            "en": "a moment of neglect can cause a huge mistake, so we must be careful"
          }
        ],
        "futureActions": [
          {
            "zh": "每次餵食後必定親手鎖緊籠門並檢查一次",
            "en": "always lock the cage door tightly and double-check it after feeding"
          },
          {
            "zh": "做個有責任感的小主人，細心照顧寵物",
            "en": "be a responsible little owner and take good care of my pet"
          }
        ],
        "feelings": [
          {
            "zh": "內疚不已",
            "en": "deeply guilty"
          },
          {
            "zh": "後怕又慚愧",
            "en": "scared and ashamed"
          }
        ],
        "id": "hamster",
        "label": "倉鼠",
        "labelEn": "Hamster",
        "forbidden": [
          "小狗",
          "狗糧",
          "狗籠"
        ]
      }
    ]
  },
  {
    "id": "S10",
    "icon": "💬",
    "title": "10. 一時衝動對媽媽說氣話",
    "titleEn": "10. Saying Hurtful Words to Mum in Anger",
    "desc": "誤會了媽媽的好意或嫌媽媽囉嗦，大發脾氣說出傷人的話，事後萬分後悔",
    "descEn": "Misunderstood Mum's kindness, lost my temper, and said hurtful words I deeply regretted",
    "contexts": [
      {
        "times": [
          {
            "zh": "上星期三晚上",
            "en": "Last Wednesday night"
          },
          {
            "zh": "一個寒冷的早上",
            "en": "a cold morning"
          }
        ],
        "whos": [
          {
            "zh": "我和媽媽",
            "en": "Mum and I"
          }
        ],
        "places": [
          {
            "zh": "家裏的飯廳",
            "en": "the dining room at home"
          },
          {
            "zh": "睡房門口",
            "en": "by the bedroom door"
          }
        ],
        "causes": [
          {
            "zh": "媽媽再三叮囑我多穿外套和帶雨傘",
            "en": "Mum reminded me again and again to wear a coat and bring an umbrella"
          },
          {
            "zh": "媽媽叫我先停下遊戲去溫習功課",
            "en": "Mum told me to stop playing my game and revise my homework first"
          }
        ],
        "branches": [
          {
            "id": "A",
            "action": "不耐煩地大聲頂嘴：「你真囉嗦，不用你管！」",
            "actionEn": "talked back impatiently and loudly, \"You're so nagging, leave me alone!\"",
            "faces": [
              {
                "zh": "皺起眉頭，滿臉不耐煩",
                "en": "frowning with an impatient look"
              },
              {
                "zh": "氣沖沖地甩開媽媽的手",
                "en": "angrily shaking off Mum's hand"
              }
            ],
            "thoughts": [
              {
                "zh": "天天都說同一句話，煩死人了！",
                "en": "Repeating the exact same words every day—so annoying!"
              },
              {
                "zh": "我已經長大了，不用你事事管着！",
                "en": "I'm grown up already—stop controlling everything I do!"
              }
            ],
            "results": [
              {
                "zh": "媽媽愣住了，眼神充滿失落，默默轉身走回廚房",
                "en": "Mum froze with a hurt look in her eyes and walked silently back to the kitchen",
                "introObj": "書桌上那杯媽媽泡的温牛奶",
                "introObjEn": "that cup of warm milk Mum made on my desk",
                "introEvent": "衝動頂撞媽媽令她傷心",
                "introEventEn": "talking back to Mum impulsively and breaking her heart"
              },
              {
                "zh": "我看見媽媽眼角閃着淚光，一句話也沒說",
                "en": "I saw tears glistening in the corner of Mum's eyes as she said nothing",
                "introObj": "書桌上那杯媽媽泡的温牛奶",
                "introObjEn": "that cup of warm milk Mum made on my desk",
                "introEvent": "衝動頂撞媽媽令她傷心",
                "introEventEn": "talking back to Mum impulsively and breaking her heart"
              }
            ],
            "introObj": "書桌上那杯媽媽泡的温牛奶",
            "introObjEn": "that cup of warm milk Mum made on my desk",
            "introEvent": "衝動頂撞媽媽令她傷心",
            "introEventEn": "talking back to Mum impulsively and breaking her heart",
            "times": [
              {
                "zh": "上星期三早上",
                "en": "last Wednesday morning"
              },
              {
                "zh": "一個寒冷的早上",
                "en": "one cold morning"
              }
            ],
            "places": [
              {
                "zh": "家裏的飯廳",
                "en": "the dining room at home"
              }
            ],
            "causes": [
              {
                "zh": "出門前，媽媽再三叮囑我多穿外套和帶雨傘",
                "en": "Before I went out, Mum reminded me to wear a coat and take an umbrella"
              }
            ]
          },
          {
            "id": "B",
            "action": "大力「砰」一聲關上房門，賭氣不吃晚飯",
            "actionEn": "slammed the bedroom door with a loud bang and refused to eat dinner in anger",
            "faces": [
              {
                "zh": "拉長了臉，怒氣沖沖",
                "en": "pulling a long face, full of anger"
              },
              {
                "zh": "雙手抱胸，生悶氣",
                "en": "crossing my arms and sulking"
              }
            ],
            "thoughts": [
              {
                "zh": "媽媽一點也不明白我，我才不理她！",
                "en": "Mum doesn't understand me at all—I won't talk to her!"
              },
              {
                "zh": "給她一點顏色看看！",
                "en": "I'll show her my temper!"
              }
            ],
            "results": [
              {
                "zh": "夜深時，媽媽仍端來一碗熱湯麵，輕輕放在我桌上",
                "en": "Late that night, Mum still brought a bowl of hot noodles and placed it gently on my desk",
                "introObj": "飯廳裏那個青花瓷湯碗",
                "introObjEn": "that blue-and-white soup bowl in the dining room",
                "introEvent": "發脾氣摔門卻獲媽媽温情照顧",
                "introEventEn": "slamming the door in anger yet receiving Mum's warm care"
              },
              {
                "zh": "媽媽端着熱湯麵進房，看着疲倦的她，我鼻子一酸",
                "en": "Mum brought hot noodles into my room; seeing her tired face brought tears to my eyes",
                "introObj": "飯廳裏那個青花瓷湯碗",
                "introObjEn": "that blue-and-white soup bowl in the dining room",
                "introEvent": "發脾氣摔門卻獲媽媽温情照顧",
                "introEventEn": "slamming the door in anger yet receiving Mum's warm care"
              }
            ],
            "introObj": "飯廳裏那個青花瓷湯碗",
            "introObjEn": "that blue-and-white soup bowl in the dining room",
            "introEvent": "發脾氣摔門卻獲媽媽温情照顧",
            "introEventEn": "slamming the door in anger yet receiving Mum's warm care",
            "times": [
              {
                "zh": "上星期三傍晚",
                "en": "last Wednesday evening"
              },
              {
                "zh": "星期五晚飯前",
                "en": "before dinner on Friday"
              }
            ],
            "places": [
              {
                "zh": "自己的睡房門口",
                "en": "my bedroom doorway"
              }
            ],
            "causes": [
              {
                "zh": "媽媽叫我先停下遊戲，吃完晚飯後溫習",
                "en": "Mum asked me to stop playing, have dinner and revise afterwards"
              }
            ]
          },
          {
            "id": "C",
            "action": "把媽媽準備的愛心便當推開，嫌棄飯菜不好吃",
            "actionEn": "pushed away the loving lunchbox Mum prepared and complained the food tasted bad",
            "faces": [
              {
                "zh": "嘟起嘴，一臉嫌棄",
                "en": "pouting with a look of dislike"
              },
              {
                "zh": "眉頭緊鎖，發脾氣摔筷子",
                "en": "frowning tightly and throwing down my chopsticks in a temper"
              }
            ],
            "thoughts": [
              {
                "zh": "又沒有炸雞和薯條，我才不想吃！",
                "en": "There's no fried chicken or fries—I don't want to eat this!"
              },
              {
                "zh": "別人的便當比我的好多了！",
                "en": "Other classmates' lunchboxes are way better than mine!"
              }
            ],
            "results": [
              {
                "zh": "後來才知道媽媽一早五點起床忍着腰痛為我煮飯",
                "en": "I later learned Mum woke up at 5 a.m. enduring back pain to cook for me",
                "introObj": "書包裏那個保温便當盒",
                "introObjEn": "that thermal lunchbox inside my schoolbag",
                "introEvent": "嫌棄媽媽辛苦準備的便當",
                "introEventEn": "complaining about the lunchbox Mum worked so hard to prepare"
              },
              {
                "zh": "看見媽媽手上的燙傷紅印，我羞愧得流下眼淚",
                "en": "seeing the red burn mark on Mum's hand made me cry in shame",
                "introObj": "書包裏那個保温便當盒",
                "introObjEn": "that thermal lunchbox inside my schoolbag",
                "introEvent": "嫌棄媽媽辛苦準備的便當",
                "introEventEn": "complaining about the lunchbox Mum worked so hard to prepare"
              }
            ],
            "introObj": "書包裏那個保温便當盒",
            "introObjEn": "that thermal lunchbox inside my schoolbag",
            "introEvent": "嫌棄媽媽辛苦準備的便當",
            "introEventEn": "complaining about the lunchbox Mum worked so hard to prepare",
            "times": [
              {
                "zh": "星期一早上",
                "en": "Monday morning"
              },
              {
                "zh": "上星期四上學前",
                "en": "before school last Thursday"
              }
            ],
            "places": [
              {
                "zh": "家裏的飯廳",
                "en": "the dining room at home"
              }
            ],
            "causes": [
              {
                "zh": "上學前，媽媽把剛做好的便當放在我面前",
                "en": "Before school, Mum put a freshly prepared lunchbox in front of me"
              }
            ]
          }
        ],
        "reactions": [
          {
            "zh": "心裏湧起一陣酸楚，眼淚奪眶而出",
            "en": "felt a wave of sorrow in my heart as tears poured from my eyes"
          },
          {
            "zh": "臉上一陣發熱，羞愧得無地自容",
            "en": "felt my face burn hot, too ashamed to show my face"
          }
        ],
        "regrets": [
          {
            "zh": "媽媽這麼愛我，我竟用氣話傷害她的心！",
            "en": "Mum loves me so much, yet I hurt her heart with angry words!"
          },
          {
            "zh": "我真不孝順、太不懂事了！",
            "en": "I was truly unfilial and so inconsiderate!"
          }
        ],
        "endings": [
          {
            "zh": "走過去緊緊抱住媽媽，流着淚說：「媽媽，對不起！」",
            "en": "walked over, hugged Mum tightly, and said in tears, \"Mum, I'm sorry!\""
          },
          {
            "zh": "主動幫媽媽按摩肩膀，誠懇地向她道歉",
            "en": "massaged Mum's shoulders willingly and apologized to her sincerely"
          }
        ],
        "lessons": [
          {
            "zh": "要體諒父母的辛勞，珍惜家人的關愛",
            "en": "we must appreciate our parents' hard work and cherish their love"
          },
          {
            "zh": "說話前要控制情緒，不能對親人說傷人的話",
            "en": "we should control our emotions before speaking and never hurt loved ones"
          }
        ],
        "futureActions": [
          {
            "zh": "温和有禮地與媽媽溝通，不再任性發脾氣",
            "en": "communicate gently and politely with Mum and never throw tantrums"
          },
          {
            "zh": "多分擔家務，做個體貼孝順的孩子",
            "en": "share more housework and be a caring, filial child"
          }
        ],
        "feelings": [
          {
            "zh": "愧疚萬分",
            "en": "deeply guilty"
          },
          {
            "zh": "後悔不已",
            "en": "full of regret"
          }
        ],
        "id": "mum",
        "label": "和媽媽相處",
        "labelEn": "An incident with Mum",
        "forbidden": [
          "爸爸"
        ]
      }
    ]
  }
];
