const {response} = require('express');
const axios = require('axios').default;

const author = {
    name: 'Giovanny',
    lastname: "Arias",
}

const getItems = (req, res = response) => {

    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${ encodeURI(req.query.q) }&limit=4`)
    .then((response) => {
        res.json({
            ok: true,
            data: {
                author,
                categories: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'],
                items: response.data.results.map((product) => (
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

module.exports = {
    getItems
}