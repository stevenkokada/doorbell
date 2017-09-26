var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var player = require('play-sound')(opts = {})




var app = express();
app.use(bodyParser.json());




var server = app.listen(process.env.PORT || 8080, function(){
	console.log("Bell now running on port: ", server.address().port)
})



var dash_button = require('node-dash-button');
var dash = dash_button('78:e1:03:45:8a:07', null, null, 'all');
var http = require('http');

var options = {
    host: '62b15df8.ngrok.io',
    path: '/bell'
};


dash.on('detected', function() {
    console.log('Button pushed!');
    var req = http.get(options, function(res) {
        console.log('sending get');
        console.log('RES: ' + res);
    });
    req.on('error', function(e) {
        console.log('error');
    });
});

function handleError(res, reason, message, code){
	console.log("ERROR: " + reason);
	res.status(code || 500).json({"error": message});
}


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get("/", function(req,res){
	res.status(403).json({"error": "Not authorized"})
});


app.get("/bell", function(req,res){
	
	console.log("got get");
	player.play('bell.mp3', function(err){
		if (err) throw err
	})

	res.send("ok");
});














