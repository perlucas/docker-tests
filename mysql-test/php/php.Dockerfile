FROM php:7.4-cli

ARG PHP_WORKING_DIR

WORKDIR $PHP_WORKING_DIR

COPY . .

# INSTALL PDO_MYSQL EXTENSION
RUN docker-php-ext-install pdo_mysql mysqli

RUN chmod +x wait.sh start.sh

# START THIS CONTAINER ONLY IF DB SERVICE IS AVAILABLE
CMD ["./wait.sh" , "db:3306" , "--strict" , "--timeout=60" , "--" , "./start.sh"]