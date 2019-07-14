import React from "react";
import "./App.css";
import "./components/search/SearchBar";
import SearchBar from "./components/search/SearchBar";
import WeatherList from "./container/Weather_list";

function App() {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
