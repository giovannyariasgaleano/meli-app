const { Router } = require('express');
const router = Router();

const { getItems, getItemById } = require('../controllers/items-controller');

router.get('/', getItems);
router.get('/:id', getItemById);

module.exports = router;