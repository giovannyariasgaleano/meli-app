import React from 'react'
import NumberFormat from 'react-number-format';
import Layout from './Layout';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <div className="base__main-box">
        <div className="product_detail_box" >
          <div className="product__picture" >
            <img src={ product.picture }/>
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
      </div>
    </div>
  )
}

export default ProductDetail
