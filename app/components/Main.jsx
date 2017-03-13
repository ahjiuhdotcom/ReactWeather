var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     // {this.props.children} is the place to put children route
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         { this.props.children }
//       </div>
//     );
//   }
// });

var Main = (props) => {
  // {props.children} is the place to put children route
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      { props.children }
    </div>
  );
}

module.exports = Main;
