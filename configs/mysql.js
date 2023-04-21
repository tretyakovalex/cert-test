const mysql = require('mysql2');

require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: 'root',
    password: 'my-secret-pw',
    database: 'GSA_test'
});

module.exports = { pool };