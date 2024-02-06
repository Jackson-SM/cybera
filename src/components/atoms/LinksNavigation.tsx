import Link from 'next/link'
import { ComponentProps } from 'react'

type LinksNavigationProps = ComponentProps<typeof Link>

export const LinksNavigation = ({
  children,
  className,
  ...props
}: LinksNavigationProps) => {
  return (
    <Link
      {...props}
      className={`transition duration-150 ease-out hover:text-violet-500 ${className}`}
    >
      {children}
    </Link>
  )
}
