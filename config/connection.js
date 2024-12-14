const mongoose = require('mongoose')

const connection_string = process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log("MONGODB ATLAS CONNECTED SUCCESSFULLY WITH PFSERVER");
}).catch(err=>{
    console.log("Connection failed!");
    console.log(err);
    
    
})