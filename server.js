var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var player = require('play-sound')(opts = {})




var app = express();
app.use(bodyParser.json());




var server = app.listen(process.env.PORT || 8080, function(){
	console.log("Bell now running on port: ", server.address().port)
})




function handleError(res, reason, message, code){
	console.log("ERROR: " + reason);
	res.status(code || 500).json({"error": message});
}


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



app.get("/", function(req,res){
	res.status(403).json({"error": "Not authorized"})
});


app.get("/api/bell2", function(req,res){
	console.log("got get");
	player.play('bell.mp3', function(err){
		if (err) throw err
	})

	res.send("ok");
});

app.post("/api/bell", function(req, res){
	console.log("got post");
	var name = req.body.name;


	player.play('bell.mp3', function(err){
		if (err) throw err
	})

	res.send("ok");


});













