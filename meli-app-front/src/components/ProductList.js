import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { getItems } from '../helpers/getItems';

const ProductsList = ({ search }) => {

    const [ products, setProducts ] = useState({
        data: {},
        loading: false
    });

    useEffect( () => {
        if (search != '') {
            getItems(search)
                .then( products => {
                    setProducts({
                        data: products,
                        loading: false
                    })
                });
        }
    }, [search]);

    return (
        <div>
            { search }
            { JSON.stringify(products) }
        </div>
    )
}

ProductsList.propTypes = {
    search: PropTypes.string.isRequired
}

export default ProductsList
