const Memcached = require('memcached');

console.log("Starting remote clock in NodeJS!");

const TOTAL_RUNNING_SECONDS = 30;

const getPublisher = async () => { return new Memcached(`${process.env.MEMCACHED_HOST}:${process.env.MEMCACHED_PORT}`); };

const handleError = err => {
    if (err) {
        console.error(err);
    }
};

const updateRemoteClock = publisher => {
    const now = new Date();

    const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    publisher.get('remote-clock', (err, data) => {

        (typeof data === 'undefined')
            ? publisher.set('remote-clock', `Time is ${timestamp}`, 5, handleError)
            : publisher.replace('remote-clock', `Time is ${timestamp}`, 5, handleError);
        
    });

};

(async () => {

    const publisher = await getPublisher();

    const INTERVAL_HANDLE = setInterval(() => updateRemoteClock(publisher), 1000);

    setTimeout(async () => {
        clearInterval(INTERVAL_HANDLE);
        publisher.end();
        console.log("Finished emitting time for clock.");
    }, TOTAL_RUNNING_SECONDS * 1000);

})();