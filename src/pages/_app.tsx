import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IClinic - Seja bem vindo</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="minifest" href="manifest.json" />
        <meta
          name="description"
          content="Desenvolvimento de teste front-end Iclinic."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,700;1,100&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default App;
