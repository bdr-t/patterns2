const amqp = require('amqplib')

module.exports = Subscriber = options => {
    const { exchange, queueName, key, type = 'topic', url = 'amqp://localhost' } = options

    if (!exchange) throw new Error('need exchange')
    if (!queueName) throw new Error('queue missing')


    let connection
    let channel
    let queue

    async function start() {
        if (channel) throw new Error('queue already started')
        connection = await amqp.connect(url)

        channel = await connection.createChannel()
        channel.assertExchange(exchange, type, { durable: true })
        const result = await channel.assertQueue(queueName, { exclusive: false })
        queue = result.queue
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.bindQueue(queue, exchange, key)
        channel.prefetch(1)
        channel.consume(queue, function (msg) {
            if (msg.content) {
                console.log(" [x] %s", msg.content.toString());
            }
        }, {
            noAck: true
        });
    }

    return {start}

}
