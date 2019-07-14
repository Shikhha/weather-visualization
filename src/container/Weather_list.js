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
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    const center = {
      lat: lat,
      lng: lon
    };
    return (
      <tr key={cityData.city.name}>
        <td>
          <Map zoom={12} center={center} />
        </td>
        <td>
          <MakeChart data={temps} color="orange" units="K" />
        </td>
        <td>
          <MakeChart data={pressure} color="green" units="hPa" />
        </td>
        <td>
          <MakeChart data={humidity} color="black" units="%" />
        </td>
      </tr>
    );
  };
  render() {
    return (
      <div className="custom-container">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.weather);
  return { weather: state.weather };
};

export default connect(mapStateToProps)(Weather_list);
