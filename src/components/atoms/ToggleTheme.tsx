import { useTheme } from 'next-themes'
import { ComponentProps } from 'react'

type ToggleThemeProps = ComponentProps<'button'>

export const ToggleTheme = (props: ToggleThemeProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <button
      {...props}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className="text-black dark:text-white"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
