import type { AppProps } from 'next/app'
import Head from 'next/head'

import NextNProgress from 'nextjs-progressbar'

import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  )
}
