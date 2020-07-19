import React, { useState } from 'react'
import FinderHeader from './FinderHeader'
import ProductsList from './ProductList';

const Finder = () => {

    const [search, setSearch] = useState('Iphone');

    return (
        <>
            <FinderHeader setSearch={ setSearch } />
            <div className="base__container base__main-box">
                <ProductsList search={ search } />
            </div>
        </>
    )
}

export default Finder
