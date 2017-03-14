var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//
//     var { temp, location } = this.props;
//
//     return (
//       <h2>It's {temp}degC in {location}</h2>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var { temp, location } = props;
//
//   return (
//     <h2>It's {temp} degC in {location}</h2>
//   );
// }

var WeatherMessage = ({temp, location}) => {
  // var { temp, location } = props;
  return (
    <h3 className="text-center">It's {temp} degC in {location}</h3>
  );
}

module.exports = WeatherMessage;
