CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);
