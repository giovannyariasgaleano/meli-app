import { useRouter, withRouter } from "next/router";

export default function Item() {


  const {
    query: { q },
  } = useRouter();

  console.log(q);

  return (
    <div>
      Página de busqueda de producto
    </div>
  )
}
