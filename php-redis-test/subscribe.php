<?php

ini_set('default_socket_timeout', -1);

require_once './connection.php';

echo "HELLO WORLD! STARTING REDIS TEST!!" . PHP_EOL;

$DEFAULT_CHANNEL = getenv('DEFAULT_CHANNEL');

$subscriber = makeConnection();

function handleMessage ($conn, $channel, $message) {
    echo "Subscriber has received message '$message' from channel '$channel'" . PHP_EOL;
}

$subscriber->subscribe([$DEFAULT_CHANNEL], 'handleMessage');
