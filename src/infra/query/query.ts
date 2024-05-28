import { gql } from "@apollo/client";

export const SEARCH_REPOS_QUERY = gql`
    query($query: String!, $first: Int!, $after: String) {
      search(query: $query, type: REPOSITORY, first: $first, after: $after) {
        repositoryCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ... on Repository {
              id
              name
              description
              stargazers {
                totalCount
              }
              url
              owner {
                login
                avatarUrl
              }
              issues(states: OPEN) {
                totalCount
              }
              pullRequests(states: OPEN) {
                totalCount
              }
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 1) {
                      totalCount
                    }
                  }
                }
              }
              refs(refPrefix: "refs/heads/") {
                totalCount
              }
              languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;