import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
//  -> * means import everything from the user.controller.js file. This way, we can access all the functions exported from the user.controller.js file using the userController object.
import { body } from "express-validator";

const router=Router();

router.post('/register', 
    body('email').isEmail().withMessage('Please enter a valid email address.'),
    body('password').isLength({min: 3}).withMessage('Password must be at least 3 characters long.'),

    userController.createUserController);


export default router; 