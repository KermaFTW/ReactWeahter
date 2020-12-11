var axios = require('axios');

const WEATHER_APP_ID = 'bbf630bf8c90a27bbaa7a4563d5755a8';
const WEATHER_UNITS = 'metric';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + WEATHER_APP_ID + '&units=' + WEATHER_UNITS;


module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.response.data.message);
        });
    }
}


