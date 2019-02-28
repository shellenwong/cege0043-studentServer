//express is the server that forms part of the nodejs programme
var express=require('express');
var path=require('path');
var app=express();

//add an http server to serve files to the Edge browser
//due to certificate issues it rejects the https files if they are not
//directly called in a typed URL
var http=require('http');
var httpServer=http.createServer(app);
httpServer.listen(4480);

app.get('/',function(req,res){
	res.send('testing testing from the HTTP server');
});


//add to other pieces of code to the server to log the requests on the console as they come in (this is useful for debugging) 

//adding functionality to log the requests
app.use(function(req,res,next){
	var filename=path.basename(req.url);
	var extension=path.extname(filename);
	console.log('The file'+filename+'was requested.');
	next();
});


//Add GET functionality
app.get('/test.html',function(req,res){
	//run some server-side code
	console.log('test.html requested');
	//node that__dirname gives the path to the studentServer.js file
	res.sendFile(__dirname+'/test.html')
});


