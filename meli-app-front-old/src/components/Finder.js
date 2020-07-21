import React, { useState } from 'react'
import FinderHeader from './FinderHeader'
import ProductsList from './ProductList';
import BreadCrumb from './shared/BreadCrumb';

const Finder = () => {

    const [search, setSearch] = useState('Iphone');
    const [categories, setCategories] = useState([]);

    return (
        <>
            <FinderHeader setSearch={ setSearch } />
            <div className="base__container">
                <BreadCrumb  items={ categories } />
                <div className="base__main-box">
                    <ProductsList search={ search } setCategories={ setCategories }/>
                </div>
            </div>
        </>
    )
}

export default Finder
