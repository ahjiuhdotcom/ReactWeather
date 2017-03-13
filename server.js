var express = require('express');

// Create our app
var app = express();

// specify the folder name that want to expose to server
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000');
})
