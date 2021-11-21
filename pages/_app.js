import '../styles/globals.css'
import Head from 'next/head'
// import { DataLayer } from "../config/DataLayer"
// import  reducer , { initialState } from "../config/Reducer"

function MyApp({ Component, pageProps }) {
    return( 
      <div>
      {/* // <DataLayer initialState={initialState} reducer={reducer} > */}
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"></link>
          </Head>
          <Component {...pageProps} />
      {/* // </DataLayer> */}
      </div>
      )
}

export default MyApp
