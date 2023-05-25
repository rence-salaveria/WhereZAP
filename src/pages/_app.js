import NavigationBar from '@/components/Navigation'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='font-fig'>
      <NavigationBar/>
      <Component {...pageProps} />  
    </div>
  
  )
}
