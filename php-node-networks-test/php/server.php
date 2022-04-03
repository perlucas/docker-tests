<?php

define('ACCESS_FILENAME', 'access.txt');

$accessNumber = file_exists(ACCESS_FILENAME) ? (int) file_get_contents('access.txt') : 0;


$message = [
    'content' => 'Hello World from PHP!',
    'access_number' => $accessNumber
];

$accessNumber++;
file_put_contents(ACCESS_FILENAME, $accessNumber);

echo json_encode($message);