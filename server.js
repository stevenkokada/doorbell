var express = require('express');





var ARTICLES_COLLECTION = "articles";


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



app.post("/api/bell", function(req, res){

	var name = req.body.name;

	// make sound

	var audio = new Audio("bell.mp3")
	audio.play()


});













