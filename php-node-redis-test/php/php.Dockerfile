FROM php:7.4-cli

ARG PHP_WORKING_DIR

COPY . $PHP_WORKING_DIR

WORKDIR $PHP_WORKING_DIR

CMD ["sh", "./start_listener.sh"]