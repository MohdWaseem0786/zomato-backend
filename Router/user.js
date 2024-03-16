let express = require("express")
let router =express.Router()
let user = require("../models/user")
let bcrypt = require("bcrypt")
// const { model } = require("mongoose")

router.post('/signup', async (req,res)=>{
    // console.log(req.body,"rrr");
    let data=await user.findOne({email:req.body.email})
    if (data){
        return res.send('user already exist')
    }else{
        let newPassword = await bcrypt.hash(req.body.passWord,10)
        // console.log(newPassword);

        let userData = new user({
            name:req.body.name,
            email:req.body.email,
            passWord:newPassword
        })

        await userData.save();
        res.send({userData, msg: "created"})
    }
})


module.exports=router
