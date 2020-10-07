// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());



const data = require("./data");
const budget = {
    myBudget:[
    {
    title: 'Eat out',
    budget: 25
    },
    {
    title: 'Rent',
    budget: 375
    },
    {
    title: 'Grocery',
    budget: 110
    },
  ]
};



app.get('/budget', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log('Api served at http://localhost:${port}');
});