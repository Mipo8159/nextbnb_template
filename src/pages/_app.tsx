import type {AppProps} from 'next/app'
import {DefaultSeo} from 'next-seo'
import {appWithTranslation} from 'next-i18next'
import Layout from '@src/components/layout'
import '@src/styles/main.scss'
import {wrapper} from '@src/store/store'
import {Provider} from 'react-redux'

function MyApp({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest)
  return (
    <>
      <DefaultSeo
        titleTemplate="Template | Next Project"
        defaultTitle="Next Project Default Title"
        description="Default description"
      />
      <Layout>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </Layout>
    </>
  )
}

export default appWithTranslation(MyApp)
