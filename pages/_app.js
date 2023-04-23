import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    
  <div> 
    <nav className="border-b p-6">

        <p className=" text-16xl font-bold "  >MetaVerse MarketPlace </p>

        

        <div className='mt-4' >
          <Link href="/" className='mr-6 text-blue-500' >            
              Home            
          </Link>
          <Link href="/" className='mr-6 text-blue-500'>            
              Sell Digital Asset             
          </Link>

        </div>

    </nav>
  
    <Component {...pageProps} />

  </div>
  )
}

export default MyApp
