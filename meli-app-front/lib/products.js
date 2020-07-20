import fetch from 'node-fetch'

export async function getProduct(id) {

  const url = `http://localhost:4000/api/items/${id}`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  return data;
  
}