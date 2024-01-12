DROP DATABASE IF EXISTS multi;

CREATE DATABASE multi;
USE multi;

CREATE TABLE list (
    id INT(11) AUTO_INCREMENT,
    item VARCHAR(300),
    PRIMARY KEY (id)
)