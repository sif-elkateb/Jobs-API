const express=require('express');
const { loginUser, registerUser, getAllUsers } = require('../controllers/auth');

const authRouter=express.Router();



authRouter.route('/users').get(getAllUsers)
authRouter.route('/login').post(loginUser)
authRouter.route('/register').post(registerUser)


module.exports=authRouter