"use strict";
/*  PROMISE
    https://scotch.io/tutorials/understanding-javascript-promises-pt-i-background-basics#promises
  http://exploringjs.com/es6/ch_promises.html#sec_introduction-promises

    A promise is like receipt, it's an object that stands in for a value that is not ready yet, but will be ready later—in other words, a future value
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var developer_1 = require("../_core/developer");
var axios = require("axios");
var x = 123;
var methods = {
    validation1: function (arg) {
        console.log("Validating [" + arg + "] ..OK");
        return arg;
    },
    handler: function (arg) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Handling [" + arg + "]");
                    return [4 /*yield*/, developer_1.sleep(2000)];
                case 1:
                    _a.sent();
                    console.log("Done");
                    return [2 /*return*/];
            }
        });
    }); },
    completion: function (arg) { return console.log("Completed [" + arg + "]"); },
    quickPro: function () {
        return new Promise(function (resolve) {
            console.log("Im Promiscuis");
            resolve();
        });
    },
    longFnc: function () {
        console.log("Long Start");
        return developer_1.sleep(5000);
    },
    longPro: function () {
        return new Promise(function (resolve) {
            methods.longFnc();
            resolve();
        });
    },
    httpcallFnc: function () {
        var result = "";
        console.log("HTTP Request Start");
        axios.default
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(function (rst) {
            console.log("Got JSON [" + rst.toString().slice(0, 8) + "...]");
            return rst;
        });
        console.log("HTTP Request Done");
    },
    httpcallPro: function () {
        return new Promise(function (resolve) {
            (function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, methods.httpcallFnc()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); })();
            console.log("Got Result?");
            resolve();
        });
    }
};
function testCase1() {
    var promise1 = new Promise(function (resolve, reject) {
        console.log("Starting Promise");
        resolve();
        reject();
        console.log("Ending Promise");
    });
    var pro2 = promise1.then(function () { return console.log("Runing Then"); }, function () { return console.log("Runing Rejected"); });
    console.log("Taking Break");
    var pro3 = pro2.then(function () { return console.log("Runing Then 2"); }, function () { return console.log("Runing Rejected 2"); });
    console.log("Taking Break 2");
    pro3.then(function () { return console.log("Runing Then 3"); }, function () { return console.log("Runing Rejected 3"); });
}
var testCase12 = function () {
    //var pro = Promise.resolve('Yeah');
    var pro = new Promise(function (resolve) {
        console.log("Start");
        resolve();
    });
    return;
    pro
        .then(methods.validation1)
        .then(function () { return methods.longPro; })
        .then(function () {
        methods.quickPro;
    })
        .then(methods.handler)
        .then(methods.completion);
    methods.quickPro;
};
var testCase3 = function () {
    methods
        .longPro()
        .then(function () { return methods.httpcallPro(); })
        .then(function () { return methods.quickPro(); });
};
testCase3();
//# sourceMappingURL=PromiseTests.js.map