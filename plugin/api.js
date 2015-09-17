"use strict"
/**
 * @fileoverview api plugin
 * @author @litzenberger (ron litzenberger) 
 *
 */

module.exports = function api( options ) {

  var valid_ops = { get:'get'}

  this.add( 'role:api,path:getPad', function( msg, respond ) {
    this.act( 'role:pad', {
      cmd:   valid_ops[msg.user],
      padId : msg.id
    }, respond )
  })


  this.add( 'init:api', function( msg, respond ) {
    this.act('role:web',{use:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        getPad: { GET:true, suffix:'/:user',handler:'print' }
      }
    }}, respond )
  })

}