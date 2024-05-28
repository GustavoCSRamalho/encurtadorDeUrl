CREATE USER 'my-app-user'@'%' IDENTIFIED BY 'my-app-password';
GRANT ALL ON *.* TO 'my-app-user'@'%';

update mysql.user set host='%' where user='root';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS encurtadordb;

USE encurtadordb;

CREATE TABLE IF NOT EXISTS urlencurtadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    shortedUrl VARCHAR(255) NOT NULL,
    created date not null DEFAULT (CURRENT_DATE)
);