import Layout from "../components/Layout"
import ProductPreview from "../components/ProductPreview"
import { getProducts } from "../lib/products" 

export default function Item({ products }) {
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

export async function getStaticProps() {

  let products = [
    {
        "id": "MLA656943182",
        "title": "Pana Donn - Tela Para Tapicería Con Proceso Antimancha",
        "price": {
            "currency": "ARS",
            "amount": 840,
            "decimals": 0
        },
        "picture": "http://mla-s1-p.mlstatic.com/832199-MLA32780421507_112019-I.jpg",
        "condition": "new",
        "free_shipping": false
    },
    {
        "id": "MLA617388307",
        "title": "Tela Pana Terciopelo Para Tapiceria Y Decor. Ancho 1.45 Mts",
        "price": {
            "currency": "ARS",
            "amount": 786,
            "decimals": 0
        },
        "picture": "http://mla-s2-p.mlstatic.com/958417-MLA40741847435_022020-I.jpg",
        "condition": "new",
        "free_shipping": false
    },
    {
        "id": "MLA625814200",
        "title": "Tela Pana Para Tapiceria Calidad Premium!! P /metro Ofert !!",
        "price": {
            "currency": "ARS",
            "amount": 790,
            "decimals": 0
        },
        "picture": "http://mla-s1-p.mlstatic.com/682021-MLA41552643595_042020-I.jpg",
        "condition": "new",
        "free_shipping": false
    },
    {
        "id": "MLA656558611",
        "title": "Pana Panne - Tela Para Tapicería Con Tratamiento Antimancha",
        "price": {
            "currency": "ARS",
            "amount": 1429,
            "decimals": 0
        },
        "picture": "http://mla-s2-p.mlstatic.com/831995-MLA32780874257_112019-I.jpg",
        "condition": "new",
        "free_shipping": false
    }
];

console.log(products);

  return {
    props:  {
      products: products
    }
  }
}

