const Customers = require('../models/mongoose_customers_schema');

// get  all customers information
async function getCustomers(req, res) {
	try {
		// querying mongodb
		const customers = await Customers.find({});
		res.status(200).json(customers);
	} catch (error) {
		console.error(error);
		res.send(error.message);
	}
}

// get customer information
async function getCustomer(req, res) {}

// post customer information
async function postCustomer(req, res) {
	const { email, password, country, phone } = req.body;
	try {
		const customer = await Customers.create({
			email: email,
			password: password,
			country: country,
			phone: phone,
		});
		res.status(200).json(customer);
	} catch (error) {
		console.error(error);
		res.send(error.message);
	}
}

// delete customer information
async function deleteCustomer(req, res) {}

// update customer information
async function updateCustomer(req, res) {}

module.exports = {
	getCustomers,
	getCustomer,
	updateCustomer,
	deleteCustomer,
	postCustomer,
};
