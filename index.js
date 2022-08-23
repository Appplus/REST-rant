const express = require('express');
const app = express();

require('dotenv').config()
app.get('/', (req, res) => {
    res.send('<h1>OrdenaYa!</h1>')
});

app.get('*', (req, res) => {
    res.status(404) .send ('<h1>404 Page</h1>')
});

app.listen(process.env.PORT, () => {
    console.log(`listening on Port: ${process.env.PORT}`)
});


