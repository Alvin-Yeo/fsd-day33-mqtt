const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://test.mosquitto.org:1883');

// wait for connection
client.on('connect', () => {
    console.info(`[INFO] Connected.`)

    // subscribe to a topic
    client.subscribe('topic37', (err, granted) => {
        // check if there are any error
        if(null != err) {
            console.error(`[ERROR] Subscription failed: ${err}`);
            process.exit(-1);
        }

        console.info(`[INFO] Granted: ${granted}`);

        // listen to incoming messages from the topic
        client.on('message', (topic, payload) => {
            const data = payload.toString();
            console.info(`[INFO] Topic: ${topic}, payload: ${data}`);
        });
    });
});