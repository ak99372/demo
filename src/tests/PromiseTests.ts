/*  PROMISE
	https://scotch.io/tutorials/understanding-javascript-promises-pt-i-background-basics#promises
  http://exploringjs.com/es6/ch_promises.html#sec_introduction-promises 

    A promise is like receipt, it's an object that stands in for a value that is not ready yet, but will be ready later—in other words, a future value
*/

import { sleep } from "../_core/developer";
import * as axios from "axios";
import { debug } from "util";

var x = 123;

const methods = {
  validation1: arg => {
    console.log("Validating [" + arg + "] ..OK");
    return arg;
  },
  handler: async arg => {
    console.log("Handling [" + arg + "]");
    await sleep(2000);
    console.log("Done");
  },
  completion: arg => console.log("Completed [" + arg + "]"),
  quickPro: () =>
    new Promise(resolve => {
      console.log("Im Promiscuis");
      resolve();
    }),
  longFnc: () => {
    console.log("Long Start");
    return sleep(5000);
  },
  longPro: () =>
    new Promise(resolve => {
      methods.longFnc();
      resolve();
    }),
  httpcallFnc: () => {
    var result = "";
    console.log("HTTP Request Start");
    axios.default
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(rst => {
        console.log("Got JSON [" + rst.toString().slice(0, 8) + "...]");
        return rst;
      });

    console.log("HTTP Request Done");
  },
  httpcallPro: () => {
    return new Promise(resolve => {
      (async () => await methods.httpcallFnc())();
      console.log("Got Result?");
      resolve();
    });
  }
};

function testCase1() {
  const promise1 = new Promise(function(resolve, reject) {
    console.log("Starting Promise");
    resolve();
    reject();
    console.log("Ending Promise");
  });

  var pro2 = promise1.then(
    () => console.log("Runing Then"),
    () => console.log("Runing Rejected")
  );

  console.log("Taking Break");

  var pro3 = pro2.then(
    () => console.log("Runing Then 2"),
    () => console.log("Runing Rejected 2")
  );

  console.log("Taking Break 2");

  pro3.then(
    () => console.log("Runing Then 3"),
    () => console.log("Runing Rejected 3")
  );
}

const testCase12 = () => {
  //var pro = Promise.resolve('Yeah');
  var pro = new Promise(resolve => {
    console.log("Start");
    resolve();
  });

  return;
  pro
    .then(methods.validation1)
    .then(() => methods.longPro)
    .then(() => {
      methods.quickPro;
    })
    .then(methods.handler)
    .then(methods.completion);

  methods.quickPro;
};

const testCase3 = () => {
  methods
    .longPro()
    .then(() => methods.httpcallPro())
    .then(() => methods.quickPro());
};

testCase3();
