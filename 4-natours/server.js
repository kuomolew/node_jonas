const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
); // прописываем нашу базу данных

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB connection successful!');
  }); // подключаем ее

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
}); // создаем schema для базы данных

const Tour = mongoose.model('Tour', tourSchema); // создаем tour для базы данных

const testTour = new Tour({
  name: 'The Park Camper',
  price: 997,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('ERRorr', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
