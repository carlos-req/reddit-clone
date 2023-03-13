import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/Posts/postsSlice";

import subredditsReducer from "../features/Subreddits/subredditsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    posts: postsReducer,
  },
});
