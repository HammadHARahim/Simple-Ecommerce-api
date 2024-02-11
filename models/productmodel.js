const express = require('express');
const routers = express.Router();
const {
	getProduct,
	getProducts,
	postProduct,
} = require('../controller/product');

const {
	getOrders,
	getOrder,
	postOrder,
	deleteOrder,
	updateOrder,
} = require('../controller/order');

routers.get('/products/id=:id', getProduct);
routers.get('/products/', getProducts);
routers.post('/products/', postProduct);

// orders routes
routers.get('/orders/', getOrders);
routers.get('/orders/id=:id', getOrder);
routers.post('/orders/', postOrder);
routers.delete('/orders/id=:id', deleteOrder);
routers.put('/orders/id=:id', updateOrder);

module.exports = routers;
