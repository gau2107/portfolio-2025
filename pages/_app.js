import Head from 'next/head';
import { useEffect } from 'react';
import { initGA, logPageView } from '../src/utils/analytics';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://gsolanki.verce.app" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
