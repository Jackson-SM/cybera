import { Header } from '@/components/organisms/Header'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const [mounted, setMounted] = useState(false)

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
      <Header />
      <main className={`min-h-screen p-14 ${poppins.className}`}>
        <h1>Fonte Poppins</h1>
      </main>
    </>
  )
}
