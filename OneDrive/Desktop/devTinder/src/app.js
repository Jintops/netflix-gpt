const express = require('express');

const app = express();

app.use("/wel",(req,res)=>{
    res.send('hwlloo welcome')
});

app.use("/",(req,res)=>{
    res.send("home page")
})

app.listen(3000,()=>{
    console.log('successfull connected to port')
})