import React, { Component } from "react";
import { connect } from "react-redux";
import MakeChart from "../components/chart/Chart";

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
          <MakeChart data={temps} color="orange" />
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
