var React = require('react');
var Forecast = require('../components/Forecast');
var getForcast = require('../helpers/api').getForcast;

var ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecastData: {}
    }
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  },
  makeRequest: function (city) {
    getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      }.bind(this));
  },
  render: function () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    )
  }
});

module.exports = ForecastContainer;
