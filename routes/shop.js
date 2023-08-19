// core module
const path = require('path');

// third part module
const express = require('express');

// our created folder 
const rootDir = require('../utils/path');

const adminData = require('../routes/admin')

shopRouter = express.Router();

shopRouter.get('/',(req,res,next)=>{
    // res.sendFile('../views/shop.htnl');
    // ../ to ..
    console.log(adminData.product);
    res.render('shop');
    // res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports =shopRouter;