const users = require('../models/userModel')
// register
exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    const  {username,email,password} = req.body
    console.log(username,email,password);
    try{
       const exisitingUser = await users.findOne({email})
       if(exisitingUser){
            res.status(406).json("User Already exist... Please Login!!!")
       }else{
        const newUser = new users({
            username,email,password,github:"",linkedin:"",profilePic:""
        })
        await newUser.save()
        res.status(200).json(newUser)
       }
    }catch(err){
        res.status(401).json(err)
    }
}
// login

// profile updation