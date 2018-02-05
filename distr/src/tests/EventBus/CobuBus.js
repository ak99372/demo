"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cobu = require("cobu-eventbus");
//var cobu = require('cobu-eventbus');
var eventBus = new cobu.EventBus();
var AlertEvent = /** @class */ (function () {
    function AlertEvent(value) {
        this.type = "alertEvent";
        this.text = value;
    }
    return AlertEvent;
}());
var MessageEvent = /** @class */ (function () {
    function MessageEvent(value) {
        this.type = "messageEvent";
        this.textX = value;
    }
    return MessageEvent;
}());
var AlertEventHandler = /** @class */ (function () {
    function AlertEventHandler(service, component) {
        this._component = component;
        this._service = service;
    }
    AlertEventHandler.prototype.handle = function (eventArgs) {
        var _this = this;
        //1. Call server/Do Other Operation
        //2. Update component
        this._service.CallServer(eventArgs)
            .then(function (result) {
            _this._component.model.prop = result.prop;
        });
    };
    AlertEventHandler.prototype.error = function (err) {
        this._component.showError('Operation [X] Failed due to:' + err);
    };
    return AlertEventHandler;
}());
function handleAlertEvent(event) {
    console.log(event.text);
}
;
eventBus.on(AlertEvent).register(handleAlertEvent);
eventBus.on(AlertEvent).register(handleAlertEvent);
eventBus.on(MessageEvent).register(handleAlertEvent);
eventBus.post(new AlertEvent("Hello eventbus!"));
eventBus.post(new MessageEvent("This is my message"));
//# sourceMappingURL=CobuBus.js.map