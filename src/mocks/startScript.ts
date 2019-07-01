export function startScript(): any {
  return JSON.parse(`
  {
    "type": "EXD",
    "id": "START",
    "title": "Scheda iniziale Sme.UP Gateway PRVL07",
    "loaded": true,
    "layout": "column",
    "sections": [{
        "id": "S1",
        "dim": "10%",
        "components": [{
          "type": "LAB",
          "id": "TITLAB",
          "title": "*NONE",
          "data": [{
            "value": "Sme.UP Gateway PRVL07",
            "options": false
          }]
        }]
      },
      {
        "id": "S2",
        "dim": "10%",
        "components": [{
          "type": "FLD",
          "id": "SELFLD",
          "title": "*NONE",
          "fun": "",
          "loaded": true,
          "options": {
            "FLD": {
              "default": {
                "type": "rad",
                "showSubmit": false,
                "valueField": "value",
                "displayedField": "value",
                "initialValue": {
                  "value": "Dashboard"
                },
                "extensions": {
                  "minQueryLength": 4,
                  "forceSelection": true
                }
              }
            }
          },
          "data": [{
              "value": "Dashboard",
              "options": false,
              "obj": {
                "t": "MB",
                "p": "SCP_SCH",
                "k": "DASH"
              },
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "Templates list",
              "options": true,
              "obj": {
                "t": "MB",
                "p": "SCP_SCH",
                "k": "LIST"
              },
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "A37 plugins",
              "options": true,
              "obj": {
                "t": "MB",
                "p": "SCP_SCH",
                "k": "A37"
              },
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "A38 plugins",
              "options": true,
              "obj": {
                "t": "MB",
                "p": "SCP_SCH",
                "k": "A38"
              },
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            },
            {
              "value": "Queue rabbit",
              "options": true,
              "obj": {
                "t": "MB",
                "p": "SCP_SCH",
                "k": "RABBIT"
              },
              "iconClass": "-smeup-fixed-icon TA-B-AMO-A-BASE",
              "children": []
            }
          ],
          "variables": [],
          "dynamisms": [{
            "event": "change",
            "exec": "",
            "targets": ["SCHINF"]
          }]
        }]
      },
      {
        "id": "S3",
        "components": [{
          "type": "EXD",
          "id": "SCHINF",
          "title": "*NONE",
          "fun": "F(EXD;*SCO;) 2(MB;SCP_SCH;[K1])",
          "loaded": false
        }]
      }
    ]
  }
`);
}
