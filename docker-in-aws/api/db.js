const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit:10,
    host:'app_db',
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:'multi'
});

exports.pool = pool;