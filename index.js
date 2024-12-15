require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
const pfServer = express()
require('./config/connection')
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads', express.static('./uploads'))
const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, ()=>{
    console.log(`Project fair server is started at port ${PORT} and waiting for client request!!!` );
    
})

// http://localhost:3000/ -get
pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style='color:red'>Project fair server is started at port ${PORT} and waiting for client request!!!</h1>`)
})