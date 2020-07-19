import React, { useState } from 'react'
import FinderHeader from './FinderHeader'

const Finder = () => {

    const [search, setSearch] = useState('esoo');

    console.log(search, '---');

    return (
        <>
            <FinderHeader setSearch={ setSearch } />
        </>
    )
}

export default Finder
