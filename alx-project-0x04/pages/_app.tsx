import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Check if the current route is the 404 page
  const is404Page = router.pathname === '/404'
  
  if (is404Page) {
    return <Component {...pageProps} />
  }
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}