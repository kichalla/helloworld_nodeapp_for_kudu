var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
// Here port is supplied by Kudu 
app.listen(process.env.PORT);