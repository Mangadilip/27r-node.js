const express = require("express");
const app = express()

app.get("/one",(req,res)=>{
    res.send('Hello, Express!');
})



app.listen(3123,()=>{
    console.log("server is running")
})