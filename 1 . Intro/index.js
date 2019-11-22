var express=require('express');
var app=express();
let port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!<h1>");
});
app.listen(port, () =>console.log("Listening on port - 3000"));