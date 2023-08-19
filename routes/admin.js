// core module
const path = require('path');

// third party module
const express = require('express');

// our self created module
const rootDir = require('../utils/path');

const product =[];

adminRouter = express.Router();

// admin/add-product =>GET
adminRouter.get('/add-product',(req,res,next)=>{
    // const form =`<html><body>
    // <form action ="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit"> send</button></form>
    // </body><html>`;

    // removed __dirname,'..', to rootDir
    res.sendFile(path.join( rootDir,'views','add-product.html'));
    
})
// admin/add-product =>POST
adminRouter.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    product.push({title:req?.body?.title});
    // res.send(`<h1>Hello form express !</h1>`);
    res.redirect('/')
})
module.exports.adminRouter = adminRouter;
module.exports.product = product