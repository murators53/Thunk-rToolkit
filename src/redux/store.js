import weatherReducer from "./reducers/weatherReducer";
import webReducer from "./reducers/webReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  webState:webReducer,
  weatherState:weatherReducer,
})

const store = configureStore({
  reducer: rootReducer,
});
export default store;
