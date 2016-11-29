// Imports the express Node module.
var express = require('express'); // Creates an Express server.
var app = express();
//var bodyParser = require('body-parser');

// You run the server from `server`, so `../client/build` is `server/../client/build'
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
