var express = require('express');
var path    = require('path');
var app     = module.exports = express();

app.get('*', function(req, res) {
  res.redirect('/#' + req.url);
  //res.sendfile(path.join(__dirname, '../../../../dist/index.html'));
});

app.use(function(err, req, res, next) {
  res.redirect('/#' + req.url + (req.url.match(/\?/) ? '&' : '?') + 'err=500');
});