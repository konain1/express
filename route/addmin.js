
const express = require('express')
const path = require('path')

const router = express.Router()
let product = []


router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','add-product.html'))
})
router.post('/add-product',(req,res,next)=>{
    // console.log(req.body)
    product.push({title:req.body.title})

    res.redirect('/')
})


// module.exports = router;
exports.router =  router

exports.product = product
