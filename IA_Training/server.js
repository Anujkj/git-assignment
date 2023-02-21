var expressExtension = require('express-integrator-extension');
var functions = require('./functions');

var systemToken = 'f474aed4bee643c68bb57c5ca3701da4';
var options = {
  connectors: { '63ef108a4f2a2835de1ea96b': functions }, // for connectors
  systemToken: systemToken,
  port:5000
};

console.log("Starting Server"); 

expressExtension.createServer(options, function (err) {
    if(err){
        console.log("Failed to create server");
        throw err;
    }
    console.log("Server Started");
});