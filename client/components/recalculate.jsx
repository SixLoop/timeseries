 "use strict"
/**
 * @fileoverview calculate component
 * @author @litzenberger (ron litzenberger) 
 *
 */


var React = require("react");

var Recalculate = React.createClass({
  render: function() {

        var calc=0;
        this.props.data.forEach(function (obj) {
        calc=calc+obj.value;

    });
    return (
      <div className="recalculate">
        <div className="total">total

       </div>
              {calc}
      </div>
    );
  }
});

module.exports = Recalculate