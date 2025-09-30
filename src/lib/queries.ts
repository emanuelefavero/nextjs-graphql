import { gql } from 'graphql-request'

export const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`
