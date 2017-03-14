var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

var Examples = () => {
  return (
    <div>
      <h1 className="tect-center">Examples</h1>
      <p>Here are feww example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Bintulu">Bintulu, SW</Link>
        </li>
        <li>
          <Link to="/?location=Kuching">Kuching, SW</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
