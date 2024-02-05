import { Poppins } from 'next/font/google'
import { ComponentProps } from 'react'

type HeaderProps = ComponentProps<'header'>

const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      {...props}
      className={`fixed flex w-full flex-col px-6 ${className} ${poppins.className}`}
    >
      {children}
    </header>
  )
}
