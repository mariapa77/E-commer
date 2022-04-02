import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: { type: String, require: true, unique: true },
        slug: { type: String, require: true, unique: true },
        image: {ype: String, require: true },
        brand: {ype: String, require: true },
        category: {ype: String, require: true },
        description: {ype: String, require: true },
        price: {type: Number, require: true },
        countInStock: {type: Number, require: true },
        rating: {type: Number, require: true },
        numReviews:{type: Number, require: true },

    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;