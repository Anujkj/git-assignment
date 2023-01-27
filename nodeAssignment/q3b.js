const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('eventName', (data) => {
    console.log(data);
});

emitter.emit('eventName', "hello world");