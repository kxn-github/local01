/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');


// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var passport = require('./service/passport');
var login = require('./router/login');
var request = require('./router/request');
var dataimport = require('./router/import');
var mail = require('./router/mail');
var utility = require('./router/utility');
var profile = require('./router/profile');
var exportRpt = require('./router/exportRpt');
var impRpt = require('./router/importRpt');

// create a new express server
var app = express();


// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({resave: true, saveUninitialized: false, secret: 'keyboard cat'}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



// var jwtService = require('./service/jwtService');
// app.use(function(req, res, next){
//     var url = req.originalUrl;
//     if (url === '/login') {
//       next();
//     } else {
//       var token = req.get('token');
//       if (token === undefined){
//         res.status(401).send({message : 'missing token in header'});
//         return;
//       } else {
//     	  jwtService.verify(token).then(function(data) {
//         		  next ();
//         	  }	,function()  {
// 				 res.status(401).send({message : 'wrong token'});
// 			} )
// 			}
//           }
// });


app.use('/login', login);
app.use('/request', request);
app.use('/mail', mail);
app.use('/import', dataimport);
app.use('/profile', profile);
app.use('/utility', utility);
//app.use('/employee', employee);
app.use('/export', exportRpt);
app.use('/imprpt', impRpt);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '127.0.0.1', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});





