<?php

$DB_HOST = getenv('MYSQL_HOST');
$DB_NAME = getenv('MYSQL_DATABASE');

$connection = new PDO(
    "mysql:dbname={$DB_NAME};host={$DB_HOST}",
    getenv('MYSQL_USER'),
    getenv('MYSQL_PASSWORD')
);


$query = $connection->query(
    "SELECT * FROM players"
);

$query->execute();

$result = $query->fetchAll(PDO::FETCH_ASSOC);

echo "Printing players from PHP" . PHP_EOL;

foreach ($result as $player) {
    printf(
        'Player %s, score %d, born on %s' . PHP_EOL,
        $player['name'],
        $player['score'],
        $player['birthdate']
    );
}