import React, { useState } from 'react'
import FinderHeader from './FinderHeader'
import ProductsList from './ProductList';

const Finder = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <FinderHeader setSearch={ setSearch } />
            <div className="base__container">
                <ProductsList search={ search } />
            </div>
        </>
    )
}

export default Finder
