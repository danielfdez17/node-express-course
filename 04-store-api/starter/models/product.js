const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxLength: [120, 'Product name should not exceed 120 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price'],
    maxLength: [8, 'Product price should not exceed 8 characters'],
    default: 0.0
  },
  featured: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: [true, 'Please enter product description']
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'marcos'],
      message: '{VALUE} is not supported'
    }
  }
})

module.exports = mongoose.model('Product', productSchema)
