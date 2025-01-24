
// const person = require('./person.js');

// console.log(person)


const Logger = require('./logger')

const logger =  new Logger()

logger.on('message', data => console.log(`Called Listener:`, data))


logger.log('Hiya')
logger.log('Hello')
logger.log('Yo')