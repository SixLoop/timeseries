"use strict"
/**
 * @fileoverview react-router  ENTRY POINT
 * @author @litzenberger (ron litzenberger) 
 *
 */

// Router
var Router = require("./router");

// Fire up the router and attach to DOM
Router.run(document.getElementById("content"));