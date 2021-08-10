const express = require('express');
const app =express();
require('./db/conn');
const studentsModel =require('./models/models');
app.use(express.json());
const port =process.env.PORT ||5500;
app.get('/',(req, res) =>{ 
    res.send("Workin");
})
app.listen(port,(req, res) =>{ console.log("listening")});