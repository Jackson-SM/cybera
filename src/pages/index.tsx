import { Header } from '@/components/organisms/Header'
import { useTheme } from 'next-themes'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Cybera</title>
      </Head>
      <Header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
        <div>
          <button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }}
            className="text-black dark:text-white"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </Header>
      <main className={`min-h-screen p-14 ${poppins.className}`}>
        <h1>Fonte Poppins</h1>
      </main>
    </>
  )
}
