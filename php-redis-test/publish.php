<?php

require_once './connection.php';

sleep(2);

$publisher = makeConnection();

$DEFAULT_CHANNEL = getenv('DEFAULT_CHANNEL');

$NUMBER_OF_MESSAGES = getenv('MESSAGES_AMOUNT');

for ($i = 0; $i < $NUMBER_OF_MESSAGES; $i++) {
    $message = "This is the message no. $i";

    $publisher->publish($DEFAULT_CHANNEL, $message);

    sleep(2);
}

echo "Stopped emitting messages from publisher, you can stop these containers now!" . PHP_EOL;