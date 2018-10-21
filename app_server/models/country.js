const mongoose = require('mongoose');

const bookinngSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capital: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    min: 0
  },
  religions: [String],
  currency: String
});
