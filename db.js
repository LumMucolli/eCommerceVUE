const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/Ecommerce'; // Replace this with your MongoDB URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    console.log('MongoDB database initialized');
  })
  .catch(err => console.log('MongoDB connection error:', err));

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };