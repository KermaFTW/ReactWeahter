var React = require('react');
var { Link } = require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Get ready to develop try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Bijeljina">Bijeljina, Republika Srpska</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;