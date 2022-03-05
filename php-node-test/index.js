const https = require('http');

let requestsCount = 0;


const fetchData = () => {

    console.log("Requesting data from PHP Server...");

    https.get('http://host.docker.internal:8000/test.php', resp => {
        let data = '';

        resp.on('data', chunk => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(`Received response: ${data}`);

            requestsCount++;
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

};

const timer = setInterval(() => {

    fetchData();

    if (requestsCount > 20) {
        clearInterval(timer);

        console.log("Finished requesting data to server!");
    }

}, 2000);