const Orders = require('../models/mongoose_orders_schema');
const Products = require('../models/mongoose_products_schema');
const outQoute = require('../utilities/strfilter');

async function getOrders(req, res) {
	// const orders = await Orders.find().populate('product_id');
	try {
		const orders = await Orders.find();
		res.status(200).json(orders);
		// console.log(req.length);
	} catch (error) {
		console.error(error);
		res.send(error.message);
	}
}

async function getOrder(req, res) {
	const { id } = req.params;
	console.log(id);

	try {
		const order = await Orders.findById(id);
		res.status(200);
		res.send(order);
	} catch (error) {
		console.error(error);
		res.send(error);
	}
}

async function postOrder(req, res) {
	const { quantity, name, price } = req.body;
	try {
		const products = await Products.findOne({ name: name });
		const result = products.toJSON();
		const id = result._id;
		const resultstr = outQoute(id);
		// const result = _id.replace(/'/g, '');
		console.log(resultstr);
		const makeOrder = await Orders.create({
			product_id: resultstr,
			price: price,
			quantity: quantity,
		});
		res.status(200).json(makeOrder);
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error);
	}
}

async function deleteOrder(req, res) {
	const { id } = req.params;
	console.log(id);

	try {
		const order = await Orders.findByIdAndDelete(id);
		res.status(200);
		res.json({ msg: 'Order Deleted Successfully' });
	} catch (error) {
		console.error(error);
		res.send(error);
	}
}

async function updateOrder(req, res) {
	const { id } = req.params;
	console.log(id);

	try {
		const order = await Orders.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200);
		res.send(order);
	} catch (error) {
		console.error(error);
		res.send(error);
	}
}

module.exports = {
	getOrders,
	getOrder,
	postOrder,
	deleteOrder,
	updateOrder,
};
