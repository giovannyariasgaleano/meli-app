import Head from 'next/head'

export default function Home() {

  console.log(props);

  /*const params = new URLSearchParams('?q');
  console.log(params)*/

  return (
    <div className="container">

      


      <Head>
        <title>Meli App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Pagina de search
      </div>

    </div>
  )
}