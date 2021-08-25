import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { ProfileContext, Profile } from '../hooks/profileContext';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  const [profile, setProfile] = useState<Profile>({ name: '' });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </ProfileContext.Provider>
  );
}

export default App;
