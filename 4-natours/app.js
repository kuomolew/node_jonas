const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware!');
  next(); // обязательно вызываем next, иначе застрянем в middlware!!!
}); // декларируем middleware с третьим аргументом функции (в данном случае next)

app.use((req, res, next) => {
  req.requesTime = new Date().toISOString();
  next();
});

// 3) ROUTES

app.use('/api/v1/tours', tourRouter); // маунтим его
app.use('/api/v1/users', userRouter);

module.exports = app;
