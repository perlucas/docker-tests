# Docker MySQL Setup Test

## Brief description
Basic Docker Compose set up project for practising Dockerfile & Docker Compose usage. This basic set up contains:
- A MySQL container holding a simple MySQL server. This executes an init_db.sql script that creates a "players" table and feeds it with some data.
- A PHP container holding a basic script that connects to MySQL and prints each player.
- A Python container holding a basic script that connects to MySQL and prints each player.
- A PHPMyAdmin container holding the phpmyadmin setup through localhost:8080.

## Quick start
1. Run `docker compose up --build` from the CLI.
2. After finishing, you can stop all containers by doing CTRL+C (Windows) from the CLI.
3. You can try your own configuration values by modifying the .env file.