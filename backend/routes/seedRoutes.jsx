import express from 'express';
import Product from '../models/productModel.jsx';
import data from '../data.jsx';
import User from '../models/userModel.jsx';


const seedRouter = express.Router();

seedRouter.get ('/', async (req,res) => {
    await Product.remove({});
    const craetedProducts = await Product.insertMany(data.products);
    await User.remove({});
    const createUsers = await User.insertMany(data.users);
    res.send ({craetedProducts, createUsers });

});
export default seedRouter;
