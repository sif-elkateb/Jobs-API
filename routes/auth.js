const express=require('express');
const { loginUser, registerUser } = require('../controllers/auth');

const authRouter=express.Router();




authRouter.route('/login').post(loginUser)
authRouter.route('/register').post(registerUser)


module.exports=authRouter