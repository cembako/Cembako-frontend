angular.module('starter.services', [])

.factory('Pantauans', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pantauans = [{
    id: 0,
    rate: 9,
    name: 'Suminah',
    lastText: 'Rp 12.500 /kg',
    lokasi: 'Yogyakarta, Cebongan',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 13,
    rate: 7,
    name: 'Ibu Maryam',
    lastText: 'Rp 11.000 /kg',
    lokasi: 'Yogyakarta, Jumeneng',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 7,
    rate: 0,
    name: 'Pasar Bringharjo',
    lastText: 'Rp 10.000 /kg',
    lokasi: 'Yogyakarta',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 2,
    rate: 0,
    name: 'Ibu Susi',
    lastText: 'Rp 10.000 /kg',
    lokasi: 'Yogyakarta, Brebah',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 2,
    rate: 0,
    name: 'Hartuti',    
    lastText: 'Rp 10.500 /kg',
    lokasi: 'Yogyakarta',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return pantauans;
    },
    remove: function(pantauan) {
      pantauans.splice(pantauans.indexOf(pantauan), 1);
    },
    get: function(pantauanId) {
      for (var i = 0; i < pantauans.length; i++) {
        if (pantauans[i].id === parseInt(pantauanId)) {
          return pantauans[i];
        }
      }
      return null;
    }
  };
})



