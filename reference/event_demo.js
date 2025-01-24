
const EventEmitter = require('events')

//Create Emitter Class
class MyEmitter extends EventEmitter{}

//Init Object 
const myEmitter = new MyEmitter()

//Event Listener
myEmitter.on('event', () => console.log('Event Fired!'))

//Init Event (Triggers Event Listener)
myEmitter.emit('event')