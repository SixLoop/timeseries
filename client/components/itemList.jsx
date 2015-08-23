"use strict"
/**
 * @fileoverview Item component
 * @author @litzenberger (ron litzenberger) 
 *
 */


var React = require("react");
var Item = require("./item");



var ItemList = React.createClass({

onInputChange : function(item,cell,key){
  var tmpData={}
  item.value=cell;
  this.setState(item);// render the new value
  this.trigger=true;

},
handleBlur : function(item,cell){
  if(this.trigger){
this.props.onCommentSubmit(JSON.stringify({id: item.id, value: parseInt(cell)}));
this.trigger=false;
}

},
 handleClick: function(i) {
    //alert('You clicked: '+this.props.data[i].id +':'+this.props.data[i].value);
  },
  render: function() {
        var itemNodes = this.props.data.map(function (item,i) {
             var boundClick = this.handleClick.bind(this, i);
             var inputChange = this.onInputChange.bind(this,item);
              var blurChange = this.handleBlur.bind(this,item);
      return (
        <Item  onClick={boundClick} key={i} onChange={inputChange} onBlur={blurChange} author={item.id} >
         {item.value}
      </Item>
      );
    }.bind(this));
    return (
      <div className="itemList">
       {itemNodes}
      </div>
    );
  }
});

module.exports = ItemList