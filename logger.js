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

//module.exports = Logger

//Runs in this file but this is how you would import.
const Logger = require('./logger')

const logger =  new Logger()

logger.on('message', data => console.log(`Called Listener:`, data))


logger.log('Hiya')
logger.log('Hello')
logger.log('Yo')