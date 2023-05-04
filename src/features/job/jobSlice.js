import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJob, deleteJob, editJob, getJobs } from "./jobAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

//Async Thunks
export const fetchJobs = createAsyncThunk("job/fetch", async () => {
  const jobs = await getJobs();

  return jobs;
});

export const addJob = createAsyncThunk("job/add", async (data) => {
  const job = await createJob(data);

  return job;
});

export const updateJob = createAsyncThunk(
  "job/update",
  async ({ _id, data }) => {
    const job = await editJob(_id, data);

    return job;
  }
);

export const removeJob = createAsyncThunk("job/remove", async (_id) => {
  const job = await deleteJob(_id);

  return job;
});

//Create Slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
  },

  extraReducers: (builder) => {
    builder
      //Fetch Job
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })

      //Add Job
      .addCase(addJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //update Job
      .addCase(updateJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const indexToUpdate = state.jobs.findIndex(
          (job) => job._id === action.payload._id
        );

        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //Delete Job
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const updatedjobs = state.jobs.filter(
          (job) => job._id !== action.meta.arg
        );

        state.jobs = updatedjobs;
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobSlice.reducer;
export const { editActive, editInActive } = jobSlice.actions;