.factory('Sembakos', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var sembakos = [];
  // $http.get("http://localhost:8100/2015-3.json")
  //   .success(function(response){
  //     console.log(response)
  //     sembakos = response
  //   });
  var sembakos = [
  {
    "name": "Minyak Goreng Kemasan",
    "unit": "Rp / 620ml",
    "prices": {
      "2": 15147,
      "3": 15121,
      "4": 15158,
      "5": 15208,
      "6": 15214,
      "9": 15198,
      "10": 15208,
      "11": 15198,
      "12": 15204,
      "13": 15208,
      "16": 15219,
      "17": 15214,
      "18": 15211,
      "19": 15211,
      "20": 15206,
      "23": 15260,
      "24": 15255,
      "25": 15255,
      "26": 15261
    }
  },
  {
    "name": "Minyak Goreng Curah",
    "unit": "Rp / kg",
    "prices": {
      "2": 11279,
      "3": 11302,
      "4": 11292,
      "5": 11318,
      "6": 11297,
      "9": 11332,
      "10": 11337,
      "11": 11313,
      "12": 11310,
      "13": 11336,
      "16": 11344,
      "17": 11309,
      "18": 11289,
      "19": 11287,
      "20": 11275,
      "23": 11309,
      "24": 11309,
      "25": 11275,
      "26": 11286
    }
  },
  {
    "name": "Daging Sapi",
    "unit": "Rp / kg",
    "prices": {
      "2": 101532,
      "3": 101679,
      "4": 101397,
      "5": 101315,
      "6": 101421,
      "9": 101315,
      "10": 101315,
      "11": 101265,
      "12": 101234,
      "13": 101226,
      "16": 101201,
      "17": 101177,
      "18": 101435,
      "19": 101366,
      "20": 101396,
      "23": 101333,
      "24": 101412,
      "25": 101392,
      "26": 101387
    }
  },
  {
    "name": "Daging Ayam Broiler",
    "unit": "Rp / kg",
    "prices": {
      "2": 26937,
      "3": 27401,
      "4": 27099,
      "5": 26843,
      "6": 26736,
      "9": 26779,
      "10": 26946,
      "11": 27011,
      "12": 26994,
      "13": 27080,
      "16": 27103,
      "17": 27072,
      "18": 26852,
      "19": 26947,
      "20": 26879,
      "23": 26453,
      "24": 26578,
      "25": 26599,
      "26": 26483
    }
  },
  {
    "name": "Daging Ayam Kampung",
    "unit": "Rp / kg",
    "prices": {
      "2": 58841,
      "3": 58971,
      "4": 58840,
      "5": 58987,
      "6": 58790,
      "9": 58765,
      "10": 58921,
      "11": 58770,
      "12": 58861,
      "13": 58517,
      "16": 58745,
      "17": 58678,
      "18": 58982,
      "19": 59043,
      "20": 58800,
      "23": 58835,
      "24": 58919,
      "25": 58822,
      "26": 58656
    }
  },
  {
    "name": "Telur Ayam Ras",
    "unit": "Rp / kg",
    "prices": {
      "2": 21254,
      "3": 21244,
      "4": 21145,
      "5": 21092,
      "6": 21048,
      "9": 21057,
      "10": 20983,
      "11": 20886,
      "12": 20855,
      "13": 20756,
      "16": 20538,
      "17": 20499,
      "18": 20444,
      "19": 20363,
      "20": 20305,
      "23": 20164,
      "24": 20099,
      "25": 20016,
      "26": 20025
    }
  },
  {
    "name": "Telur Ayam Kampung",
    "unit": "Rp / kg",
    "prices": {
      "2": 41096,
      "3": 41055,
      "4": 41294,
      "5": 41271,
      "6": 41106,
      "9": 41210,
      "10": 41328,
      "11": 41232,
      "12": 41317,
      "13": 41266,
      "16": 41199,
      "17": 41311,
      "18": 41092,
      "19": 41123,
      "20": 41244,
      "23": 41050,
      "24": 41050,
      "25": 40984,
      "26": 40984
    }
  },
  {
    "name": "Tepung Terigu",
    "unit": "Rp / kg",
    "prices": {
      "2": 8853,
      "3": 8815,
      "4": 8815,
      "5": 8810,
      "6": 8807,
      "9": 8820,
      "10": 8817,
      "11": 8817,
      "12": 8820,
      "13": 8850,
      "16": 8822,
      "17": 8845,
      "18": 8842,
      "19": 8842,
      "20": 8852,
      "23": 8862,
      "24": 8832,
      "25": 8832,
      "26": 8845
    }
  },
  {
    "name": "Kedelai Impor",
    "unit": "Rp / kg",
    "prices": {
      "2": 11146,
      "3": 11172,
      "4": 11201,
      "5": 11155,
      "6": 11201,
      "9": 11212,
      "10": 11216,
      "11": 11202,
      "12": 11271,
      "13": 11275,
      "16": 11259,
      "17": 11258,
      "18": 11235,
      "19": 11235,
      "20": 11258,
      "23": 11220,
      "24": 11217,
      "25": 11222,
      "26": 11199
    }
  },
  {
    "name": "Kedelai lokal",
    "unit": "Rp / kg",
    "prices": {
      "2": 11015,
      "3": 11090,
      "4": 11040,
      "5": 0,
      "6": 11045,
      "9": 11015,
      "10": 11040,
      "11": 11048,
      "12": 11005,
      "13": 11065,
      "16": 11115,
      "17": 11115,
      "18": 11115,
      "19": 10889,
      "20": 11156,
      "23": 11158,
      "24": 11133,
      "25": 11133,
      "26": 11072
    }
  },
  {
    "name": "Beras Medium",
    "unit": "Rp / kg",
    "prices": {
      "2": 10553,
      "3": 10583,
      "4": 10636,
      "5": 10607,
      "6": 10620,
      "9": 10537,
      "10": 10516,
      "11": 10492,
      "12": 10470,
      "13": 10452,
      "16": 10434,
      "17": 10430,
      "18": 10361,
      "19": 10310,
      "20": 10289,
      "23": 10208,
      "24": 10208,
      "25": 10114,
      "26": 10110
    }
  },
  {
    "name": "Gula Pasir",
    "unit": "Rp / kg",
    "prices": {
      "2": 11180,
      "3": 11152,
      "4": 11361,
      "5": 11369,
      "6": 11369,
      "9": 11361,
      "10": 11360,
      "11": 11357,
      "12": 11379,
      "13": 11398,
      "16": 11458,
      "17": 11484,
      "18": 11488,
      "19": 11486,
      "20": 11496,
      "23": 11516,
      "24": 11520,
      "25": 11539,
      "26": 11542
    }
  },
  {
    "name": "Susu Kental Manis",
    "unit": "Rp / 397g",
    "prices": {
      "2": 10342,
      "3": 10342,
      "4": 10342,
      "5": 10327,
      "6": 10340,
      "9": 10295,
      "10": 10335,
      "11": 10345,
      "12": 10329,
      "13": 10320,
      "16": 10277,
      "17": 10279,
      "18": 10279,
      "19": 10271,
      "20": 10279,
      "23": 10282,
      "24": 10268,
      "25": 10273,
      "26": 10268
    }
  },
  {
    "name": "Mie Instant",
    "unit": "Rp / Bungkus",
    "prices": {
      "2": 2079,
      "3": 2081,
      "4": 2073,
      "5": 0,
      "6": 2083,
      "9": 2097,
      "10": 2097,
      "11": 2099,
      "12": 2104,
      "13": 2104,
      "16": 2093,
      "17": 2097,
      "18": 2106,
      "19": 2113,
      "20": 2118,
      "23": 2113,
      "24": 2115,
      "25": 2115,
      "26": 2115
    }
  },
  {
    "name": "Cabe Merah Keriting",
    "unit": "Rp / kg",
    "prices": {
      "2": 24760,
      "3": 25156,
      "4": 25652,
      "5": 0,
      "6": 25840,
      "9": 26293,
      "10": 25586,
      "11": 25890,
      "12": 25696,
      "13": 25782,
      "16": 24991,
      "17": 24247,
      "18": 24352,
      "19": 24352,
      "20": 24198,
      "23": 23752,
      "24": 24377,
      "25": 24602,
      "26": 24737
    }
  },
  {
    "name": "Cabe Merah Biasa",
    "unit": "Rp / kg",
    "prices": {
      "2": 23202,
      "3": 23698,
      "4": 23657,
      "5": 0,
      "6": 24424,
      "9": 25587,
      "10": 25022,
      "11": 24837,
      "12": 24814,
      "13": 24521,
      "16": 24079,
      "17": 24186,
      "18": 24080,
      "19": 24582,
      "20": 24626,
      "23": 24539,
      "24": 24545,
      "25": 24797,
      "26": 25036
    }
  },
  {
    "name": "Bawang Merah ",
    "unit": "Rp / kg",
    "prices": {
      "2": 21254,
      "3": 21318,
      "4": 21353,
      "5": 0,
      "6": 21523,
      "9": 22100,
      "10": 22525,
      "11": 23179,
      "12": 23312,
      "13": 23497,
      "16": 26041,
      "17": 26613,
      "18": 28059,
      "19": 28905,
      "20": 29370,
      "23": 29681,
      "24": 29551,
      "25": 29891,
      "26": 30248
    }
  },
  {
    "name": "Ikan Teri Asin",
    "unit": "Rp / kg",
    "prices": {
      "2": 66156,
      "3": 66252,
      "4": 66023,
      "5": 0,
      "6": 66165,
      "9": 66195,
      "10": 66301,
      "11": 66478,
      "12": 66328,
      "13": 66579,
      "16": 66213,
      "17": 66730,
      "18": 66766,
      "19": 66695,
      "20": 66645,
      "23": 66842,
      "24": 66337,
      "25": 66453,
      "26": 66559
    }
  },
  {
    "name": "Kacang Hijau",
    "unit": "Rp / kg",
    "prices": {
      "2": 19430,
      "3": 19297,
      "4": 19307,
      "5": 0,
      "6": 19417,
      "9": 19413,
      "10": 19340,
      "11": 19441,
      "12": 19386,
      "13": 19407,
      "16": 19468,
      "17": 19437,
      "18": 19658,
      "19": 19669,
      "20": 19867,
      "23": 19696,
      "24": 19819,
      "25": 19849,
      "26": 19936
    }
  },
  {
    "name": "Kacang Tanah",
    "unit": "Rp / kg",
    "prices": {
      "2": 20682,
      "3": 20771,
      "4": 20808,
      "5": 0,
      "6": 20834,
      "9": 20891,
      "10": 20911,
      "11": 20878,
      "12": 20918,
      "13": 20935,
      "16": 21091,
      "17": 21111,
      "18": 21074,
      "19": 21082,
      "20": 21268,
      "23": 21322,
      "24": 21348,
      "25": 21351,
      "26": 21435
    }
  },
  {
    "name": "Ketela Pohon",
    "unit": "Rp / kg",
    "prices": {
      "2": 5089,
      "3": 5102,
      "4": 5092,
      "5": 0,
      "6": 5092,
      "9": 5107,
      "10": 5097,
      "11": 5092,
      "12": 5107,
      "13": 5121,
      "16": 5095,
      "17": 5126,
      "18": 5123,
      "19": 5126,
      "20": 5126,
      "23": 5141,
      "24": 5126,
      "25": 5126,
      "26": 5131
    }
  }
];

  return {
    all: function() {
      return sembakos;
    },
    get: function(priceId) {
      for (var i = 0; i < sembakos.length; i++) {
        if (sembakos[i].id === parseInt(priceId)) {
          return sembakos[i];
        }
      }
      return null;
    }
  };
});