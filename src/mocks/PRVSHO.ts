export const PRVSHO: any = JSON.parse(`
{
  "type": "EXD",
  "id": "exd2",
  "title": "",
  "fun": "F(EXD;*SCO;) 2(MB;SCP_SCH;[K1])",
  "loaded": true,
  "layout": "column",
  "sections": [
    {
      "id": "sec4",
      "layout": "",
      "dim": "",
      "components": [
        {
          "type": "FLD",
          "key": "fld2",
          "id": "fld2",
          "title": "",
          "fun": "",
          "options": {
            "FLD": {
              "default": {
                "type": "rad",
                "showSubmit": false,
                "valueField": "value",
                "displayedField": "value",
                "extensions": {
                  "minQueryLength": 4,
                  "forceSelection": true
                }
              }
            }
          },
          "data": [
            {
              "value": "Dashboard",
              "options": true,
              "obj": "J1KEY",
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "Templates list",
              "options": true,
              "obj": "J2KEY",
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "A38 plugins",
              "options": true,
              "obj": "J3KEY",
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "A37 plugins",
              "options": true,
              "obj": "J4KEY",
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "Queue rabbit",
              "options": true,
              "obj": "J5KEY",
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "Logs",
              "options": true,
              "obj": "J6KEY",
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            }
          ],
          "variables": [],
          "dynamisms": [
            {
              "event": "change",
              "exec": "",
              "targets": ["exd3"]
            }
          ]
        }
      ]
    },
    {
      "id": "sec5",
      "layout": "",
      "dim": "",
      "components": [
        {
          "type": "EXD",
          "key": "exd3",
          "id": "exd3",
          "title": "",
          "fun": "",
          "loaded": true,
          "sections": [
            {
              "key": "sec6",
              "id": "",
              "layout": "",
              "dim": "",
              "components": [
                {
                  "type": "EXB",
                  "key": "i123",
                  "title": "la mia matice ",
                  "options": {
                    "EXB": {
                      "": {
                        "enableSort": true
                      },
                      "A01": {
                        "showFilter": true
                      }
                    },
                    "CHA": {
                      "": {
                        "type": "BAR"
                      }
                    }
                  },
                  "data":
                  {
                    "columns": [
                      {
                        "name": "FLD1",
                        "title": "colonna A",
                        "size": ""
                      },
                      {
                        "name": "FLD2",
                        "title": "Colonna B",
                        "size": 10
                      }
                    ],
                    "rows": [
                      {
                        "object": "se presente, il K01",
                        "readOnly": true,
                        "cells": {
                          "FLD1": {
                            "readOnly": true,
                            "options (sarebbe il tasto destro)": true,
                            "obj": {
                              "t": "CN",
                              "p": "COL",
                              "k": "KEKBUR"
                            },
                            "style": "",
                            "type": "itx / acp / etc...",
                            "value": "mickey mouse"
                          },
                          "FLD2": {}
                        }
                      }
                    ]
                }
                ,
                  "messages": [],
                  "actions": {
                    "row": [
                      {
                        "exec": "...",
                        "icon": "mdi-clock",
                        "text": "Scheda orologio"
                      }
                    ],
                    "global": [],
                    "auto (tag action attuale)": [
                      "F() / CLOSE / ETC...",
                      "F() / CLOSE / ETC...",
                      "F() / CLOSE / ETC...",
                      "F() / CLOSE / ETC..."
                    ],
                    "command": [
                      {
                        "exec": "...",
                        "icon": "mdi-play",
                        "text": "Spotify"
                      }
                    ]
                  },
                  "variables": [],
                  "dynamisms": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
`);
