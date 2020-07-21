import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useRouter } from 'next/router'

export default function Layout({ children }) {

  const router = useRouter()
  const [search, setSearch] = useState('');

  useEffect( () => {
    if( search !== '' ) {
      router.push(`/items?q=${ search }`);
    }
  }, [search]);

  return (
    <div>
      <Header setSearch={ setSearch } />
      <main> 
        { children }
      </main>
    </div>
  )

}
