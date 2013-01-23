var express = require('express');
var path    = require('path');
var app     = module.exports = express();

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname, '../../../../dist/index.html'));
});