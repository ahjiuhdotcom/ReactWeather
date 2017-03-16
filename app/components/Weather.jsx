var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

  getInitialState: function() {
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    // alert('Searching ', location);

    var that = this;
    // set to 'undefined' just to clear up the data b4 new search
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });

    openWeatherMap.getTemp(location).then(function(data){

      that.setState({
        location: data.name,
        temp: data.main.temp,
        isLoading: false
      });

    }, function(errorMessage){

      that.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      });
    });
  },
  componentDidMount: function(){

    // When click the city name in the "Example",
    // It will redirect to '/' with some query string pass togather

    // 'this.props.location': is an object call 'location'
    // try to console.log 'this.props' for details
    // 'query.location' is query string in the url
    var location = this.props.location.query.location;
    // If there is query string pass thru url,
    // e.g when click the city name in the "Example"
    if (location && location.length > 0) {
      this.handleSearch(location);
      // to remove location query string after handleSearch
      window.location.hash = '#/';
    }
  },
  // this function will trigger if there is any update/changes in th props
  // parent component can always update a child's props
  // In this case, react-router automatic update the props in Weather.jsx when url change
  // so child component need to set listen to that change
  // for this case it, url was changed from Nav component
  componentWillReceiveProps: function(newProps){

    // newProps is refer to those newly change props
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      // to remove location query string after handleSearch
      window.location.hash = '#/';
    }
  },
  render: function() {

    // var location = this.state.location;
    // var temp = this.state.temp;
    var { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h1 className="text-center  page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
