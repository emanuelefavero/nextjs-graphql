import { ModeToggle } from '@/components/theme/mode-toggle'

export function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-2'>
      <div className='font-bold'>Next.js GraphQL</div>
      <ModeToggle />
    </header>
  )
}
