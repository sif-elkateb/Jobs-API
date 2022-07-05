const { StatusCodes } = require("http-status-codes");
const UserModel = require("../models/user");

const { BadRequestError, AuthenticationError } = require("../errors");



//controller for testing only 
const getAllUsers=async(req,res,next)=>{
    const users=await UserModel.find({});
    res.status(StatusCodes.OK).json(users);
}




const registerUser=async(req,res,next)=>{
    
    const {name,email,password}=req.body;

    if(!name||!email||!password){
        throw new BadRequestError('name, email and password must all be provided in registration')
    }

    const user=await UserModel.create({name,email,password});

    const token=user.createJWT();
    res.status(StatusCodes.CREATED).json({userName:user.name,token})
}


const loginUser=async(req,res,next)=>{

    const {password,email}=req.body;
    if(!password||!email){
        throw new BadRequestError('bad request error you must provide both email and password');
    }

    const user=await UserModel.findOne({email});

    if(!user){
        throw new AuthenticationError('invalid credentials');
    }

    const temp=await user.comparePassword(password);

    if(!temp){
        throw new AuthenticationError('invalid credentials')
    }


    const token=user.createJWT();
    res.status(StatusCodes.CREATED).json({userName:user.name,token})
}

module.exports={loginUser,registerUser,getAllUsers}