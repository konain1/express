
const express = require('express')

const app = express();

const bodyparse = require('body-parser')

const adminRoute = require('./route/addmin')


let port = 4566


app.use(bodyparse.urlencoded({extended:false}))


app.use(adminRoute)



app.use('/' , (req,res)=>{
    
    res.send('its a root')
})
app.listen(port,()=>{
    console.log('localhost: '+port)
})