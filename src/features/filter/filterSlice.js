import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsType: "",
  search: "",
  sortBy: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterJobsType: (state, action) => {
      state.jobsType = action.payload;
    },
    searchJobs: (state, action) => {
      state.search = action.payload;
    },
    sortedBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterJobsType, searchJobs, sortedBy } = filterSlice.actions;
