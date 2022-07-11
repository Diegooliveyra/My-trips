import { gql } from 'graphql-request'

export const GET_PAGE = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
