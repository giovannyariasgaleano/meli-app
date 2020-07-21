import Layout from "../components/Layout"
import ProductPreview from "../components/ProductPreview"
import fetch from 'node-fetch'

function Items({ products }) {

  const productsList =  <div className="base__main-box">
                          { products && products.map(product => 
                              <ProductPreview key={ product.id } product={ product } /> 
                          )}
                        </div>;
  
  const searchNotFound =  <div className="finder__search-message">
                            Lo sentimos, no encontramos productos relacionados con tu busqueda
                          </div>;

  return (
    <Layout>
      { products? productsList: searchNotFound } 
    </Layout>
  )
}

Items.getInitialProps = async ({ query: {q} }) => {

  const res = await fetch(`http://localhost:4000/api/items?q=${ q }`);
  const {data: { items } } = await res.json()

  return {
    products: items
  }
};

export default Items
