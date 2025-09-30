import { ModeToggle } from '@/components/theme/mode-toggle'
import { BackButton } from './back-button'

export function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-2'>
      <div className='flex items-center gap-2'>
        <div className='font-bold'>Next.js GraphQL</div>
        <BackButton />
      </div>
      <ModeToggle />
    </header>
  )
}
