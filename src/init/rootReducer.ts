import { combineReducers } from "redux";
import { jobs } from './jobs'

export const rootReducer = combineReducers({
  jobs,
});

export type AppState = ReturnType<typeof rootReducer>;