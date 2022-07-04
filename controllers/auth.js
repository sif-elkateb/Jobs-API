const { StatusCodes } = require("http-status-codes");
const UserModel = require("../models/user");

const { BadRequestError } = require("../errors");



const registerUser=async(req,res,next)=>{

    const user=await UserModel.create(req.body);
    res.status(StatusCodes.CREATED).json({user})
}


const loginUser=async(req,res,next)=>{
    res.status(StatusCodes.OK).json({msg:'logged User'})
}

module.exports={loginUser,registerUser}