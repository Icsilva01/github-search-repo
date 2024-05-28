import {
  RepoState,
  RepoActionTypes,
  SEARCH_REPOS,
  SET_LOADING,
  SET_ERROR,
  SELECT_REPO,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../types/types';

const initialState: RepoState = {
  repos: [],
  loading: false,
  error: null,
  selectedRepo: null,
  isModalOpen: false,
  pageInfo: null,
  repositoryCount: 0,
};

export const repoReducer = (state = initialState, action: RepoActionTypes): RepoState => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SEARCH_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload.repos,
        pageInfo: action.payload.pageInfo,
        repositoryCount: action.payload.repositoryCount,
      };
    case SELECT_REPO:
      return { ...state, selectedRepo: action.payload };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};
