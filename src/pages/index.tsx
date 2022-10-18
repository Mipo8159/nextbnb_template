import type {NextPage, GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {LanguageAlternateType} from '../types/LanguageAlternate.type'
import HomeView from '../views/home'

/* SERVER */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {locale = '', locales = []} = ctx
  const translations = await serverSideTranslations(locale, [
    'common',
    'home',
  ])

  const languageAlternates: LanguageAlternateType[] = locales.map(
    (item) => ({
      href: `${process.env.VERCEL_URL}/${item}`,
      hrefLang: `${item}`,
    })
  )
  return {
    props: {...translations, languageAlternates},
  }
}

/* CLIENT */
type PageProps = {
  languageAlternates: LanguageAlternateType[]
}
const HomePage: NextPage<PageProps> = function HomePage({
  languageAlternates,
  ...props
}) {
  return (
    <>
      <NextSeo
        title="Home Page"
        titleTemplate=" %s | Next Template"
        description="about page description for seo"
        languageAlternates={languageAlternates}
      />
      <HomeView {...props} />
    </>
  )
}

export default HomePage
