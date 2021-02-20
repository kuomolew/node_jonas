const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name!'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price!'],
  },
}); // создаем schema для базы данных. Все что не в ней при пост будет игнориться

const Tour = mongoose.model('Tour', tourSchema); // создаем tour для базы данных

module.exports = Tour;
