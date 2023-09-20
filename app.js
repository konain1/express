
const express = require('express')

const app = express();
const path = require('path')

const bodyparse = require('body-parser')

const adminRoute = require('./route/addmin')
const shopRoutes = require('./route/shop')

let port = 4566


app.use(bodyparse.urlencoded({extended:false}))


app.use('/admin',adminRoute.router)
app.use(shopRoutes)

console.log(adminRoute.product)
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname , 'views' , 'error.html'))
})

app.listen(port,()=>{
    console.log('localhost: '+port)
})