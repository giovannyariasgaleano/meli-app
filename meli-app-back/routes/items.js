const { Router } = require('express');
const router = Router();

const { getItems } = require('../controllers/items-controller');

router.get('/', getItems);

module.exports = router;