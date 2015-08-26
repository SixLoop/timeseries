"use strict"
/**
 * @fileoverview datapag plugin.
 * @author @litzenberger (ron litzenberger) 
 *
 */


module.exports = function( options) {

  var seneca = this;
  var config = options;

  var noop = function () {};
  var plugin = "pad"; 

  // init seneca plugins
  seneca.add({role : plugin,cmd : 'get'}, getInit);
 // seneca.add({role : plugin,cmd : 'update'}, update);
  // store in a collection 




  function getInit(args,cb){
    var seneca = this;
    console.log("getInit");
    var message={
      role:'ds',
      cmd : 'get',
      id  :args.padId

    }
      seneca.act(message, 
        function(err,result){
          if(err){return cb(err);}
          seneca.log.debug('fetch data done');
          cb(null,result);
      });
  }
  return {
    name:plugin
  }

}