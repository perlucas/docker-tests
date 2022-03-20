<?php

ini_set('default_socket_timeout', -1);

function makeConnection () {
    $HOST = getenv('REDIS_HOST');
    $PORT = getenv('REDIS_PORT');
    $PASS = getenv('REDIS_PASS');

    $connection = new Redis();
    $connection->connect($HOST, $PORT);
    $connection->auth($PASS);
    $connection->setOption(Redis::OPT_READ_TIMEOUT, -1);

    if ($connection->ping()) {
        echo "Connection to Redis was successfully!" . PHP_EOL;
    }

    return $connection;
};

function handleMessage ($conn, $channel, $message) {
    echo "Looking for time in remote clock... $message" . PHP_EOL;
}

$subscriber = makeConnection();
$subscriber->subscribe(['my-testing-channel'], 'handleMessage');