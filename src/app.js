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

// return the week
app.get('/api/week', (req, res, next) => {
    res.json(week)
})

// return the day of week by parameter
app.get('/api/week/:num', (req, res, next) => {
    let num = req.params.num;
    if (num < 1 || num > 7){
        res.json({erro: "invalid param", solution: "try to use a parameter between 1 and 7"})
    }else{
        res.json(week.find((item) => item.num == num))
    }
})

// return the day of week by parameter
app.get('/api/week/:num/:country', (req, res, next) => {
    let num = req.params.num;
    let country = req.params.country;
    let data = []
    let i = 1
    week.map((item)=>data.push({
        num: i++,
        country: country,
        day: item[country]
    }))
    
    if (num < 1 || num > 7){
        res.json({erro: "invalid param", solution: "try to use a parameter between 1 and 7"})
    }else{
        res.json(data.find((item) => item.num == num))
    }
})

app.listen(port, (req, res, next) => {
    console.clear();
    console.log(`Server run in the port ${port}`);
});