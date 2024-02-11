const express = require('express');
const routers = require('./models/productmodel');

const app = express();
app.use(express.json());
app.use('/api/v1/', routers);
module.exports = app;
