import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

class Weather_list extends Component {
  tempData = cityList => {
    return cityList.map(item => {
      return item.main.temp;
    });
  };
  renderWeather = cityData => {
    const temps = this.tempData(cityData.list);
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
            <th onClick={this.callprops}>click</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.weather);
  return { weather: state.weather };
};

export default connect(mapStateToProps)(Weather_list);
