// Load Up the Dependencies
var express = require('express');
 //var chat = require('./widget.js');
//var express_formidable = require('express-formidable')
//var formidable = require('formidable');
//var bodyParser = require('body-parser');
//var morgan = require('morgan');
//var fs = require('fs');
//require('dotenv').config()

//Configuring the Express Middleware
app = express();

//Configure Log Path
//var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'})

//Configure Morgan's Logging Formats
//app.use(morgan('common', {stream: accessLogStream}))    //UNCOMMENT TO ENABLE FILE LOGGING
//app.use(morgan('common'));
app.use(express.static(__dirname));

//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 5000;

//Configure Express to Recieve JSON and extended URLencoded formats
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Set RESTful routes
app.get('/', function(req, res) {
  //chat.sendMessage();
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req,res){
  //console.log(req.body);
  //console.log(req.incomingMessage);

  res.send("hello");
})
// Start the server
app.listen(port);
console.log("Server has booted up successfully.");