import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps}) => {
  return (
  <>
    <Head>
      <title>StartGames</title>
      <meta name="viewport" content="initial-scale=1.0, with=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
