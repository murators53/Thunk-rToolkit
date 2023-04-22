import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  start: false,
  weather:null,
  error: false,
};
const API = process.env.REACT_APP_WEATHER_API_KEY;
 
export const getWeather = createAsyncThunk('thunkWeather', async (props) => {
  console.log('ARANACAK',props)
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=${API}&units=metric`)
  return response.data
})

const webReducers = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        console.log("start PENDING", action);
        state.start=true
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        console.log("SUCCESS FULFILED",state, action);
        state.start=false
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.start=false
        state.error=true
        console.log("ERROR REJECTED", action);
      })
  },
});

export default webReducers.reducer;
export const { start, error } = webReducers.actions;
