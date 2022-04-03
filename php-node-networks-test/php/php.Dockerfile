FROM php:7.4-cli

ARG PHP_WORKING_DIR
ARG PHP_HOST
ARG PHP_PORT

COPY . $PHP_WORKING_DIR

WORKDIR $PHP_WORKING_DIR

CMD php -S ${PHP_HOST}:${PHP_PORT}