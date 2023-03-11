import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const POSTS_URL = "https://www.reddit.com/";

const initialState = {
  posts: [],
  searchTerm: "",
  subrparam: "r/Home.json",
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeParam: (state, action) => {
      state.subrparam = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.subreddits = state.subreddits.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { changeParam } = postsSlice.actions;

export default postsSlice.reducer;
