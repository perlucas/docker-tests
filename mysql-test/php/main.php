<?php


$connection = new PDO(
    'mysql:dbname=test;host=10.0.0.3',
    'custom_user',
    'custom_password'
);


$q = $connection->query(
    "SELECT * FROM players"
);

$q->execute();

$rr = $q->fetchAll();

var_dump($rr);