import { Button } from '@/components/ui/button'
import { client } from '@/lib/graphql-client'
import { COUNTRIES_QUERY } from '@/lib/queries'
import type { Countries, Country } from '@/types/countries'
import Link from 'next/link'

// TODO increase the number of countries shown per page or add pagination

export async function CountriesLoader() {
  const data = await client.request<Countries>(COUNTRIES_QUERY)

  if (data.countries.length === 0) return <div>No countries found</div>

  return (
    <ul>
      {data.countries.slice(0, 10).map((country: Country) => (
        <li key={country.code}>
          <Button variant='link' asChild>
            <Link href={`/country/${country.code}`}>
              {country.emoji} {country.name} ({country.code})
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  )
}
