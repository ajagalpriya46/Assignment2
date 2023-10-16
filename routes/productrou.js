const express = require('express');
const router = express.Router();

const productcon = require('../Controllers/productcon');

// Product Routes
router.get('/products', productcon.getAllProducts);
router.get('/products/:id', productcon.getProductById);
router.post('/products', productcon.createProduct);
router.put('/products/:id', productcon.updateProduct);
router.delete('/products/:id', productcon.deleteProduct);

module.exports = router;
