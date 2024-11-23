var APP_DATA = {
  "scenes": [
    {
      "id": "0-1c_entrada",
      "name": "1C_Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.07087602144381222,
        "pitch": 0.03169206131603808,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9126955127737961,
          "pitch": 0.35571173186478866,
          "rotation": 0,
          "target": "3-4c_cocina"
        },
        {
          "yaw": -0.4625888170296584,
          "pitch": 0.5527572513696839,
          "rotation": 4.71238898038469,
          "target": "4-5c_distribuidor1"
        },
        {
          "yaw": 1.5175437223100028,
          "pitch": 0.6493109983817078,
          "rotation": 7.0685834705770345,
          "target": "1-2c_comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2c_comedor",
      "name": "2C_Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12195447501738776,
          "pitch": 0.5246632949228971,
          "rotation": 0,
          "target": "2-3c_saln"
        },
        {
          "yaw": -1.588225617171279,
          "pitch": 0.5167137620071607,
          "rotation": 0,
          "target": "3-4c_cocina"
        },
        {
          "yaw": 2.811518788707234,
          "pitch": 0.48865962336509305,
          "rotation": 0,
          "target": "0-1c_entrada"
        },
        {
          "yaw": 3.1354137323548628,
          "pitch": 0.2653064324334089,
          "rotation": 5.497787143782138,
          "target": "4-5c_distribuidor1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3c_saln",
      "name": "3C_Salón",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.02351918442805,
          "pitch": 0.2719117460020204,
          "rotation": 0,
          "target": "0-1c_entrada"
        },
        {
          "yaw": -1.356689464225589,
          "pitch": 0.536379964325949,
          "rotation": 0,
          "target": "1-2c_comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4c_cocina",
      "name": "4C_Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3600288069329078,
          "pitch": 0.3441712665714789,
          "rotation": 0,
          "target": "0-1c_entrada"
        },
        {
          "yaw": 1.7016398858450872,
          "pitch": 0.23159944953041567,
          "rotation": 0,
          "target": "4-5c_distribuidor1"
        },
        {
          "yaw": 1.0498989284744127,
          "pitch": 0.4178611845055098,
          "rotation": 5.497787143782138,
          "target": "1-2c_comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-5c_distribuidor1",
      "name": "5C_Distribuidor1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2826618991401695,
          "pitch": 0.3860335227877876,
          "rotation": 0.7853981633974483,
          "target": "0-1c_entrada"
        },
        {
          "yaw": -2.85656263607928,
          "pitch": 0.683295367400774,
          "rotation": 0,
          "target": "5-6c_distribuidor2"
        },
        {
          "yaw": 2.644460766270104,
          "pitch": 0.8238604102637677,
          "rotation": 4.71238898038469,
          "target": "6-7c_dorm2"
        },
        {
          "yaw": -2.9168088700607466,
          "pitch": 0.35734397851316935,
          "rotation": 0,
          "target": "8-9c_dorm1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6c_distribuidor2",
      "name": "6C_Distribuidor2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0009142972479931899,
          "pitch": 0.5352436550429225,
          "rotation": 0,
          "target": "8-9c_dorm1"
        },
        {
          "yaw": -0.995912802120344,
          "pitch": 0.7931306784889731,
          "rotation": 0,
          "target": "7-8c_bao"
        },
        {
          "yaw": -2.199837183746176,
          "pitch": 0.8028602726234944,
          "rotation": 0,
          "target": "6-7c_dorm2"
        },
        {
          "yaw": -3.1090682202367486,
          "pitch": 0.623775665966642,
          "rotation": 0,
          "target": "4-5c_distribuidor1"
        },
        {
          "yaw": -3.0921152423546765,
          "pitch": 0.28904861379251834,
          "rotation": 0.7853981633974483,
          "target": "0-1c_entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7c_dorm2",
      "name": "7C_Dorm2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1825734076227086,
          "pitch": 0.4190044757339457,
          "rotation": 0,
          "target": "5-6c_distribuidor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-8c_bao",
      "name": "8C_Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.935991973231797,
          "pitch": 0.5150189891780954,
          "rotation": 0,
          "target": "5-6c_distribuidor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9c_dorm1",
      "name": "9C_Dorm1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7071231166711822,
          "pitch": 0.36121615603505575,
          "rotation": 0,
          "target": "5-6c_distribuidor2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TOUR-VELAZQUEZ-C",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
