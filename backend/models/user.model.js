import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const  userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength:[6, 'Email must be at least 6 characters.'],
        maxLength:[50, 'Email must not exceed 50 characters.'],
    },
    password: {
        type: String,
        select:false,
        // select: false so that the password is not returned in the response and is not visible to the client.
    },
});

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateJWT = function () {
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET);
}

const User = mongoose.model('User', userSchema);
export default User;