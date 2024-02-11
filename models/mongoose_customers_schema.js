const mongoose = require('mongoose');

const customers_Schema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Customers', customers_Schema);
