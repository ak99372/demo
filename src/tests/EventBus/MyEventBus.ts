import * as cobu from 'cobu-eventbus'
import { exec } from 'child_process';
//var cobu = require('cobu-eventbus');
let eventBus = new cobu.EventBus();

/*  Requirements
    -> execute stages in sequence (Validate->Trigger->Complete, Error)
    -> execute stage methods in parallel (all validators/triggers at the same time)
    -> ability to add (decorate) stages and globally (on any error)
    -> single trigger (event->handler 1:1)
*/

// //handle the actual event
// eventBus.handleOn<AlertEvent>(new AlertEventHandler({},{}))

// //trigger call after succesful completion of event
// eventBus.onSucess<AlertEvent>(()=>{/* triger something from here */})

// //trigger call after failed completion of 
// eventBus.onError<AlertEvent>((err)=>{/* handle error here */})


export interface IEvent { }

export class Event implements IEvent { }

export interface IEventHandler<E extends IEvent> {
    handle(eventArgs: E);
}

export interface IEventValidator<E extends IEvent> {
    before(eventArgs: E);
}

// export interface IEventBus
// {
//     trigger<E extends IEvent>(event:E);
//     handle<E extends IEvent>(eventHandler:IEventHandler<E>);
//     onSuccess<E extends IEvent>(triggerHandler:()=>void);
//     onError<E extends IEvent>(errorHandler:()=>void);
// }

// class MyEventBus implements IEventBus
// {
//     trigger<E>(event: E) {
//         eventBus.post(event);
//     }
//     handle<E extends Event>(eventType:type, eventHandler: IEventHandler<E>) {
//         eventBus.on(E).register(eventHandler);
//     }
//     onSuccess<E>(triggerHandler: () => void) {
//         throw new Error("Method not implemented.");
//     }
//     onError<E>(errorHandler: () => void) {
//         throw new Error("Method not implemented.");
//     }
// }

export interface IEventBus2 {
    //Fire Event
    trigger<E extends IEvent>(event: E);

    //Handle Event 1:1
    handle<E extends Event>(eventType: typeof Event, eventHandler: IEventHandler<E>);

    //Before Execution (e.g. validation, preparation...)
    before<E extends Event>(eventType: typeof Event, eventHandler: IEventHandler<E>);

    //After Execution 
    after<E>(eventType: typeof Event, triggerHandler: (event: E) => void);

    //If before or handle caused error
    onError<E>(eventType: typeof Event, errorHandler: () => void);
}

class MyEventBus2 implements IEventBus2 {
    before<E extends Event>(eventType: typeof Event, eventHandler: IEventHandler<E>) {
        throw new Error("Method not implemented.");
    }
    trigger<E>(event: E) {
        eventBus.post(event);
    }
    handle<E extends Event>(eventType: typeof Event, eventHandler: IEventHandler<E>) {
        eventBus.on(eventType).register(eventHandler);
    }
    after<E>(eventType: typeof Event, triggerHandler: (event: E) => void) {
        throw new Error("Method not implemented.");
    }
    onError<E>(eventType: typeof Event, errorHandler: () => void) {
        throw new Error("Method not implemented.");
    }
}

export const EventBus = new MyEventBus2();