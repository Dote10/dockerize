DROP DATABASE IF EXISTS multi;

CREATE DATABASE multi;
USE multi;

CREATE TABLE list (
    id INTEGER AUTO_INCREMENT,
    item TEXT,
    PRIMARY KEY (id)
)