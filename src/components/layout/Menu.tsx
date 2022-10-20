import Link from 'next/link'

function Menu() {
  return (
    <ul className="flex flex-row gap-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <Link href="/todos">todos</Link>
      </li>
    </ul>
  )
}

export default Menu
