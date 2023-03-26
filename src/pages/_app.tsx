import type { AppProps } from 'next/app'
import Head from 'next/head'

import NextNProgress from 'nextjs-progressbar'

import { store } from '@/redux/store'

import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux'

import '@/styles/globals.css'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />

      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  )
}
