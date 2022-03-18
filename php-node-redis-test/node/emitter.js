
const redis = require('redis');

const createClient = redis.createClient;

const TOTAL_RUNNING_SECONDS = 20;

const publisher = createClient({
    url: 'redis://default:test@redis:6379'
});

// await publisher.connect();

const publishRedisMessage = async message => {
    await publisher.publish('my-testing-channel', message);
};

const emitEvent = () => {
    const now = new Date();

    const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    publishRedisMessage(`Time is ${timestamp}`);
};

// const INTERVAL_HANDLE = setInterval(emitEvent, 1000);

// const stopEmitter = () => {
//     clearInterval(INTERVAL_HANDLE);
// };

// setTimeout(stopEmitter, TOTAL_RUNNING_SECONDS * 1000);


(async () => {

    await publisher.connect();

    const INTERVAL_HANDLE = setInterval(emitEvent, 1000);

    setTimeout(async () => {
        clearInterval(INTERVAL_HANDLE);
        await publisher.disconnect();
    }, TOTAL_RUNNING_SECONDS * 1000);

})();