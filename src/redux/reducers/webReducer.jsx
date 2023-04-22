import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  start: false,
  search: [],
  error: false,
};
const API2 = process.env.REACT_APP_WEB_API_KEY;

export const getSearch = createAsyncThunk("thunkSearch", async (props) => {
  console.log("WEB REDUCER THUNK", props);
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: {
      q: props,
      pageNumber: '1',
      pageSize: '10',
      autoCorrect: 'true',
      fromPublishedDate: 'null',
      toPublishedDate: 'null'
    },
    headers: {
      'X-RapidAPI-Key': API2,
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  

  const res = await axios.request(options);
  console.log(res);
  return res.data.value;
});

const webReducers = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearch.pending, (state, action) => {
        console.log("start PENDING", action);
        state.start=true
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        console.log("SUCCESS FULFILED",state, action);
        state.start=false
        state.search = action.payload;
      })
      .addCase(getSearch.rejected, (state, action) => {
        state.start=false
        state.error=true
        console.log("ERROR REJECTED", action);
      })
  },
});

export default webReducers.reducer;
export const { start, error } = webReducers.actions;
