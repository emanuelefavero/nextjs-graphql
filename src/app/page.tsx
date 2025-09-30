import CountriesLoader from '@/components/Countries/CountriesLoader'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <h1>Next.js GraphQL</h1>
      <Suspense fallback={<div>Loading countries...</div>}>
        <CountriesLoader />
      </Suspense>
    </>
  )
}
