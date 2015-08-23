"use strict"
/**
 * @fileoverview Title component
 * @author @litzenberger (ron litzenberger) 
 *
 */
var React = require("react");



var Title = React.createClass({
  render: function() {

        var title=this.props.meta.title;
    return (
      <div className="title">
       Time Series - {title}
       </div>
    );
  }
})
module.exports = Title
