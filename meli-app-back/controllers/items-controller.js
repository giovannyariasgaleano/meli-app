const {response} = require('express');
const axios = require('axios').default;

const author = {
    name: 'Giovanny',
    lastname: "Arias",
}

const getItems = (req, res = response) => {

    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${ encodeURI(req.query.q) }&limit=4`)
    .then((response) => {

        const categories = response.data.filters
            .find( filter => filter.id = 'category')
            .values.map( category => category)[0]
            .path_from_root.map( path => path.name );

        res.json({
            ok: true,
            data: {
                author,
                categories,
                items: response.data.results.map( product => (
                    {
                        id: product.id,
                        title: product.title,
                        price: {
                            currency: product.currency_id, 
                            amount: product.price, 
                            decimals: 0
                        },
                        picture: product.thumbnail,
                        condition: product.condition,
                        free_shipping: product.shipping.free_shipping
                    }
                ))
            }   
        });
    })
    .catch((error) => {
        return res.json({ok:false, data:{}});
    })
}

const getItemById = (req, res = response) => {

    axios.get(`https://api.mercadolibre.com/items/${ req.params.id }`)
    .then( response => {

        res.json({
            ok: true,
            data: {
                author,
                item: {
                    id: response.data.id,
                    title: response.data.title,
                    price: {
                        currency: response.data.currency_id, 
                        amount: response.data.price, 
                        decimals: 0,
                    },
                    picture: response.data.pictures[0].url, 
                    condition: response.data.condition, 
                    free_shipping: response.data.shipping.free_shipping,
                    sold_quantity: response.data.sold_quantity, 
                    description: ''
                }
            }   
        });
    })
    .catch(error => {
        return res.json({ok:false, data:{}});
    })
}

module.exports = {
    getItems,
    getItemById
}