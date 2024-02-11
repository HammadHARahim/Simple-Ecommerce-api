require('dotenv').config();
const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, async () => {
	await mongoose
		.connect(process.env.MONGO_URI)
		.then((result) => {
			console.log('connected');
		})
		.catch((err) => {
			console.error(err);
		});
	console.log(`Server is running on port ${port}`);
});
