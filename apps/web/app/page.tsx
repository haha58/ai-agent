import Link from 'next/link'

const links = [
  '/verify/system/health',
  '/verify/system/ping',
  '/verify/catalog/list',
  '/verify/user/profile',
  '/verify/order/detail',
]

export default function Home() {
  return (
    <main>
      {links.map((href) => (
        <Link key={href} href={href}>
          {href}
        </Link>
      ))}
    </main>
  )
}