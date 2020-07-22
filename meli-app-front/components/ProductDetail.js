import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format';

const ProductDetail = ({ product }) => {
  return (
    <div className="base__main-box animate__animated animate__fadeIn">
      <div className="product_detail_box" >
        <div className="product__picture animate__animated animate__fadeIn animate__slow" >
          <img src={ product.picture } alt={ product.title } />
        </div>
        <div className="product__info-detail">
          <div className="base_text-secondary">
            { product.condition === 'new'? 'Nuevo': 'Usado' } - { product.sold_quantity } vendidos
          </div>
          <div className='product__tittle'>
            <h1> { product.title } </h1>
          </div>
          <div className='product__price-detail-box'>
            <NumberFormat displayType={'text'} value={ Math.trunc(product.price.amount) } thousandSeparator={true} prefix={'$'} className="product__price-detail"/>
            <div className='product__price-detail-decimals'>
              00
            </div>
          </div>
          <button className="base__primary-button">
            Comprar
          </button>
        </div>  
      </div>
      { product.description!=='' && (
        <div className="product_detail_box" >
          <h2>Descripción del producto</h2> 
          <div className="product__description">
            <p> { product.description } </p>
          </div>
        </div>
      )}
    </div>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductDetail
