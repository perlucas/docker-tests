
/* create custom user for containers */

CREATE USER 'custom_user'@'%' IDENTIFIED BY 'custom_password';

GRANT ALL PRIVILEGES ON `test`. * TO 'custom_user'@'%';

FLUSH PRIVILEGES;

/* create testing table structure */

CREATE TABLE players (
   id INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   score INT NOT NULL,
   birthdate DATE,
   PRIMARY KEY ( id )
);

INSERT INTO players VALUES
    (null, 'Leonel Messi', 10, '1995-05-10'),
    (null, 'Jhon Doe', 30, '1995-02-20');
