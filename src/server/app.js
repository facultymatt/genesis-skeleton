
/**
 * Module dependencies.
 */

var express   = require('express');
var path      = require('path');
var errors    = require('./lib/errors');
var api       = require('./lib/api');
var app       = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('change this value to something unique'));
app.use(express.cookieSession());
app.use(api);
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.compress());
app.use(app.router);
app.use(errors);

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}
