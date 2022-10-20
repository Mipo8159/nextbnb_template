import type {GetStaticProps, NextPage} from 'next'
import {NextSeo} from 'next-seo'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import AboutView from '@src/views/about'
import {LanguageAlternateType} from '@src/types/LanguageAlternate.type'

/* SERVER */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {locale = '', locales = []} = ctx
  const translations = await serverSideTranslations(locale, [
    'common',
    'about',
  ])

  const languageAlternates: LanguageAlternateType[] = locales.map(
    (item) => ({
      href: `${process.env.VERCEL_URL}/${item}/about`,
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
const AboutPage: NextPage<PageProps> = function AboutPage({
  languageAlternates,
  ...props
}) {
  return (
    <>
      <NextSeo
        title="About Page"
        titleTemplate=" %s | Next Template"
        description="about page description for seo"
        languageAlternates={languageAlternates}
      />
      <AboutView {...props} />
    </>
  )
}

export default AboutPage
