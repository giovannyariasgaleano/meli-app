export const getItems = async( search ) => {

    const url = `http://localhost:4000/items`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    return data;
}