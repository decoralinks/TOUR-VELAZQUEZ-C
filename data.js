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
        "yaw": 1.2869944377881861,
        "pitch": 0.007129488751516533,
        "fov": 1.5141656380141597
      },
      "linkHotspots": [
        {
          "yaw": 1.523422630832716,
          "pitch": 0.6411420705450261,
          "rotation": 0,
          "target": "1-2c_comedor"
        },
        {
          "yaw": 1.519225242508437,
          "pitch": 0.3057771714756399,
          "rotation": 0,
          "target": "2-3c_saln"
        },
        {
          "yaw": 0.9088664449527499,
          "pitch": 0.3415575877046919,
          "rotation": 0,
          "target": "3-4c_cocina"
        },
        {
          "yaw": -0.45881835061793197,
          "pitch": 0.5969412276587942,
          "rotation": 4.71238898038469,
          "target": "4-5c_distribuidor1"
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
          "yaw": -0.16961978863459137,
          "pitch": 0.532939844326755,
          "rotation": 0,
          "target": "2-3c_saln"
        },
        {
          "yaw": -1.5841989677343271,
          "pitch": 0.471131014032931,
          "rotation": 0,
          "target": "3-4c_cocina"
        },
        {
          "yaw": 3.109089229715586,
          "pitch": 0.26212476573869736,
          "rotation": 5.497787143782138,
          "target": "4-5c_distribuidor1"
        },
        {
          "yaw": 2.709558660895926,
          "pitch": 0.48764627808809635,
          "rotation": 0,
          "target": "0-1c_entrada"
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
          "yaw": -1.0770860199156456,
          "pitch": 0.5166921319453888,
          "rotation": 4.71238898038469,
          "target": "1-2c_comedor"
        },
        {
          "yaw": -0.9619063320292138,
          "pitch": 0.2899533414254343,
          "rotation": 5.497787143782138,
          "target": "0-1c_entrada"
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
          "yaw": 1.3648835400431771,
          "pitch": 0.3466615559176276,
          "rotation": 0,
          "target": "0-1c_entrada"
        },
        {
          "yaw": 1.690065957312557,
          "pitch": 0.1994631458287479,
          "rotation": 0,
          "target": "4-5c_distribuidor1"
        },
        {
          "yaw": 1.0456580428578128,
          "pitch": 0.4093659788950106,
          "rotation": 0,
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
          "yaw": 0.2756064489858492,
          "pitch": 0.4051277282601049,
          "rotation": 0.7853981633974483,
          "target": "0-1c_entrada"
        },
        {
          "yaw": -2.870779591019586,
          "pitch": 0.7696205696559488,
          "rotation": 0,
          "target": "5-6c_distribuidor2"
        },
        {
          "yaw": -2.9643068043566085,
          "pitch": 0.27396761185904595,
          "rotation": 0,
          "target": "8-9c_dorm1"
        },
        {
          "yaw": 2.6481028977160506,
          "pitch": 0.8470864138121126,
          "rotation": 4.71238898038469,
          "target": "6-7c_dorm2"
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
          "yaw": -0.02780845160572376,
          "pitch": 0.5510645156513174,
          "rotation": 0,
          "target": "8-9c_dorm1"
        },
        {
          "yaw": -1.03093788329004,
          "pitch": 0.8055526943429001,
          "rotation": 0,
          "target": "7-8c_bao"
        },
        {
          "yaw": -2.2658984590023987,
          "pitch": 0.7680687604844181,
          "rotation": 0,
          "target": "6-7c_dorm2"
        },
        {
          "yaw": -3.116871141301548,
          "pitch": 0.4504496180028763,
          "rotation": 0,
          "target": "4-5c_distribuidor1"
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
          "yaw": -2.2089984926071082,
          "pitch": 0.4134435411953614,
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
          "yaw": -2.928647090031536,
          "pitch": 0.49075911940559,
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
          "yaw": -0.6944737054398722,
          "pitch": 0.35744416106053123,
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
