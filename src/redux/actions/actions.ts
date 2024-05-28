import { ThunkAction } from 'redux-thunk';
import { client } from '../../infra/client/client';
import { RootState } from '../reducers/reducers';
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  Repo,
  RepoActionTypes,
  SEARCH_REPOS,
  SELECT_REPO,
  SET_ERROR,
  SET_LOADING,
  PageInfo,
} from '../types/types';
import { SEARCH_REPOS_QUERY } from '../../infra/query/query';

export const searchRepos = (
  query: string,
  first: number = 10,
  after: string | null = null
): ThunkAction<void, RootState, unknown, RepoActionTypes> => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await client.query({
      query: SEARCH_REPOS_QUERY,
      variables: { query, first, after },
    });
    const repos: Repo[] = response.data.search.edges.map((edge: any) => edge.node);
    const pageInfo: PageInfo = response.data.search.pageInfo;
    const repositoryCount: number = response.data.search.repositoryCount;
    dispatch({ type: SEARCH_REPOS, payload: { repos, pageInfo, repositoryCount } });
  } catch (error: any) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const selectRepo = (repo: Repo | null): RepoActionTypes => ({
  type: SELECT_REPO,
  payload: repo,
});

export const openModal = (): RepoActionTypes => ({
  type: OPEN_MODAL,
});

export const closeModal = (): RepoActionTypes => ({
  type: CLOSE_MODAL,
});
