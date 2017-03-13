var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=a1efd9df0c75d001a5410194240be6e5&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location); // to encode to url format properly for the browser e.g. ' ' -> '%20'
    console.log(encodedLocation);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function(res){
      // If this exist means something went wrong (there is error)
      
      if (res.data.cod && res.data.message) {
        console.log('Error 1');
        throw new Error(res,data,message);
      } else {
        return res.data;
      }
    }, function(res){
      console.log('Error 2');
      throw new Error(res.data.message);
    });
  }
}
