const Products = require('../models/mongoose_products_schema');
async function getProducts(req, res) {
	const products = await Products.find({});
	res.status(200).json({ products });
}

async function getProduct(req, res) {
	const { id } = req.params;
	console.log(id);

	try {
		const product = await Products.findById(id);
		res.status(200);
		res.send(product);
	} catch (error) {
		console.error(error);
		res.send(error);
	}
}

// add product to collection
////////////////////////////////
async function postProduct(req, res) {
	const { name, price, description, stock } = req.body;
	const product = {
		name: name,
		price: price,
		description: description,
		stock: stock,
	};
	// product to inserd into database
	try {
		const _produstExist = await Products.exists({ name: name });
		if (_produstExist != null) {
			res.status(409);
			res.send('Product already exist');
			console.log(`Product ${_produstExist._id} exist log;`);
			return;
		} else {
			const _product = await Products.create(product);
			if (_product) {
				console.log(`Product : ${_product.name} Created.`);
			}
			res.status(200).json(product);
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = { getProduct, getProducts, postProduct };
