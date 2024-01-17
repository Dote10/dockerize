const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit:10,
    host:process.env.MYSQL_HOST,
    user:'youchive',
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
});

exports.pool = pool;