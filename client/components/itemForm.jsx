"use strict"
/**
 * @fileoverview ItemForm component
 * @author @litzenberger (ron litzenberger) 
 *
 */

var React = require("react");

var ItemForm = React.createClass({
    handleSubmit: function(e) {
    e.preventDefault();
    var id = this.refs.id.getDOMNode().value.trim();
    var value = parseInt(this.refs.value.getDOMNode().value);
    if (!id || !value) {
      return;
    }
    this.props.onCommentSubmit(JSON.stringify({id: id, value: value}));
    this.refs.id.getDOMNode().value = '';
    this.refs.value.getDOMNode().value = 0;
    return;
  },
  render: function() {
    return (
       <form className="itemForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="id........" ref="id" />
        <input type="number"  placeholder="value......" ref="value" />
        <input type="submit" value="Add" />
      </form>
    );
  }
});

module.exports = ItemForm