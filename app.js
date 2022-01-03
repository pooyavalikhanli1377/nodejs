

//const express = require('express');
//const app = express();
const app=require('http');
const port = 3000;
const host="127.0.0.1";
const dt=require('./po.js');

//app.get('/', (req,res)=>res.send ('hi my computer '))
//app.listen(port,()=>console.log (`http://localhost:${port}`));

const server = app.createServer(function(req,res){
res.statusCode=200;
res.setHeader('content-Type','text/html');
res.end("the time "+dt.mydatatime());

});
server.listen(port, host,()=>{
 console.log(`http:\\${host}:${port}/`)

});


ggglkkgkgjgjjgjgjgj

