import { combineReducers } from '@reduxjs/toolkit';
import { repoReducer } from '../repo-reducer/repoReducer';

export const rootReducer = combineReducers({
  repo: repoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
