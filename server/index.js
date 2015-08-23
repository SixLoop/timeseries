"use strict";
/**
 * @fileoverview server using express and seneca
 * @author @litzenberger (ron litzenberger) 
 *
 */


// Patch required
require("node-jsx").install({ extension: ".jsx" });

var path = require('path');
var config = require('./config');
var express = require('express');
var PORT = process.env.PORT || 3000;
// ----------------------------------------------------------------------------
// Seneca, include plugins
// ----------------------------------------------------------------------------
var seneca = require( 'seneca' )()
 		.use( '../plugin/pad',config )
 		.use( '../plugin/ds' ,config )
 		.use( '../plugin/api',config )

// ----------------------------------------------------------------------------
// Setup, Static Routes
// ----------------------------------------------------------------------------
var app = express()
      .use( require('body-parser').json() )
      .use("/app/js-dist/*.map", function (req, res) {
  			res.send(404, "404");}) // Prevent sourcemap serving.
      .use("/app/js-dist", express.static("app/js-dist"))
      .use(express.static(path.join(__dirname, '../public')))
      .use( seneca.export( 'web' ) )
      .listen(PORT)

