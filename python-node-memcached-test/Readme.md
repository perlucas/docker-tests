# Docker Python, Node & Memcached Setup Test

## Brief description
Basic Docker Compose set up project for practising Dockerfile & Docker Compose usage. This basic set up contains:
- A NodeJS container holding a basic JS script that publishes the current time into Memcache.
- A Python3 container holding a basic Python script that reads messages sent from NodeJS and outputs them into screen.
- A Memcache container acting as a shared storage mechanism.

## Quick start
1. Run `docker compose build` from the CLI, standing in the project folder.
2. Run `docker compose up --abort-on-container-exit` to run the containers and see the execution result.
3. You can try your own configuration values by modifying the .env file.