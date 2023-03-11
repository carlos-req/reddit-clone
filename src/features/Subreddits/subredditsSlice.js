import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SUBREDDITS_URL = "https://www.reddit.com/subreddits.json";

const initialState = {
  subreddits: [],
  status: "idle",
  error: null,
};

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    try {
      const response = await fetch(SUBREDDITS_URL);
      const json = await response.json();
      const data = json.data.children.map((subreddit) => subreddit.data);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSubreddits.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subreddits = state.subreddits.concat(action.payload);
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllSubreddits = (state) => state.subreddits.subreddits;
export const getPostsStatus = (state) => state.subreddits.status;
export const getPostsError = (state) => state.subreddits.error;

export const {} = subredditsSlice.actions;

export default subredditsSlice.reducer;
