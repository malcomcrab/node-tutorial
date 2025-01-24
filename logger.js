const EventEmitter  = require('events');
const uuid = require('uuid');

//Returns unique id.
//console.log(uuid.v4())

class Logger extends EventEmitter {
    //Call Event
    log(msg){
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger