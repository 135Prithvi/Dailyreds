// All imports 😎
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { SessionProvider } from 'next-auth/react'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'


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
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={10}
      />
      <Navbar></Navbar>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
