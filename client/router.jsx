"use strict"
/**
 * @fileoverview React Router
 * @author @litzenberger (ron litzenberger) 
 *
 */
 
// React
var React = require("react");
var Router = require("react-router");
var iBox = require("./components/iBox");


// Request
var request = require("superagent");

// Set up Router object
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// Declare routes
var routes = (
  <Route handler={iBox} path="/:_id">
  </Route>
);module.exports = {

  run: function (el) {
           Router.run(routes, function (Handler, state) {
          // "Alternatively, you can pass the param data down..."
          // https://github.com/rackt/react-router/blob/master/docs/guides/
          // overview.md#dynamic-segments
          var params = state.params;
          React.render(<Handler params={params} />, el);
        });
  }
};

