FROM php:7.4-cli

ARG PHP_WORKING_DIR

COPY . $PHP_WORKING_DIR

WORKDIR $PHP_WORKING_DIR

RUN printf '\n' | pecl install redis-5.3.7

RUN docker-php-ext-enable redis

CMD php listener.php