var express=require('express');
var app=express();
var port=3000;

app.get("/",(req,res)=>{
    let host="<h1>Hey there!<h1><br>\
    <hr><h2>Using Container ID - "+process.env.HOSTNAME+"</h2>";
    res.send(host);
});
app.listen(port,()=>console.log("Listening on port -",port));