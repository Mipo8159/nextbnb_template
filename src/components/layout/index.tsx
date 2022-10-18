import PropTypes, {InferProps} from 'prop-types'
import {useTranslation} from 'next-i18next'
import LocaleSwitcher from './LocaleSwitcher'
import Menu from './Menu'

function Layout({children}: InferProps<typeof Layout.propTypes>) {
  const {t} = useTranslation('common')

  return (
    <div className="flex flex-col min-h-screen ">
      <nav className="flex flex-row justify-between p-4 text-white bg-black">
        <Menu />
        <LocaleSwitcher />
      </nav>

      <main className="flex-1 p-4">{children}</main>

      <footer className="p-4 text-white bg-black">{t('footer')}</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
