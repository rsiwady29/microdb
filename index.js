var express = require('express');
var gzippo 	= require('gzippo');
var morgan  = require('morgan');
var jsonql 	= require('./jsonql');
var fs 		= require('fs');

var app     = express();
var port    = process.env.PORT || 8080;

// API
app.get(/s+/, function(req, res) {
	var fileName = req._parsedUrl.pathname;
	var path =   __dirname + '/db' + fileName;
	var query = req.query.query;

	fs.readFile(path, function (err, data) {
	  if (err) {
	    return res.status(404).send('File:'+ fileName +' Not Found');
	  }
	  
	  var object = JSON.parse(data.toString());
	  results = jsonql(query, object);
		
	  res.end(JSON.stringify(results));
	});
});

app.listen(port);
console.log('Server running on port: ' + port);