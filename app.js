
const express = require('express')

const app = express();

const bodyparse = require('body-parser')




let port = 4566


app.use(bodyparse.urlencoded({extended:false}))

app.use('/',(req,res,next)=>{
    console.log('its always runs')
    next()

})
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"> <input type="text"/ name="title"> <button>Add-product</button></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)

    res.redirect('/')
})

app.use('/' , (req,res)=>{
    
    res.send('its a root')
})
app.listen(port,()=>{
    console.log('localhost: '+port)
})