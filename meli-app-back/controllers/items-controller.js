const {response} = require('express');

const getItems = (req, res = response) => {

    const mockedResponse = {ok:true, data: {
        author: {
        name: "Giovanny",
        lastname: "Arias" },
        categories: ["Category 1", "Category 2", "Category 3"], 
        items: [
            {
                id: "MLA867050560", 
                title: "iPhone 11 64 Gb Negro 4 Gb Ram", 
                price: {
                    currency: "ARS", "amount": 164819, "decimals": 0
                },
                picture: "http://mla-s1-p.mlstatic.com/885508-MLA32445302787_102019-I.jpg", condition: "New", free_shipping: true
            },
            {
                id: "MLA867050561", 
                title: "iPhone 11 64 Gb Negro 4 Gb Ram", 
                price: {
                    currency: "ARS", "amount": 164819, "decimals": 0
                },
                picture: "http://mla-s1-p.mlstatic.com/885508-MLA32445302787_102019-I.jpg", condition: "New", free_shipping: true
            },
            {
                id: "MLA867050562", 
                title: "iPhone 11 64 Gb Negro 4 Gb Ram", 
                price: {
                    currency: "ARS", "amount": 164819, "decimals": 0
                },
                picture: "http://mla-s1-p.mlstatic.com/885508-MLA32445302787_102019-I.jpg", condition: "New", free_shipping: false
            },
            {
                id: "MLA867050563", 
                title: "iPhone 11 64 Gb Negro 4 Gb Ram", 
                price: {
                    currency: "ARS", "amount": 164819, "decimals": 0
                },
                picture: "http://mla-s1-p.mlstatic.com/885508-MLA32445302787_102019-I.jpg", condition: "New", free_shipping: true
            }
        ]}};

    res.json(mockedResponse);
}

module.exports = {
    getItems
}