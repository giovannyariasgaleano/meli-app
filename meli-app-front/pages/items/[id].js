import { getProduct } from '../../lib/products'
import Layout from '../../components/Layout'

export default function ItemById({ postData }) {
  return (
    <Layout>
      Página de detalle del producto  {JSON.stringify(postData)}
    </Layout>
  )
}

export async function getStaticPaths() {


  const paths = [
    { params: { id: 'MLA625814200' }},
    { params: { id: 'MLA625814201' }},
    { params: { id: 'MLA625814202' }},
  ]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  
  const postData = await getProduct(params.id)

  return {
    props: {
      postData
    }
  }
}