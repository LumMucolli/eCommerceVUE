const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/Ecommerce'; // Replace this with your MongoDB URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    // Create the necessary collections and documents
    const Product = mongoose.model('Product', new mongoose.Schema({
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    }));
    await Product.create({ name: 'Example Product', description: 'An example product', price: 9.99, quantity: 10 });

    console.log('MongoDB database initialized');
  })
  .catch(err => console.log('MongoDB connection error:', err));