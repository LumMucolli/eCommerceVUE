const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Product } = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Get all products
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get a single product
app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Create a new product
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Update an existing product
app.put('/api/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// Delete a product
