# Docker MongoDB Setup Test

## Brief description
Basic Docker Compose set up project for practising Dockerfile & Docker Compose usage. This basic set up contains:
- A MongoDB container holding a simple mongo server. This executes an init.js script that creates a "players" collection and feeds it with some data.
- A NodeJS container holding a basic script that connects to MongoDB and prints each player.

## Quick start
1. Run `docker compose up --build` from the CLI.
2. After finishing, you can stop all containers by doing CTRL+C (Windows) from the CLI.
3. You can try your own configuration values by modifying the .env file.