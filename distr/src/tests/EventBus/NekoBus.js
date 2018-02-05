"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nbus = require("nekobasu");
var neko = nbus.builtin.event();
neko.immediate.sub(function (n) { return console.log("immediate " + n); });
neko.last.sub(function (n) { return console.log("last " + n); });
neko.list.sub(function (n) { return console.log("list " + n); });
neko.send(1); // prints "immediate 1"
neko.send(2); // prints "immediate 2"
neko.send(3); // prints "immediate 3"
neko.flush(); // prints "last 3" and "list [ 1, 2, 3 ]", in undefined order
neko.send(1); // prints "immediate 1"
neko.send(1); // prints "immediate 1"
//neko.flush(); // prints "last 3" and "list [ 1, 2, 3 ]", in undefined order 
//# sourceMappingURL=NekoBus.js.map