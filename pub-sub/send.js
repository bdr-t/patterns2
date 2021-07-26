const Publisher = require('./publisher')

let publisher = Publisher({ exchange: 'test' })

publisher.start()
    .then(() => publisher.publish('test', 'Hello World!'))
    .then(() => publisher.publish('test', 'Bye wordl!'))
    .then(() => publisher.stop())
