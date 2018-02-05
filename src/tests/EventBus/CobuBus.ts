import * as cobu from 'cobu-eventbus'
//var cobu = require('cobu-eventbus');
let eventBus = new cobu.EventBus();

/*
    PRO:    
        -> seems to work with Types well
    CONS:   
        -> cannot register single event error handler (only all)
        -> cannot register after trigger

*/

interface IEvent
{   }

interface IEventHandler<E>
{
    handle(eventArgs:E);
}

class AlertEvent implements IEvent {
    constructor(value) {
        this.text = value;
        
    }

    type = "alertEvent";
    text:string;
}

class MessageEvent implements IEvent {
    constructor(value) {
        this.textX = value;
        
    }

    type = "messageEvent";
    textX:string;
}

class AlertEventHandler implements IEventHandler<AlertEvent>
{
    readonly _component:any
    readonly _service:any
    constructor(service:any,component:any) {
        this._component = component;   
        this._service = service;
    }

    handle(eventArgs: AlertEvent) {
        //1. Call server/Do Other Operation
        //2. Update component
        this._service.CallServer(eventArgs)
        .then((result)=>
        {
            this._component.model.prop = result.prop;
        })
    }
    error(err: any) {
        this._component.showError('Operation [X] Failed due to:'+err);
    }
}

function handleAlertEvent(event:AlertEvent) {
    console.log(event.text);
};


eventBus.on(AlertEvent).register(handleAlertEvent);
eventBus.on(AlertEvent).register(handleAlertEvent);
eventBus.on(MessageEvent).register(handleAlertEvent);

eventBus.post(new AlertEvent("Hello eventbus!"));
eventBus.post(new MessageEvent("This is my message"));



