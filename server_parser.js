var express=require("express");
var app=express();

var bodyparser =sequire("body-parser");


app.use(bodyparser.urlencoded((extended:true));

app.use(function(req,resp,next)
{
	console.log(req.method+"-------"+req.url);
	next();
	
});
app.get("/",function()req,resp{
	resp.sendFile("form.html",(root:_dirname))
});

app.post("/calc",function(req,resp){
	var a1 = req.body.num1;
	var a2 = req.body.num2;
	
	var ans = parseInt(a1) + ParseInt(a2);
	console.log(ans);]
	resp.send("<h1>"+ans+"</h1>");
	resp.send("<h1>"+req.body.num1+"--------"+req.body.num2+"</h1>");
});

app.listen(2000);