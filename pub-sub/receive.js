const Subscriber  = require('./subscriber')

const receive = Subscriber({ exchange: 'test', queueName: 'test', key:'test'})

receive.start()
