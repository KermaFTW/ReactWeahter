var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>About everything you want to know!</p>
            <p>
                Here are some of the tools:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - this was
                    JavaScript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Used open
                     weather map to searhc weahter data
                </li>
            </ul>
        </div>

    )
};
module.exports = About;