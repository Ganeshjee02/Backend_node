const fs = require('fs');
 
 const requestHendler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    res.setHeader('Contant-type','text/html')
    const form =`<html><body>
    <form action ="/message" method="POST"><input type="text" name="message" /><button type="submit"> send</button></form>
    </body><html>`;
    if(url === '/'){
            res.write(form);
            return res.end();
    }
    if(url === '/message' && method === "POST" ){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        req.on('error',(er)=>{
            console.log(er);
        })
       return req.on('end',()=>{
            // Buffer is code module in node and it is responsable to handle flow Data and chanke data
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody.split('=')[1]);
           //  writeFileSync it is blocking nad writeFile not blocking
            fs.writeFileSync('message.txt',parseBody.split('=')[1]);
            // good way non blocking code 
            fs.writeFile('message.txt',parseBody.split('=')[1],error=>{
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end();
            })
            
        })
    }
    res.write(form);
    return res.end();
    // this line of code responsable to stop a server 
    // process.exit()
}

// module.exports = requestHendler;
// module.exports={
//     hendler:requestHendler,
//     someText :'test data'
// }

// module.exports.hendler = requestHendler;
// module.exports.someText = "text";

exports.hendler = requestHendler;
exports.somText = "text"