import React, { Component } from "react";
import { connect } from "react-redux";
import MakeChart from "../components/chart/Chart";
import Map from "../components/maps/GoogleMap";

class Weather_list extends Component {
  tempData = cityList => {
    return cityList.map(item => {
      return item.main.temp;
    });
  };
  PressureData = cityList => {
    return cityList.map(item => {
      return item.main.pressure;
    });
  };
  HumidityData = cityList => {
    return cityList.map(item => {
      return item.main.humidity;
    });
  };
  renderWeather = cityData => {
    const temps = this.tempData(cityData.list);
    const pressure = this.PressureData(cityData.list);
    const humidity = this.HumidityData(cityData.list);
    return (
      <tr key={cityData.city.name}>
        <td>
          <Map zoom={12} />
        </td>
        <td>
          <MakeChart data={temps} color="orange" units="K" />
        </td>
        <td>
          <MakeChart data={pressure} color="orange" units="hPa" />
        </td>
        <td>
          <MakeChart data={humidity} color="orange" units="%" />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
