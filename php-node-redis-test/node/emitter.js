
const TIMEFRAME_SIZE_IN_SECONDS = 20;

const emitEvent = () => {
    const now = new Date();

    const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    console.log(`Event emitted at ${timestamp}`);
};

const INTERVAL_HANDLE = setInterval(emitEvent, 2000);

const stopEmitter = () => {
    clearInterval(INTERVAL_HANDLE);
};

setTimeout(stopEmitter, TIMEFRAME_SIZE_IN_SECONDS * 1000);