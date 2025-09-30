'use client'

import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <Button onClick={() => router.back()} variant='outline' size='sm'>
      &larr; Back
    </Button>
  )
}
