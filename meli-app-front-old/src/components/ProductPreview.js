import React from 'react'
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import ShippingButton from '../assets/ic_shipping.png';
import ShippingButton2x from '../assets/ic_shipping@2x.png.png';

const ProductPreview = ({product}) => {

    const styleImageProduct = { backgroundImage: `url(${product.picture})` }
    const shippingButton = <img src={ShippingButton} srcSet={`${ShippingButton2x} 2x`} alt="Buscar productos" />;

    return (
        <>
            <div className='product__preview-box'>
                <div>
                    <div style={ styleImageProduct } className='product__picture'></div>
                    <div className='product__info'>
                        <div className='product__price_box'>
                            <NumberFormat displayType={'text'} value={ product.price.amount } thousandSeparator={true} prefix={'$'} className='product__price' />
                            { product.free_shipping && shippingButton }
                        </div>
                        <div className='product__tittle'>{ product.title }</div>
                    </div>
                </div>
                <div className="product__ciudad">
                    Ciudad
                </div>
            </div>
        </>
    )
}

ProductPreview.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductPreview
