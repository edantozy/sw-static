import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import { darkTheme } from '../themes'
import { SearchContextProvider } from '../context/search'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </NextUIProvider>
  )
}

export default MyApp
