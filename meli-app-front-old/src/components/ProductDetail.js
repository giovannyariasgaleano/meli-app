import React from 'react'
import NumberFormat from 'react-number-format';

const ProductDetail = ({ idProduct }) => {

    let product = {};

    useEffect( () => {
        product = getItem(idProduct)
            .then( prod => prod );
    }, [search, setCategories]);

    return (
        <div>
            <div>
                <div>
                    <img src={product.picture} />
                </div>
                <div>
                    <div>
                        { product.condition } - { product.sold_quantity } vendidos
                    </div>
                    <div>
                        { product.title }
                    </div>
                    <div>
                        <NumberFormat displayType={'text'} value={ product.price.amount } thousandSeparator={true} prefix={'$'}/>
                    </div>
                    <button>
                        Comprar
                    </button>
                </div>  
            </div>
            <div>
                <h2>Descripción del producto</h2>
                <div>
                    { product.description }
                </div>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {
    idProduct: PropTypes.string.isRequired
}

export default ProductDetail
