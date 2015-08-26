"use strict"
/**
 * @fileoverview datastore plugin used to initalize connetion
 * @author @litzenberger (ron litzenberger) 
 *
 */


var _ = require('underscore');
var util = require('util');
var path = require('path');
var uuid = require('node-uuid');
var fs = require('fs');
var MongoStore = require('../lib/mongoStore');
var MongoProvider = require('../lib/mongoProvider');

module.exports = function( options) {

	var seneca = this;
	var config = options;

	var noop = function () {};
	var plugin = "ds"; //Data Store

	var storeClient;
	// init seneca plugins
	seneca.add('init:ds',init);
	seneca.add({role : plugin,cmd : 'get'}, get);
	//seneca.add({role : plugin,cmd : 'update'}, update);
	// store in a collection 

	// initialize
	function init (args,cb) {
		var seneca = this;
		MongoProvider.data(config.mongo_connection,config.mongo_options,function(err,db){
			if (err){cb(err)}
			storeClient = new MongoStore(db);
			console.log("connected to db");
			cb();
			});
	}

	function close (args,cb) {
		var seneca = this;
		MongoProvider.close();
		cb();
	}

    function get(args,cb){
		var seneca = this;
		//TODO use async.series
		console.log("get data --");
		// check if delta file exist
    		// mongodb
    	var query={id:args.id};
    	//query.id=args.id;
    	console.log(JSON.stringify(query));
    	storeClient.use('pad',function(){
		storeClient.get(query,function(err,results) {
				if(err){console.log("errr --->"+JSON.stringify(err));return cb(err)}
				console.log("data results "+JSON.stringify(results));
					return cb(null,results);

			});
		})
  		}

	return {
		name:plugin
	}

}