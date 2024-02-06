import { Poppins } from 'next/font/google'
import { ComponentProps } from 'react'
import { ToggleTheme } from '../atoms/ToggleTheme'
import { Navigation } from '../molecules/Navigation'

type HeaderProps = ComponentProps<'header'>

const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      {...props}
      className={`fixed flex h-20 w-full items-center justify-between gap-4 bg-zinc-300 px-6 text-sm dark:bg-zinc-800  ${className} ${poppins.className}`}
    >
      <h1 className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
        Logo
      </h1>
      <Navigation />
      <div>
        <ToggleTheme />
      </div>
    </header>
  )
}
