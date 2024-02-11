const Orders = require('../models/mongoose_orders_schema');
const Products = require('../models/mongoose_products_schema');
const outQoute = require('../utilities/strfilter');

async function getOrders(req, res) {
	const orders = await Orders.find().populate('product_id');
	res.status(200).json({ orders });
}

async function getOrder() {}

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
		res.status(200).json({ makeOrder });
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error);
	}
}

async function deleteOrder() {}

async function updateOrder() {}

module.exports = {
	getOrders,
	getOrder,
	postOrder,
	deleteOrder,
	updateOrder,
};
