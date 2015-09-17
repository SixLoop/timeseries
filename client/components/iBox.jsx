"use strict"
/**
 * @fileoverview Parent component for wrapping app
 * @author @litzenberger (ron litzenberger) 
 *
 */


// Router
var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

// Child Components
var Title = require("./title");
var ItemList = require("./itemList");
var ItemForm = require("./itemForm");
var Recalculate = require("./recalculate");


// Component
var iBox = React.createClass({
    getInitialState: function() {
    return {data: [],meta:''};
  },
    loadCommentsFromServer: function() {
    var apiDefault='api/getPad/get?id=';//user litzenberger
    $.ajax({
      url: apiDefault+this.props.params._id,//this.props.url,
      dataType: 'json',
      success: function(data) {
        console.log("load " +JSON.stringify(data));
        this.setState({data: data.response.data});
        this.setState({meta: data.response});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
   
    handleCommentSubmit: function(item) {
      console.log(JSON.stringify(this.state.data));
    var items = this.state.data;
    var itemObj=JSON.parse(item);
     var newItems ={}
     var index=-1;
     for(var i = 0, len = items.length; i < len; i++) {
        if (items[i].key.toLowerCase() === itemObj.id.toLowerCase()) {
          index = i;
          break;
        }
    }

    if(index>-1){
      items[index].value=itemObj.value
      newItems=items;
    }
    else{
      newItems = items.concat([item]);
    }
    this.setState({data: newItems});
        $.ajax({
      url: this.props.url,
      contentType: 'application/json', 
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify(newItems),
      success: function(data) {
        this.setState({data: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
    componentDidMount: function() {
    this.loadCommentsFromServer();
   // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (

      <div className="iBox">
        <Title meta={this.state.meta} />
        <ItemList data={this.state.data} onCommentSubmit={this.handleCommentSubmit}/>
        <Recalculate data={this.state.data} />
        <ItemForm onCommentSubmit={this.handleCommentSubmit} />
        <RouteHandler {...this.props} />

      </div>

    );
  }
});

module.exports = iBox






