const express = require('express');
const router = express.Router();

const cProduct = require('../controllers/product')

router.get('/product', cProduct.getProduct);
router.post('/product', cProduct.addProduct);
router.put('/product', cProduct.updateProduct);
router.delete('/product', cProduct.deleteProduct);

module.exports = router