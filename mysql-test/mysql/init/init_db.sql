
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
   (null, 'Eliam Benischek', 10, '1995-05-10'),
   (null, 'Hadleigh Blondin', 10, '1995-05-10'),
   (null, 'Kolten Plantenberg', 10, '1995-05-10'),
   (null, 'Lavon Priode', 10, '1995-05-10'),
   (null, 'Paxton Vanacore', 10, '1995-05-10'),
   (null, 'Fynn Baiotto', 10, '1995-05-10'),
   (null, 'Killian Macewen', 10, '1995-05-10'),
   (null, 'Leandro Stagman', 10, '1995-05-10'),
   (null, 'Moana Tice', 10, '1995-05-10'),
   (null, 'Mohammed Wolfrum', 10, '1995-05-10'),
   (null, 'Allyson Badlam', 10, '1995-05-10'),
   (null, 'Arjun Hoene', 10, '1995-05-10'),
   (null, 'Ava Mercurio', 10, '1995-05-10'),
   (null, 'Kentrell Norcott', 10, '1995-05-10'),
   (null, 'Killian Prioleau', 10, '1995-05-10');