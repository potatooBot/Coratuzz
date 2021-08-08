const express = require('express');
const app =express();
const port =process.env.PORT ||5500;
app.get('/',(req, res) =>{ 
    res.send("Workin");
})
app.listen(port,(req, res) =>{ console.log("listening")});