const mysql = require("mysql");

const pool = mysql.createConnection({
    connectionLimit : 10,
    host: 'mysql',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'multi'
});

exports.pool = pool;