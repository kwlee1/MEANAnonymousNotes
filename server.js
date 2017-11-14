// Dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      port = 3000;

// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'public/dist'));


require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(port, function(){
    console.log("Running on ", port);
});