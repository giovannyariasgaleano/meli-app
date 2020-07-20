import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { getItems } from '../helpers/getItems';
import ProductPreview from './ProductPreview';

const ProductsList = ({ search, setCategories }) => {

    const [ products, setProducts ] = useState({
        data: {},
        loading: false
    });

    useEffect( () => {
        if (search !== '') {
            getItems(search)
                .then( products => {
                    setProducts({
                        data: products,
                        loading: false
                    });
                    setCategories(products.categories);
                });
        }
    }, [search, setCategories]);

    return (
        <div>
            {
                Object.entries(products.data).length !== 0 &&
                products.data.items.map( (product) => <ProductPreview key={ product.id } product={ product } /> )
            }
        </div>
    )
}

ProductsList.propTypes = {
    search: PropTypes.string.isRequired
}

export default ProductsList
