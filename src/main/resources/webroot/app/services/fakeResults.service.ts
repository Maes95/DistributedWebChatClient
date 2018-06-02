import { Injectable } from "@angular/core";
import { Result } from '../models/result';

@Injectable()
export class FakeResultsService {
  constructor() { }

  public generateResults(callback: Function) {
    var i = 0;
    // var interval = setInterval(function(){
    //   callback(RESULTS[i]);
    //   i++;
    //   if(i == RESULTS.length){
    //     clearInterval(interval);
    //   };
    // }, 1);
    for (let result of RESULTS) {
      callback(result);
    }
  }
}

const RESULTS: Result[] = [

  // AKKA

  {
    "numChats": 1,
    "numUsers": 10,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 53,
    "times": [54, 54, 53, 53, 53, 53, 55, 54, 52],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [9.8, 10.1, 11.2, 12.8, 13, 13.5, 12.8, 16.7, 18.2, 18.8, 17.1, 17.8, 13.8, 14.8],
      "ram": [269, 251, 251, 252, 256, 255, 255, 254, 254, 255, 255, 256, 257, 258]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [9.7, 10, 12.7, 13.1, 10.4, 13.1, 12.1, 17.4, 16.4, 19.8, 19.1, 18.1, 18, 14.9, 16.8, 15.3, 17.1, 16.8],
      "ram": [248, 250, 250, 251, 255, 252, 259, 252, 254, 253, 253, 254, 256, 256, 256, 255, 254, 254]
    }]
  }, {
    "numChats": 1,
    "numUsers": 20,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 49,
    "times": [47, 48, 49, 49, 51, 50, 48, 49, 50],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [26.7, 25.3, 28, 27.9, 29, 23.8, 26.4, 25.7, 26.9, 21.9, 26.5, 25.3, 20.7, 23.9],
      "ram": [258, 255, 258, 259, 255, 255, 258, 260, 255, 256, 262, 257, 256, 260]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [22.1, 21.9, 27.7, 27.6, 23.8, 23.3, 23.2, 25.1, 23.8, 25.2, 25.3, 23, 23.9, 27.3, 23.1, 24.7, 26.1, 23.5],
      "ram": [257, 254, 256, 258, 257, 253, 257, 258, 254, 256, 255, 256, 254, 257, 256, 255, 255, 256]
    }]
  }, {
    "numChats": 1,
    "numUsers": 30,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 164,
    "times": [191, 144, 150, 186, 225, 141, 157, 190, 99],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [39.7, 41.1, 37.4, 28.8, 38.1, 29.7, 35.6, 36, 39.1, 37, 32.1, 36.7, 38.7, 29.5],
      "ram": [257, 256, 257, 255, 256, 256, 257, 256, 257, 254, 261, 257, 256, 255]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [24.7, 28.6, 30.7, 35.1, 30.3, 34.3, 26.6, 36.5, 31.2, 33.3, 34.8, 29.5, 35, 35.7, 24.9, 34.6, 37.5, 29.6],
      "ram": [254, 255, 254, 255, 255, 255, 254, 255, 255, 253, 260, 255, 255, 254, 254, 255, 255, 255]
    }]
  }, {
    "numChats": 1,
    "numUsers": 40,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 551,
    "times": [565, 546, 619, 518, 532, 642, 519, 487, 535],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [31.9, 39.3, 38.1, 36.6, 31, 37.5, 38.6, 36.7, 52.3, 40.9, 40, 54.8, 36, 40.7, 51.7, 55, 31.8, 44.5],
      "ram": [256, 256, 255, 257, 254, 255, 256, 256, 255, 254, 256, 254, 255, 254, 255, 255, 259, 256]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [38.9, 49.5, 42, 29, 34.2, 29.4, 44.9, 25.7, 37, 41.9, 30.6, 40.9, 38.8, 32.9, 47.5, 56.2, 46, 32, 53, 57.9, 42.7, 44.7, 50.3],
      "ram": [254, 253, 254, 256, 252, 254, 255, 254, 255, 252, 252, 252, 252, 255, 254, 254, 256, 256, 252, 254, 255, 257, 258]
    }]
  }, {
    "numChats": 1,
    "numUsers": 50,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 1132,
    "times": [1168, 1207, 1013, 1007, 1189, 1086, 1134, 1201, 1189],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [56.4, 70.7, 35.7, 76, 39.3, 75.4, 34.4, 43.3, 67.4, 26.8, 36.9, 71.4, 55.2, 23.8, 33.6, 76.7, 50.3, 31.2, 37.1, 63.8, 72.2, 48.2, 35.3, 40.4, 74.5],
      "ram": [260, 260, 262, 260, 260, 260, 262, 258, 259, 256, 257, 259, 261, 258, 259, 257, 258, 258, 260, 260, 260, 261, 264, 257, 260]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [60, 76, 38.7, 66.4, 53.7, 69.1, 27.8, 56.5, 70.3, 32.4, 56.5, 74.7, 47.8, 31.4, 54.8, 70.9, 35.5, 30.1, 52.5, 70.7, 63.6, 30.1, 27.3, 53, 62.5, 54.5, 30.9, 31.2, 58],
      "ram": [257, 256, 257, 256, 256, 256, 258, 256, 255, 254, 255, 255, 258, 254, 255, 253, 254, 253, 255, 260, 256, 257, 256, 255, 256, 254, 256, 255, 257]
    }]
  }, {
    "numChats": 2,
    "numUsers": 20,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 331,
    "times": [221, 436, 431, 341, 304, 322, 334, 286, 309],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [42.1, 37.4, 41.1, 31.2, 41.5, 32, 41.2, 31.8, 42.2, 43.1, 39.1, 42.4, 40.7, 34.7],
      "ram": [258, 263, 262, 259, 261, 262, 261, 262, 261, 261, 260, 261, 262, 261]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [33.7, 32.9, 32.7, 39, 34.4, 38.4, 30.3, 36.5, 27.7, 40.7, 41.9, 32.3, 39.9, 39.9, 34.9, 35, 33.8, 29.8],
      "ram": [253, 258, 256, 255, 259, 258, 259, 258, 256, 257, 256, 256, 258, 259, 256, 259, 257, 256]
    }]
  }, {
    "numChats": 2,
    "numUsers": 25,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 739,
    "times": [691, 669, 805, 774, 724, 676, 805, 838, 675],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [37.8, 32.2, 34.3, 50.3, 29.5, 48.8, 37.3, 50.2, 29.8, 29.8, 47.2, 30, 37.8, 53.5, 32.4, 29.4],
      "ram": [262, 260, 262, 259, 262, 259, 260, 257, 260, 260, 259, 259, 258, 257, 259, 260]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [30.8, 41.9, 33.3, 49.8, 32.5, 47.3, 30.7, 47.3, 42.1, 37.5, 46.2, 45.3, 30.2, 48.8, 45.2, 33.1, 40.6, 45.2, 32.4, 45.1],
      "ram": [257, 255, 256, 255, 256, 255, 256, 253, 256, 256, 253, 255, 252, 253, 254, 254, 256, 255, 254, 253]
    }]
  }, {
    "numChats": 2,
    "numUsers": 30,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 1420,
    "times": [1271, 1275, 1440, 1489, 1502, 1475, 1524, 1506, 1306],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [54, 56.9, 47.2, 39.9, 44.5, 37, 61.3, 29.5, 29.5, 58.3, 32.1, 31, 66.9, 57.7, 31.7, 39.7, 68.2, 48.3, 36.3, 45.5],
      "ram": [259, 257, 259, 259, 259, 259, 262, 264, 263, 261, 262, 261, 262, 261, 263, 264, 262, 262, 264, 263]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [51.9, 58.1, 50.2, 38.6, 45.6, 40.7, 58.5, 36.6, 28.9, 56.5, 39.3, 28.6, 63.5, 57.9, 30.2, 38.5, 60.9, 49.8, 34.7, 40.9, 65.9, 58.3, 47, 42.3],
      "ram": [255, 253, 254, 254, 252, 252, 251, 258, 261, 253, 253, 259, 254, 254, 256, 256, 254, 253, 257, 256, 257, 261, 255, 256]
    }]
  }, {
    "numChats": 4,
    "numUsers": 10,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 227,
    "times": [237, 218, 243, 229, 217, 230, 222, 231, 216],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [26.8, 30.9, 28.6, 30.1, 28.4, 32.1, 32.7, 23.6, 28.8, 36.7, 38.9, 37.5],
      "ram": [262, 265, 265, 262, 263, 269, 266, 266, 267, 262, 264, 265]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [20.5, 29.8, 29, 26.3, 28.9, 30.7, 30.5, 29.6, 29.8, 34.4, 31.4, 31.8, 33.4, 30.4, 26.9, 24.6, 27.6, 24.8],
      "ram": [254, 257, 257, 258, 254, 262, 258, 258, 259, 259, 257, 254, 258, 259, 262, 257, 260, 258]
    }]
  }, {
    "numChats": 4,
    "numUsers": 12,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 425,
    "times": [460, 486, 372, 503, 335, 412, 418, 422, 420],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [34.9, 31.8, 36.8, 35.5, 35.8, 32.8, 35.9, 34.6, 34.9, 32.2, 36.8, 37.1, 27.2],
      "ram": [266, 263, 263, 268, 262, 268, 265, 264, 267, 264, 264, 266, 263]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [27.8, 27.3, 29.5, 36.5, 26.2, 35.1, 28.7, 35.7, 29.7, 35.3, 36.2, 27.7, 31, 31.9, 28.8, 32.3, 33.7, 28.4],
      "ram": [258, 256, 254, 258, 254, 255, 257, 255, 258, 256, 255, 259, 255, 258, 262, 256, 255, 256]
    }]
  }, {
    "numChats": 4,
    "numUsers": 15,
    "app": "Akka",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 1080,
    "times": [1164, 1163, 1099, 1390, 1031, 946, 1080, 1002, 850],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [40.5, 38.8, 38.3, 41.3, 40.4, 41.1, 44, 44.6, 37.2, 41.5, 36.2, 34.2, 38.4, 28.3],
      "ram": [266, 265, 265, 266, 263, 262, 264, 263, 268, 264, 262, 265, 262, 263]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [32.7, 29.6, 31.1, 45, 30.8, 43.3, 30, 41.3, 30.6, 32.6, 42.1, 33.4, 25.8, 40.7, 29, 27.9, 43, 30.7, 32.7],
      "ram": [256, 255, 255, 256, 255, 255, 255, 255, 256, 256, 255, 256, 256, 255, 256, 254, 255, 255, 257]
    }]
  },

  // VERTX

  {
    "numChats": 1,
    "numUsers": 10,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 45,
    "times": [50, 46, 44, 45, 46, 45, 44, 44, 43],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [29.8, 27.5, 25.9, 13.5, 15.2, 11.9, 11.9, 18.2, 19, 15.5, 17.7, 16, 17.6, 17.6, 15.8, 14.9, 16.2, 14.9],
      "ram": [169, 175, 177, 178, 178, 181, 181, 180, 182, 181, 182, 183, 184, 188, 183, 182, 185, 186]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [22.2, 10.5, 12.2, 14.6, 16.7, 13.8, 15.9, 16.4, 18.6, 14.8, 16.4, 16.4],
      "ram": [172, 175, 175, 176, 176, 179, 178, 177, 179, 179, 180, 181]
    }]
  }, {
    "numChats": 1,
    "numUsers": 20,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 46,
    "times": [48, 47, 47, 47, 46, 47, 47, 45, 47],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [24.7, 24.1, 26.6, 24.4, 24.5, 22.8, 20, 17.1, 19.2, 19.7, 17.6, 18.2, 20.3, 20.1, 20.5, 18.6, 18.8, 19.1],
      "ram": [185, 184, 183, 185, 184, 186, 186, 187, 184, 184, 186, 184, 184, 185, 184, 184, 185, 185]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [24.5, 19.5, 21.9, 25.6, 25.3, 21.2, 21.2, 17.9, 20.1, 19.6, 20.3, 20.3, 18],
      "ram": [183, 182, 183, 182, 182, 183, 183, 187, 180, 180, 184, 183, 181]
    }]
  }, {
    "numChats": 1,
    "numUsers": 30,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 52,
    "times": [61, 57, 50, 49, 50, 54, 52, 49, 49],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [23.6, 21.8, 24.7, 27.3, 24.1, 22.6, 23.1, 23.5, 26.8, 28.1, 29.8, 26, 24.7, 25.8, 23.7, 24.4, 22.3, 27.3],
      "ram": [186, 185, 181, 185, 186, 185, 184, 191, 184, 184, 185, 184, 184, 186, 186, 186, 186, 186]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [30.6, 22.7, 27.2, 25.6, 26.7, 26.2, 25.8, 34.2, 34, 25.2, 25.8, 26.1],
      "ram": [185, 187, 182, 191, 188, 188, 186, 193, 185, 191, 186, 185]
    }]
  }, {
    "numChats": 1,
    "numUsers": 40,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 103,
    "times": [118, 139, 145, 159, 95, 62, 80, 69, 61],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [26.4, 26.4, 24, 26.8, 23.5, 26.9, 20.5, 27.3, 21.1, 27.2, 28.9, 28.4, 28.2, 27.6, 23.8, 25.7, 27.6, 25.2],
      "ram": [187, 192, 196, 197, 195, 195, 195, 198, 196, 197, 198, 196, 196, 196, 195, 196, 197, 197]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [33.6, 33.6, 37.1, 24.9, 31.1, 20, 25.3, 24.8, 29.3, 23.4, 22.9, 25.5, 23.2],
      "ram": [221, 216, 217, 219, 218, 217, 218, 219, 217, 219, 216, 217, 217]
    }]
  }, {
    "numChats": 1,
    "numUsers": 50,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 380,
    "times": [384, 395, 325, 373, 418, 356, 408, 402, 364],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [38.9, 28, 27.3, 26.2, 38.9, 32.6, 34.7, 32.9, 23.2, 38.7, 33.6, 31.8, 42.4, 37.6, 26.9, 23.8, 37, 29.5, 22.7, 36.2],
      "ram": [196, 222, 220, 225, 224, 239, 237, 234, 239, 234, 234, 235, 236, 238, 238, 239, 240, 238, 237, 237]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [22.5, 20.9, 26.5, 40.5, 26.6, 24.3, 35, 25.2, 21.1, 39.7, 22.9, 41.4, 43.4, 28.1, 29.3, 39.2],
      "ram": [239, 241, 237, 239, 237, 246, 239, 242, 242, 237, 237, 237, 244, 240, 246, 242]
    }]
  }, {
    "numChats": 2,
    "numUsers": 20,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 136,
    "times": [465, 94, 95, 94, 92, 97, 92, 96, 99],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [22.3, 25.7, 17.2, 21.7, 18.3, 19, 20.1, 21.3, 20.6, 19, 21.1, 19.7, 19.5, 20.6, 20.1, 21.1, 23.3, 21],
      "ram": [239, 236, 240, 238, 238, 240, 240, 240, 240, 238, 239, 240, 240, 241, 240, 240, 241, 240]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [21.1, 19.3, 18.9, 19.9, 19, 20.4, 21.7, 22.2, 23.9, 21.4, 24.4, 24],
      "ram": [244, 241, 243, 240, 241, 243, 243, 243, 243, 241, 242, 249]
    }]
  }, {
    "numChats": 2,
    "numUsers": 25,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 116,
    "times": [108, 109, 105, 102, 120, 199, 106, 104, 98],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [24.4, 22, 21.9, 22.9, 21.4, 22.3, 20.5, 22.7, 22.9, 27.4, 26.2, 22.9, 23.8, 23.4, 22, 22.3, 22.9, 23.2],
      "ram": [240, 240, 240, 241, 239, 242, 242, 241, 239, 240, 241, 239, 240, 241, 242, 240, 241, 240]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [25.5, 26.6, 25, 27.4, 27.1, 27.7, 29.3, 23.6, 23.7, 22.7, 23.6, 23.8],
      "ram": [243, 243, 243, 247, 243, 251, 245, 247, 243, 244, 245, 249]
    }]
  }, {
    "numChats": 2,
    "numUsers": 30,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 204,
    "times": [330, 251, 371, 121, 150, 178, 178, 127, 132],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [23.8, 22.4, 23.8, 39.3, 27.9, 27.1, 27, 24.7, 23.5, 26.7, 25.9, 23.2, 27.3, 27.6, 23.4, 23.2, 25.2, 23.4],
      "ram": [240, 241, 239, 240, 239, 244, 239, 238, 239, 239, 239, 239, 239, 240, 238, 239, 239, 241]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [31.9, 29, 27.1, 24.9, 29.4, 26.2, 31.6, 23.2, 27.5, 27.5, 22.1, 26.9, 26.4],
      "ram": [244, 248, 242, 243, 242, 243, 242, 241, 242, 227, 228, 228, 228]
    }]
  }, {
    "numChats": 4,
    "numUsers": 10,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 175,
    "times": [175, 169, 186, 175, 180, 178, 175, 170, 172],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [18, 16.6, 16.8, 20.8, 18.9, 18.3, 16.7, 17.3, 16.2, 15.9, 16.3, 15.4, 16.5, 19.1, 17, 16.3, 17.8, 16.9],
      "ram": [240, 240, 243, 241, 241, 241, 239, 242, 243, 240, 242, 242, 240, 242, 240, 240, 240, 241]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [19.6, 22.3, 23.1, 21.3, 19, 17.9, 18.5, 17.8, 18.1, 17.9, 20, 20.1, 16],
      "ram": [229, 229, 229, 230, 231, 230, 234, 231, 231, 229, 236, 234, 229]
    }]
  }, {
    "numChats": 4,
    "numUsers": 12,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 177,
    "times": [179, 176, 179, 173, 176, 177, 182, 176, 181],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [19.7, 19.8, 24, 17.7, 17.3, 17.5, 16.8, 18, 17.1, 15.4, 17.2, 15.7, 18.5, 20.2, 20.5, 22.6, 23.5, 21.2],
      "ram": [244, 240, 242, 246, 246, 240, 246, 240, 241, 240, 241, 248, 240, 241, 241, 240, 240, 241]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [24.7, 18.2, 20.9, 20.3, 20.7, 19.9, 20.4, 20.1, 20.7, 17.7, 20.6, 19.3, 18.4],
      "ram": [231, 230, 228, 230, 231, 230, 234, 230, 229, 229, 230, 235, 229]
    }]
  }, {
    "numChats": 4,
    "numUsers": 15,
    "app": "Vertx",
    "globalDefinition": null,
    "specificDefinition": null,
    "avgTime": 185,
    "times": [181, 180, 181, 189, 188, 187, 183, 192, 185],
    "nodesMetrics": [{
      "id": "ubuntu@ec2-34-253-221-208.eu-west-1.compute.amazonaws.com",
      "cpuUse": [20.6, 18.3, 19.6, 19.4, 20.5, 19.2, 19.5, 18.3, 19.9, 20.8, 19.8, 21.5, 20.4, 20.9, 21.1, 22.1, 22.9, 22.7],
      "ram": [240, 240, 241, 247, 240, 241, 244, 247, 242, 239, 242, 240, 239, 240, 240, 242, 240, 242]
    }, {
      "id": "ubuntu@ec2-176-34-156-230.eu-west-1.compute.amazonaws.com",
      "cpuUse": [23.1, 23.3, 23.5, 22.5, 22.3, 22, 23.3, 22.3, 24.3, 20.1, 20.7, 23.3, 19.8],
      "ram": [229, 229, 230, 236, 229, 230, 229, 231, 231, 228, 237, 229, 229]
    }]
  },

  // RabbitMQ

  { "numChats": 1, "numUsers": 10, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 48, "times": [48, 48, 50, 49, 48, 48, 47, 49, 46], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [32.1, 30.9, 24.9, 25.2, 25.1, 21.9, 24.2, 27.5, 27.6, 24.4, 24.5, 24.5], "ram": [280, 282, 283, 284, 287, 289, 289, 289, 289, 291, 291, 289] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [34.1, 28.6, 27.7, 31.8, 28.4, 23.8, 24, 23.6, 24.2, 25.8, 25.3, 26.3, 25.4, 25.1, 26.1, 20.6, 22.3, 22.5], "ram": [259, 265, 266, 267, 273, 271, 271, 271, 270, 273, 273, 272, 284, 283, 284, 293, 284, 285] }] }, { "numChats": 1, "numUsers": 20, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 426, "times": [506, 373, 463, 419, 439, 454, 364, 416, 403], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [38.7, 40.8, 30.1, 44, 32.1, 51, 33.4, 43.4, 30.4, 32.1, 51.2, 40.1, 41.7, 45.8, 27.2, 34.4], "ram": [329, 316, 312, 304, 312, 309, 317, 311, 317, 319, 311, 319, 324, 315, 314, 323] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [34.9, 32, 39.5, 54, 35.7, 51.7, 32.1, 38.3, 36.9, 34.1, 53.7, 39.8, 35.5, 51.7, 48.5, 35.1, 51.5, 38.9, 38.5], "ram": [283, 286, 288, 294, 287, 293, 294, 312, 299, 298, 297, 300, 298, 294, 296, 296, 296, 299, 293] }] }, { "numChats": 1, "numUsers": 30, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 1875, "times": [1801, 1788, 1765, 1811, 1851, 1981, 1908, 1989, 1983], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [55.5, 59.5, 39.5, 60.7, 43.7, 59.5, 40.7, 35.4, 60.9, 30.1, 35.7, 59.5, 74.3, 53, 28.3, 57.8, 77, 60.4, 38.1, 39.5, 57.7, 60.1, 74.7, 38.6, 43.8, 65.9, 65.8, 79.1], "ram": [326, 319, 372, 319, 366, 327, 354, 371, 327, 356, 368, 324, 325, 333, 376, 315, 315, 333, 383, 384, 327, 325, 325, 361, 369, 324, 324, 327] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [75, 74.6, 41.3, 75, 48.2, 76.7, 30.7, 44.7, 74, 34.9, 43.7, 77, 65.8, 31.1, 38.7, 74.8, 52.5, 37.5, 40.2, 53.7, 73.4, 73.7, 48, 38, 65.6, 77.1, 77, 58.1, 40, 43.2, 49.3, 62.8, 77.5], "ram": [298, 304, 348, 303, 347, 312, 348, 337, 308, 347, 351, 304, 308, 350, 351, 302, 319, 350, 356, 341, 315, 315, 319, 361, 309, 308, 308, 336, 350, 353, 352, 314, 313] }] }, { "numChats": 1, "numUsers": 40, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 3959, "times": [3670, 3926, 4078, 3883, 3779, 4002, 4328, 4081, 3887], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [39.9, 32.6, 42.7, 36.6, 49.2, 52.6, 48.7, 42.1, 54.3, 56.7, 34.7, 40.3, 54.5, 80.4, 81.7, 22.8, 37, 44.8, 63.3, 78.5, 77.4, 35.7, 41.5, 47.3, 53, 72.7, 76.1, 74.1, 48.2, 42.5, 54, 54, 60.2, 75.1, 71.3, 71.4, 44, 39.7, 52, 74.1, 73.8, 77.5, 78.7, 72], "ram": [428, 419, 414, 407, 382, 363, 407, 405, 341, 343, 406, 405, 406, 343, 342, 412, 414, 410, 338, 340, 346, 405, 408, 407, 339, 341, 377, 381, 422, 419, 414, 420, 336, 340, 379, 380, 403, 402, 395, 339, 338, 339, 339, 396] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [82.4, 80.5, 72.6, 82.7, 76.3, 71.6, 83.7, 73.8, 69.2, 69, 83.4, 82.3, 75.6, 60.5, 59, 80.1, 78.1, 74, 72.8, 39.6, 35.2, 83.7, 78.1, 74.3, 73.3, 71.3, 34.3, 35.2, 83.8, 77.7, 70.1, 66.7, 66.4, 64.5, 39.6, 40.8, 84.4, 80.7, 72.7, 65.4, 65.1, 63.8, 61, 50.2, 82.1, 83.1, 77, 76.3], "ram": [304, 318, 340, 320, 354, 381, 332, 347, 386, 390, 333, 327, 361, 396, 411, 330, 333, 363, 388, 409, 406, 323, 334, 366, 383, 400, 407, 407, 327, 335, 363, 383, 384, 401, 409, 401, 325, 328, 367, 404, 403, 401, 424, 409, 332, 332, 358, 387] }] }, { "numChats": 1, "numUsers": 50, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 6680, "times": [6754, 6799, 6548, 6604, 6487, 6680, 6703, 6689, 6861], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [75.7, 79.5, 72.5, 64.5, 82.5, 70.7, 67.5, 56.3, 80.5, 75.7, 76.1, 36.3, 51.5, 87.7, 84.3, 70.1, 68.9, 69.4, 48.2, 58, 87, 84.7, 72.2, 72.3, 68, 59.2, 51.8, 60.2, 83.8, 82.3, 73.6, 74.2, 73.7, 60.5, 55, 53.5, 74.3, 87, 86.7, 85.4, 72.2, 72.4, 72.3, 71.1, 51.5, 48.7, 55.1, 57, 85.7, 83.3, 83.1, 72.5, 72, 72, 64, 46.6, 43.8, 50.7, 57.9, 64.8, 87.7, 80.7, 73.4, 73.7, 73.8, 73.1], "ram": [471, 397, 459, 348, 400, 465, 481, 391, 385, 467, 467, 494, 355, 365, 383, 470, 477, 476, 471, 428, 373, 387, 459, 469, 478, 474, 406, 359, 378, 413, 462, 487, 473, 482, 474, 430, 369, 392, 388, 405, 471, 479, 482, 484, 482, 466, 375, 373, 369, 383, 384, 467, 482, 483, 488, 492, 487, 484, 450, 403, 376, 400, 424, 475, 485, 479] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [85, 44.2, 84.1, 74.7, 37.5, 86, 71.9, 69.9, 23.2, 83, 83, 75.4, 70.4, 41.2, 41.3, 87.3, 87.4, 73.2, 72.1, 65.2, 20.7, 33.2, 79.1, 85.7, 78.3, 76.4, 70.5, 65.7, 30.3, 49.2, 83.4, 87, 86.7, 75.5, 75.3, 72.7, 61.6, 29.7, 34.4, 42.1, 87.4, 87.7, 87.3, 69.2, 71.8, 64.5, 59.3, 56.3, 15.8, 19.3, 25.3, 75.7, 84.6, 84.4, 74.8, 73, 72.8, 73.5, 72.4, 73.9, 38.4, 32.6, 44.3, 87, 88, 88.7, 80.4, 77.1, 76.8, 74.8, 74.3], "ram": [338, 454, 348, 465, 468, 339, 430, 474, 470, 342, 342, 426, 466, 466, 468, 346, 345, 413, 450, 450, 461, 452, 343, 344, 401, 415, 468, 466, 466, 463, 357, 357, 358, 420, 421, 460, 460, 462, 473, 467, 358, 353, 352, 418, 444, 471, 471, 465, 466, 465, 457, 354, 356, 343, 407, 412, 413, 464, 470, 464, 462, 464, 457, 352, 349, 356, 407, 418, 416, 460, 464] }] }, { "numChats": 2, "numUsers": 20, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 3259, "times": [3488, 3554, 3128, 3729, 2885, 3267, 3235, 2912, 3135], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [74.6, 59.2, 56.4, 63.5, 37, 62.4, 62.3, 62.6, 66.9, 36.7, 33.6, 64.5, 73.9, 75.5, 75.2, 75.7, 70.6, 41.4, 35.2, 62.8, 73], "ram": [352, 349, 356, 357, 377, 349, 348, 348, 359, 379, 379, 344, 350, 350, 350, 352, 358, 383, 389, 346, 352] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [68.9, 76.3, 61.1, 76.7, 46, 78.3, 62, 62, 77.7, 31.5, 42.6, 79.4, 65, 65.7, 64.9, 67.1, 51.5, 31.2, 48, 76.7, 74.8, 76.8, 76.2, 76.3, 76.7, 68.2, 52.7, 38, 53], "ram": [346, 332, 341, 340, 365, 332, 354, 341, 343, 372, 371, 332, 343, 335, 343, 343, 350, 386, 360, 330, 381, 345, 342, 343, 342, 350, 353, 394, 353] }] }, { "numChats": 2, "numUsers": 25, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 6401, "times": [6462, 6875, 6956, 5968, 6899, 5786, 6666, 6048, 5952], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [62.6, 18.7, 61.4, 36.1, 40.2, 52.6, 56.1, 66.7, 69.4, 30.8, 76.7, 75.8, 74.4, 73.8, 33.9, 47.3, 64.2, 41.4, 35.8, 36.5, 41.3, 61.3, 80.1, 34, 37.5, 46.7, 51.5, 60.9, 69.2, 76.8, 71.8, 35.7, 50.3, 63.8, 79.6, 81.3, 81.1, 77], "ram": [356, 398, 418, 417, 421, 421, 411, 365, 365, 399, 362, 359, 371, 395, 415, 404, 390, 399, 403, 411, 409, 361, 361, 399, 399, 402, 398, 363, 357, 361, 368, 400, 400, 348, 351, 354, 352, 372] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [81.1, 82.7, 43, 79.7, 72.3, 83.7, 83.7, 76.7, 72.8, 84.1, 44.4, 42.9, 33.8, 33.7, 78.8, 72.7, 48.2, 49.3, 57, 67.1, 81.1, 74.7, 44.8, 81.8, 82.7, 80.8, 80, 76.4, 73.4, 50, 30.3, 82.3, 79, 76.1, 75.1, 56.7, 51.8, 36.9, 39.4, 56.2, 80, 73.7], "ram": [341, 327, 415, 342, 368, 346, 342, 371, 394, 330, 400, 404, 433, 414, 340, 356, 403, 402, 400, 341, 339, 367, 382, 334, 331, 341, 351, 367, 372, 404, 417, 346, 343, 353, 371, 384, 397, 396, 393, 362, 336, 367] }] }, { "numChats": 2, "numUsers": 30, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 9376, "times": [9321, 9287, 9488, 9312, 9153, 9008, 8948, 9985, 9886], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [69.5, 74.7, 43.7, 69.7, 51, 41.3, 76.7, 70.3, 39.3, 38.5, 75.2, 61.8, 52.7, 30, 30.6, 73, 67, 53.2, 29, 35.1, 40.3, 76.3, 70, 63.5, 47.2, 33.1, 34.1, 40.8, 75.7, 51, 36.2, 36.2, 36, 36, 44.5, 49.3, 74.5, 69.7, 67.2, 37.5, 37.5, 42, 45.7, 45.3, 45.5, 82, 69.4], "ram": [449, 441, 449, 434, 450, 452, 423, 454, 452, 457, 413, 451, 443, 451, 452, 404, 445, 453, 447, 459, 453, 401, 464, 472, 467, 467, 462, 464, 395, 458, 468, 474, 479, 475, 476, 448, 397, 454, 458, 466, 469, 472, 457, 460, 460, 378, 442] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [82.8, 78.6, 81.3, 65.7, 83.7, 79.7, 68.8, 85.5, 86, 79.5, 53.3, 82, 82.7, 78.7, 76.7, 46.6, 83.4, 84.1, 84.1, 74.8, 71.7, 41.6, 85.7, 85, 84.4, 79.7, 73.8, 72, 43.2, 83.4, 81.4, 81.5, 79, 76.1, 73.3, 68.8, 32.2, 83.1, 84, 76.4, 75.8, 74.4, 74.5, 73.1, 72.7, 42.2, 74.3, 82.5, 83.7, 75.7, 75.7, 74.8, 69.8, 68.6, 68.9], "ram": [343, 356, 356, 351, 352, 352, 347, 350, 350, 358, 424, 354, 353, 357, 379, 434, 353, 354, 354, 381, 376, 429, 352, 353, 353, 367, 386, 402, 435, 347, 347, 347, 354, 377, 379, 390, 428, 344, 337, 397, 391, 395, 395, 396, 405, 439, 356, 363, 359, 388, 388, 419, 414, 414, 414] }] }, { "numChats": 4, "numUsers": 10, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 2070, "times": [1937, 2192, 2035, 2275, 1328, 2239, 1793, 1946, 2889], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [44, 37.5, 36.6, 55.2, 45.8, 36.3, 45.8, 55.1, 43.2, 46.8, 56.3, 52, 55.6, 54.4, 36.3, 41.1], "ram": [366, 374, 366, 365, 373, 366, 374, 374, 371, 371, 358, 363, 359, 356, 359, 368] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [58.3, 32.1, 45.7, 57, 49.3, 53, 50.8, 52.5, 48.5, 43.7, 53.3, 45.8, 50.5, 53.7, 48.2, 36.9, 59.5, 52.5, 46.8], "ram": [353, 354, 344, 351, 355, 346, 350, 359, 351, 344, 348, 343, 359, 348, 350, 346, 349, 346, 344] }] }, { "numChats": 4, "numUsers": 12, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 4493, "times": [4179, 5250, 5330, 4638, 3729, 4048, 4946, 4212, 4109], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [58.8, 60.4, 74.2, 66.9, 64.9, 55.7, 53.4, 54.7, 43.1, 69.2, 59.4, 50.2, 66.7, 66.6, 44.4, 43.2, 66.6, 67, 48.5, 37.5, 62.5], "ram": [355, 358, 359, 358, 354, 354, 353, 356, 355, 349, 349, 349, 354, 363, 359, 357, 350, 348, 349, 357, 349] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [66.3, 65.4, 67.6, 59.4, 64, 57, 67.1, 64, 56.3, 71.8, 65.3, 60.5, 64.7, 65.6, 48.3, 46.1, 70.5, 65, 55, 43.2, 66.7, 54.2, 44.8, 41.5], "ram": [347, 346, 349, 345, 345, 345, 346, 352, 346, 338, 340, 340, 348, 349, 349, 348, 343, 340, 342, 345, 345, 345, 345, 339] }] }, { "numChats": 4, "numUsers": 15, "app": "RabbitMQ", "isDistributed": true, "globalDefinition": null, "specificDefinition": null, "avgTime": 8218, "times": [7482, 7462, 7989, 8978, 7817, 7812, 9010, 8380, 9036], "nodesMetrics": [{ "id": "ubuntu@ec2-34-245-156-126.eu-west-1.compute.amazonaws.com", "cpuUse": [60, 68.6, 35.3, 62, 33, 53.7, 77.3, 47.1, 60.1, 78.1, 47.5, 39.1, 60.2, 69.2, 33.6, 38, 58.9, 76.5, 71.6, 46.2, 39.7, 51.5, 74.3, 75, 50, 41.6, 50, 62.2, 71.3, 77.7], "ram": [367, 354, 383, 354, 387, 377, 360, 385, 359, 359, 387, 399, 363, 364, 387, 388, 354, 357, 362, 394, 389, 379, 357, 357, 388, 398, 399, 369, 361, 361] }, { "id": "ubuntu@ec2-34-252-122-169.eu-west-1.compute.amazonaws.com", "cpuUse": [76.2, 77.8, 39.5, 77.5, 48, 79.5, 53.9, 32.9, 74.8, 54.8, 37.3, 55.1, 79.5, 70.9, 38.1, 65.1, 80.3, 73.1, 36.8, 35.9, 37.6, 76.7, 69, 44.5, 43, 49.7, 75.2, 76.8, 71, 65.8, 37.4, 47.7, 77.7], "ram": [339, 350, 384, 351, 388, 351, 363, 388, 349, 359, 388, 382, 351, 352, 384, 347, 349, 352, 377, 389, 389, 353, 353, 373, 389, 387, 352, 355, 357, 360, 390, 389, 351] }] }

];
