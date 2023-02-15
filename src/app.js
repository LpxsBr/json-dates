const express = require('express');
const cors = require('cors');

const week = require('./week.json');

const app = express();

var port = process.env.PORT || 9001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
    res.json({ for_use: "host/api/week" });
});

app.get('/api/week', (req, res, next) => {
    res.json(week)
})

app.listen(port, (req, res, next) => {
    console.clear();
    console.log(`Server run in the port ${port}`);
});