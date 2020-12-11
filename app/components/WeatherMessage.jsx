var React = require('react');

var WeatherMessage = ({ temp, location }) => {
    return (
        <div>
            <h3>Weather for {location} is {temp}</h3>
        </div>
    );
};

module.exports = WeatherMessage;