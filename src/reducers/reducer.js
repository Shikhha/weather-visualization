import { combineReducers } from "redux";

const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [action.payload.data, ...state];
    default:
      return state;
  }
};

export default combineReducers({
  weather: fetchReducer
});
