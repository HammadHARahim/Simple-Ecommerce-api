const mongoose = require('mongoose');

const orders_Schema = new mongoose.Schema({
	product_id: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Orders', orders_Schema);
