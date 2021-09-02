import { gql } from 'graphql-request'

export const GET_PAGE = gql`
  query getPages {
    pages {
      heading
      id
      slug
      body {
        html
      }
    }
  }
`
