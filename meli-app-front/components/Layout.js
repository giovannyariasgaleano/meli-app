import React, { useState } from 'react'
import Header from './Header'
import Head from 'next/head'
import Link from 'next/link'


export const siteTitle = 'funciona titulo desde el server'

export default function Layout({ children, home }) {

  const [search, setSearch] = useState('Iphone');

  console.log(search);

  return (
    <div>

      <Header setSearch={ setSearch } />
      
      <main>{children}</main>
      

    </div>
  )
}
