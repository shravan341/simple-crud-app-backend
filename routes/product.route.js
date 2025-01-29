const express = require('express');
const router = express.Router();
const Product = require('../models/product.models');
const { getProducts, getProduct, createProduct, updateProduct } = require('../controllers/products.controller');

router.get('/',getProducts );
router.get('/:id', getProduct);

router.post('/', createProduct);

// update api product
router.put('/:id', updateProduct);



module.exports = router;