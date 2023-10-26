const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log("hello world");
});

app.get('/', (req, res) => {
    res.send('API running');
});

app.get('/about', (req, res) => {
    res.send('ABOUT ME');
});

module.exports = app;