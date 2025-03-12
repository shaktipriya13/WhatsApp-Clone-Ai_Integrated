import e from "express";
import userModel from "../models/user.model.js";

export const createUser = async ({
    email,
    password
})=>{
    if(!email || !password){
        throw new Error('Email and password are required.');
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user =await userModel.create({
        email,
        password: hashedPassword,
    });

    return user;
}

// this service function creates a new user in the database. It first checks if the email and password are provided. If not, it throws an error. It then hashes the password using the hashPassword method from the userModel and creates a new user in the database using the create method from the userModel. It returns the newly created user.