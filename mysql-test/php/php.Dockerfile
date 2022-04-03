FROM php:7.4-cli

ARG PHP_WORKING_DIR

WORKDIR $PHP_WORKING_DIR

COPY . .

# INSTALL PDO_MYSQL EXTENSION
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pdo_mysql

RUN chmod +x wait.sh start.sh

# START THIS CONTAINER ONLY IF DB SERVICE IS AVAILABLE
CMD ["./wait.sh" , "db:3306" , "--strict" , "--timeout=60" , "--" , "./start.sh"]