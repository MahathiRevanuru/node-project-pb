const express = require('express');
const app = express();

const data0 = require("./Routes/bollywoodR")


app.use('/bollywood', data0)

app.listen(process.env.PORT||8000 ,()=>{
    console.log("server running");
})