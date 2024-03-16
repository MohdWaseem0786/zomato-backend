const express = require("express");
let mongoose=require("mongoose")
let restroRouter=require("./Router/restaurant")
let productRouter=require("./Router/product")
let userRouter=require("./Router/user")
let loginRouter=require("./Router/login")
let cors=require("cors")




mongoose.connect('mongodb://127.0.0.1:27017/zomato').then(()=>{
    console.log("db");
}).catch((err)=>{
    console.log(err);
})
let app=express()

app.use(cors())

app.use(express.json({extended:false}))

app.use('/api',restroRouter)
app.use('/api',productRouter)
app.use('/api',userRouter)
app.use('/api',loginRouter)



app.listen(7000,()=>{
    console.log("server started");
})