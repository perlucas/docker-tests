# Docker PHP & Redis Setup Test

## Brief description
Basic Docker Compose set up project for practising Dockerfile & Docker Compose usage. This basic set up contains:
- A PHP container holding a basic php server that sends a JSON response.
- A NodeJS container holding a basic HTTP client that pings the PHP server 20 times.

## Quick start
1. Run `docker compose build` from the CLI, standing in the project folder.
2. Run `docker compose up` to run the containers and see the execution result.
3. After finishing, you can stop both containers by doing CTRL+C (Windows) from the CLI.
4. You can try your own configuration values by modifying the .env file.