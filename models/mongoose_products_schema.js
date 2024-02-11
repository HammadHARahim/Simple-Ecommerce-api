const mongoose = require('mongoose');

const products_Schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
	},
});

module.exports = mongoose.model('Products', products_Schema);
