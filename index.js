const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require('./db/connection');
const Feedbacks = require('./Models/Feedback');
app.post("/",async(req,res)=>{
    let feedback=new Feedbacks(req.body);
    let result = await feedback.save();
    res.send(result);
})

app.listen(4000,()=>{
    console.log("server is running ...");
})