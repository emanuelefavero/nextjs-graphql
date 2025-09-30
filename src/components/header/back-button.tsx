'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'

type BackButtonProps = React.ComponentPropsWithRef<typeof Button>

export function BackButton({ className, ...props }: BackButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <Button
      onClick={() => router.back()}
      variant='outline'
      size='sm'
      className={cn('animate-fade-in', className)}
      {...props}
    >
      &larr; Back
    </Button>
  )
}
