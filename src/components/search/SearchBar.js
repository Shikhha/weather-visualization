import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../actions/index";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input
            placeholder="Get a five day forecast in your favourite cities"
            value={this.state.term}
            onChange={this.handleChange}
            className="form-control"
            type="text"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchWeather }
)(SearchBar);
