# Docker PHP, Node & Networking Setup Test

## Brief description
Basic Docker Compose set up project for practising Dockerfile & Docker Compose usage. This basic set up contains:
- A PHP container holding a basic php server that sends a JSON response.
- 3 NodeJS containers holding a basic HTTP client that pings the PHP server 20 times.

However, this project is intended to see advantages and uses of docker compose networking features. This setup isolates the PHP container along with one of the NodeJS containers, allowing them to communicate through a specific network. The remaining NodeJS containers shouldn't be able to connect with the PHP container as they're outside the defined network. For that:
- One NodeJS container is defined on a different subnet than the PHP's, avoiding it to communicate with those containers.
- The other one doesn't use any newtork other than the default provided by Docker, which also doesn't allow it to interact with the PHP container. 

## Quick start
1. Run `docker compose build` from the CLI, standing in the project folder.
2. Run `docker compose up` to run the containers and see the execution result.
3. After finishing, you can stop both allcontainers by doing CTRL+C (Windows) from the CLI.
4. You can try your own configuration values by modifying the .env file.

While containers are executing, you should see that "bad consumer" containers aren't able to listen to the PHP messages.