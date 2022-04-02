import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: { type: String, require: true, },
        email:{ type: String, require: true, unique: true },
        password: { type: String, require: true, unique: true },
        isAdmin: { type: Boolean, default: false, require: true },

    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('User', userSchema);
export default User;