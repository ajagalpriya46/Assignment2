const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    published: Boolean,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'  // Refers to the Category model
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
