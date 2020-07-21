import { getProduct } from '../../lib/products'
import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail';

export default function ItemById({ product }) {
  return (
    <Layout>
      {product && <ProductDetail product={ product } />}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = []
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { item } = await getProduct(params.id)
  return {
    props: {
      product: item
    }
  }
}