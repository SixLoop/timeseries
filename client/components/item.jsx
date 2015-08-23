"use strict"
/**
 * @fileoverview Item component
 * @author @litzenberger (ron litzenberger) 
 *
 */

var React = require("react");

var Item = React.createClass({
  onInputChange : function(e){
  this.props.onChange(e.target.value,this.props.author,function(data)
    {
      console.log(JSON.strngify(data));
    });

},
  onBlur : function(){
    this.props.onBlur(this.refs.changevalue.getDOMNode().value);

},

  render: function() {
    return (
      <div onClick={this.props.onClick} className="item">
        <div className="itemAuthor">
          {this.props.author}
        </div>
        <form>
        <input value={this.props.children} onChange={this.onInputChange} onBlur={this.onBlur}  ref="changevalue"/>
        </form>
      </div>
    );
  }
});

module.exports = Item