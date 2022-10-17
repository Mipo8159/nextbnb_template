import PropTypes, {InferProps} from 'prop-types'
import Menu from './Menu'

function Layout({children}: InferProps<typeof Layout.propTypes>) {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex flex-row justify-between bg-black p-4 text-white">
        <Menu />
      </nav>

      <main className="flex-1 p-4">{children}</main>

      <footer className="bg-black p-4 text-white">footer</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
