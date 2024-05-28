export const SEARCH_REPOS = 'SEARCH_REPOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SELECT_REPO = 'SELECT_REPO';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface Repo {
  id: string;
  name: string;
  description: string;
  repositoryCount: number;
  stargazers: {
    totalCount: number;
  };
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  issues: {
    totalCount: number;
  };
  pullRequests: {
    totalCount: number;
  };
  defaultBranchRef: {
    target: {
      history: {
        totalCount: number;
      };
    };
  };
  refs: {
    totalCount: number;
  };
  languages: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface RepoState {
  repos: Repo[];
  loading: boolean;
  error: string | null;
  selectedRepo: Repo | null;
  isModalOpen: boolean;
  pageInfo: PageInfo | null;
  repositoryCount: number;
}

interface SearchReposAction {
  type: typeof SEARCH_REPOS;
  payload: {
    repos: Repo[];
    pageInfo: PageInfo;
    repositoryCount: number;
  };
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface SelectRepoAction {
  type: typeof SELECT_REPO;
  payload: Repo | null;
}

interface OpenModalAction {
  type: typeof OPEN_MODAL;
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL;
}

export type RepoActionTypes =
  | SearchReposAction
  | SetLoadingAction
  | SetErrorAction
  | SelectRepoAction
  | OpenModalAction
  | CloseModalAction;
