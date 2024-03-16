const mongoose=require("mongoose")

const productSchema= mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

let Product=mongoose.model("Product",productSchema)
module.exports=Product