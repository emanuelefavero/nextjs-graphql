import { client } from '@/lib/graphql-client'
import { COUNTRIES_QUERY } from '@/lib/queries'
import type { Countries, Country } from '@/types/countries'

// TODO Load data inside a loader component and put it inside a Suspense

export default async function Home() {
  const data = await client.request<Countries>(COUNTRIES_QUERY)

  return (
    <>
      <h1>Next.js GraphQL</h1>

      <ul>
        {data.countries.slice(0, 10).map((country: Country) => (
          <li key={country.code}>
            {country.emoji} {country.name} ({country.code})
          </li>
        ))}
      </ul>
    </>
  )
}
