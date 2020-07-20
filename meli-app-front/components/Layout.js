import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'funciona titulo desde el server'

export default function Layout({ children, home }) {
  return (
    <div>

      
      <main>{children}</main>
      

    </div>
  )
}
