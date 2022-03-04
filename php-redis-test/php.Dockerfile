FROM php:7.4-cli

ARG PHP_WORKING_DIR

COPY . $PHP_WORKING_DIR

WORKDIR $PHP_WORKING_DIR

# install and enable redis for php

RUN printf '\n' | pecl install redis-5.3.7

RUN docker-php-ext-enable redis

CMD ["sh", "./start.sh"]