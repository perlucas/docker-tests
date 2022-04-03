const https = require('http');

const URL = `http://${process.env.PHP_IP4}:8000/server.php`;

// const URL = `http://host.docker.internal:8000/server.php`;

// const URL = `http://192.168.1.50:8000/server.php`;

// const URL = `http://192.168.1.50:8000/server.php`;

let requestsCount = 0;


const fetchData = () => {

    return new Promise((resolve, reject) => {
        https.get(URL, resp => {
            let data = '';
    
            resp.on('data', chunk => {
                data += chunk;
            });
    
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
    
        }).on("error", (err) => {
            reject(err);
        });
    });   

};

const timer = setInterval(async () => {

    const data = await fetchData();

    requestsCount++;

    console.log("Received response:");
    console.info(data);

    if (requestsCount > 20) {
        clearInterval(timer);

        console.log("Finished requesting data to server!");
    }

}, 2000);