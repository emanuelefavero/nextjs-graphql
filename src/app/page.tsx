import CountriesLoader from '@/components/countries/CountriesLoader'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <h1 className='mb-4 text-2xl font-bold'>Countries</h1>
      <Suspense fallback={<div>Loading countries...</div>}>
        <CountriesLoader />
      </Suspense>
    </>
  )
}
