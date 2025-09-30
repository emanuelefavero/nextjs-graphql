import { client } from '@/lib/graphql-client'
import { COUNTRY_QUERY } from '@/lib/queries'
import type { CountryDetail } from '@/types/country'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug: code } = await params
  const { country }: { country: CountryDetail } = await client.request(
    COUNTRY_QUERY,
    { code },
  )
  return (
    <>
      <h1>
        Country: {country.name} ({country.native}) {country.emoji}
      </h1>
      <p>Code: {country.code}</p>
      <p>Capital: {country.capital}</p>
      <p>Continent: {country.continent.name}</p>
      <p>Currency: {country.currency}</p>
      <p>Languages: {country.languages.map((lang) => lang.name).join(', ')}</p>
      <p>Phone: {country.phone}</p>
    </>
  )
}
