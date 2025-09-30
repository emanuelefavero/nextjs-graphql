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

export const COUNTRY_QUERY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      capital
      code
      continent {
        name
      }
      currency
      emoji
      languages {
        name
      }
      name
      native
      phone
    }
  }
`
