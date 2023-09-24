import '@/styles/globals.css'

import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app'
import type { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  session: Session
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);


  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
