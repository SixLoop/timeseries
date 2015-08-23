"use strict"
/**
 * @fileoverview database store boilerplate code for MongoDB
 * @author @litzenberger (ron litzenberger) 
 *
 */
 // author @litzenberger
// 
var _ = require('underscore');
var async = require('async');
var ObjectID = require('mongodb').ObjectID;


var MongoStore = function (db) {
  if (!(this instanceof MongoStore))
	return new MongoStore(db);
	this.collection={};
	this.db=db;
};

MongoStore.prototype.use= function(collection,cb){
  var self=this;
  self.collection=collection;
  cb();
};

MongoStore.prototype.update = function (q,set,cb){

	var self=this;
	var query = q;
		console.log(JSON.stringify(q));
	console.log(JSON.stringify(set));
	self.db.collection(self.colelction).update(query,{$set:set},function(err,r){
		console.log(JSON.stringify(r));
			cb(null,r);
		});

}

MongoStore.prototype.get = function (q,cb){
	var self=this;
	//var query = JSON.parse(q);
	console.log("store get "+JSON.stringify(q));
	var query={_id:ObjectID(q.id)};
	self.db.collection(self.collection).findOne(query,function(err,data){
				if(err){return cb(err)}
				if(data ===null){return cb(new Error("no data"))};
				console.log("------data "+JSON.stringify(data));
				return cb(null,data);
		})
}

module.exports= MongoStore;