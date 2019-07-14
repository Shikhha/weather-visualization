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
      <div className="container my-3">
        <div className="border p-2">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-9 col-md-10">
                <input
                  placeholder="Get a five day forecast in your favourite cities....."
                  value={this.state.term}
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchWeather }
)(SearchBar);
