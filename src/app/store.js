import { configureStore } from "@reduxjs/toolkit";

import subredditsReducer from "../features/Subreddits/subredditsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
  },
});
