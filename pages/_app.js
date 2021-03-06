import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'
import Script from 'next/script';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

                                                      
return (

  <div>
<Head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
  

</Head> 
  <Script 
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" 
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" 
    crossOrigin="anonymous" 
  />
  <Script 
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" 
    integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" 
    crossOrigin="anonymous"></Script>
<Header/>
<Component {...pageProps} />
<Footer/>
  </div>

)

}

export default MyApp
