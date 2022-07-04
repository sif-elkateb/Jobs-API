const { StatusCodes } = require("http-status-codes");
const UserModel = require("../models/user");

const bcrypt=require('bcryptjs');
const { BadRequestError } = require("../errors");



const registerUser=async(req,res,next)=>{


    const {name,password,email}=req.body;

    if(!password||!email||!name){
        throw new BadRequestError('you must provide name,email and password');
    }


    const salt=await bcrypt.genSalt(10);

    const hashPassword=await bcrypt.hash(password,salt);

    const tempUser={name,password:hashPassword,email};
    const user=await UserModel.create(tempUser);
    res.status(StatusCodes.CREATED).json({user})
}


const loginUser=async(req,res,next)=>{
    
    res.status(StatusCodes.OK).json({msg:'logged User'})
}

module.exports={loginUser,registerUser}