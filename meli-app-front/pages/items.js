import Layout from "../components/Layout"
import ProductPreview from "../components/ProductPreview"
import { getProducts } from "../lib/products" 
import fetch from 'node-fetch'

function Items({ products }) {
  return (
    <Layout>
      <div className="base__container">
        <div className="base__main-box">
          {  
            products.map(product => 
              <ProductPreview key={ product.id } product={ product } /> 
            ) 
          }
        </div>
      </div>
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
