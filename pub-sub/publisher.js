const amqp = require('amqplib')


module.exports = function Publisher(options) {
    const { exchange, type = 'topic', url = 'amqp://localhost' } = options


    if (!exchange) throw new Error('exchange needed')

    let connection
    let channel

    async function start() {
        if (channel) throw new Error('queue already started')
        connection = await amqp.connect(url)
        channel = await connection.createChannel()
        await channel.assertExchange(exchange, type, { durable: true })
        console.log('[Publisher] Connection started')
    }

    function stop() {
        setTimeout(function () {
            if (!connection) throw new Error('not connected')
            connection.close()
            channel = undefined
            connection = undefined
            console.log('[Publisher] closed')
        }, 500);



    }

    async function publish(key, message) {
        console.log(`[Publisher] sent ${message}`);
        if (!channel) throw new Error('queue not started')
        const buffer = Buffer.from(message)
        channel.publish(exchange, key, buffer)

    }
    return { start, stop, publish }
}

