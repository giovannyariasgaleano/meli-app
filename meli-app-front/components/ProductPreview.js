import React from 'react'
import NumberFormat from 'react-number-format'

const ProductPreview = ({ product }) => {

    const styleImageProduct = { backgroundImage: `url(${product.picture})` }
    const shippingButton = <img src='/images/ic_shipping.png' srcSet={'/images/ic_shipping@2x.png.png 2x'} alt="Buscar productos" />;

    return (
        <div className='product__preview-box'>
            <div className='product__info'>
                <div style={ styleImageProduct } className='product__picture'></div>
                <div>
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
    )
}

export default ProductPreview
