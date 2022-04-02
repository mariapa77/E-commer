import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.jsx';
import productRouter from '/routes/productRoutes.jsx';
import userRouter from './routes/userRoutes.jsx';
import orderRouter from './routes/orderRoutes.jsx';

dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('connected to db');
})
.catch((err) => {
    console.log(err.message);
});


const app = express();

app.use(express.json());
app.use(express. urlencoded ({extended: true}));

app.use ('/api/seed',seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders',orderRouter);

app.use ((err,req,res,next) => {
  res.status(500).send({message: err.message});
});

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
  });