import { client } from '@/lib/graphql-client'
import { COUNTRIES_QUERY } from '@/lib/queries'
import type { Countries, Country } from '@/types/countries'

export async function CountriesLoader() {
  const data = await client.request<Countries>(COUNTRIES_QUERY)

  if (data.countries.length === 0) return <div>No countries found</div>

  return (
    <ul>
      {data.countries.slice(0, 10).map((country: Country) => (
        <li key={country.code}>
          {country.emoji} {country.name} ({country.code})
        </li>
      ))}
    </ul>
  )
}
