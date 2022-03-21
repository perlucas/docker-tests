const Memcached = require('memcached');

console.log("Hello world from Node!");

const memcached = new Memcached('host.docker.internal:11211');

setTimeout(() => {

    memcached.get('python_message', (err, data) => {

        console.log("Data from Python is:");

        console.info(data);

    });


}, 5000);
