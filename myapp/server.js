const express = require('express');
const app = express();
const db = require('./db');
app.use(express.json());

app.get('/', (req, res) => {

    res.send('Hello World!');

});

// Example route to get data from MySQL

app.get('/users', (req, res) => {

db.query('SELECT \ FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
});

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

console.log(`Server running on port ${PORT}`);

});