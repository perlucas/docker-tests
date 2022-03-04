# Docker PHP & Redis Setup Test

## Brief description
Basic Docker Compose set up project for practising Dockerfile & Docker Compose usage. This basic set up contains:
- A PHP container holding a basic publisher & subscriber set up that use a Redis pub/sub feature to communicate with each other.
- A Redis container holding the Redis cache instance that allows communication between the publisher and subscriber.

## Quick start
1. Run `docker compose build` from the CLI, standing in the project folder.
2. Run `docker compose up --force-recreate` to run the containers and see the execution result.
3. After finishing, you can stop both containers by doing CTRL+C (Windows) from the CLI.
4. You can try your own configuration values by modifying the .env file.