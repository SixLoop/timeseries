"use strict"
/**
 * @fileoverview api plugin
 * @author @litzenberger (ron litzenberger) 
 *
 */

module.exports = function api( options ) {

  var valid_ops = { get:'get'}

  this.add( 'role:api,path:getDefault', function( msg, respond ) {
    this.act( 'role:pad', {
      cmd:   valid_ops[msg.operation],
      padId : msg.id
    }, respond )
  })


  this.add( 'init:api', function( msg, respond ) {
    this.act('role:web',{use:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        getDefault: { GET:true, suffix:'/:operation' }
      }
    }}, respond )
  })

}