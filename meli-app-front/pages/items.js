import fetch from 'node-fetch'
import Head from 'next/head'

import BreadCrumb from "../components/shared/BreadCrumb"
import Layout from "../components/Layout"
import ProductPreview from "../components/ProductPreview"

function Items({ products, categories }) {

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
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" content={ categories }/>
      </Head>
      { categories && <BreadCrumb items={ categories } /> }
      { products? productsList: searchNotFound }
    </Layout>
  )
}

Items.getInitialProps = async ({ query: {q} }) => {

  const res = await fetch(`http://localhost:4000/api/items?q=${ q }`);
  const {data} = await res.json()

  return {
    products: data.items,
    categories: data.categories
  }
};

export default Items
