// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();
// this for express-handlebars 
app.engine('handlebars',expressHbs())
app.set('view engine', 'handlebars')
// pug 
// app.set('view engine', 'pug');

app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

const shopRouter = require('./routes/shop');
const adminData = require('./routes/admin');

// filtering all asdmin rount to add prefic admin 
app.use('/admin',adminData.adminRouter);
app.use(shopRouter);


// app.use('/',(req,res,next)=>{
//     console.log('Always work');
//     // this middleware always work 
//     next(); // allows the req to continu to the next middle ware 
// })


// errpr page 404
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000);