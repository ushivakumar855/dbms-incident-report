const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myappuser',
    password: '1234',
    database: 'myapp'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = connection;