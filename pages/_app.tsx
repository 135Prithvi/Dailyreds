// All imports 😎
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../stitches.config'
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(100)
    })
  })

  return (
    <SessionProvider session={session}>
      <Script
        src="https://unpkg.com/flowbite@latest/dist/flowbite.js"
        strategy="beforeInteractive"
      ></Script>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          waitingTime={10}
        />
        <Navbar></Navbar>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
