"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cobu = require("cobu-eventbus");
//var cobu = require('cobu-eventbus');
var eventBus = new cobu.EventBus();
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());
exports.Event = Event;
var MyEventBus2 = /** @class */ (function () {
    function MyEventBus2() {
    }
    MyEventBus2.prototype.before = function (eventType, eventHandler) {
        throw new Error("Method not implemented.");
    };
    MyEventBus2.prototype.trigger = function (event) {
        eventBus.post(event);
    };
    MyEventBus2.prototype.handle = function (eventType, eventHandler) {
        eventBus.on(eventType).register(eventHandler);
    };
    MyEventBus2.prototype.after = function (eventType, triggerHandler) {
        throw new Error("Method not implemented.");
    };
    MyEventBus2.prototype.onError = function (eventType, errorHandler) {
        throw new Error("Method not implemented.");
    };
    return MyEventBus2;
}());
exports.EventBus = new MyEventBus2();
//# sourceMappingURL=MyEventBus.js.map