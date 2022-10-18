import type {AppProps} from 'next/app'
import {DefaultSeo} from 'next-seo'
import {appWithTranslation} from 'next-i18next'
import Layout from '../components/layout'
import '../styles/globals.scss'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="Template | Next Project"
        defaultTitle="Next Project Default Title"
        description="Default description"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default appWithTranslation(MyApp)
