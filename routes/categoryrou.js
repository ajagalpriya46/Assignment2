const express = require('express');
const router = express.Router();

const categorycon = require('../Controllers/categorycon');

// Category Routes
router.get('/categories', categorycon.getAllCategories);
router.get('/categories/:id', categorycon.getCategoryById);
router.post('/categories', categorycon.createCategory);
router.put('/categories/:id', categorycon.updateCategory);
router.delete('/categories/:id', categorycon.deleteCategory);

module.exports = router;
