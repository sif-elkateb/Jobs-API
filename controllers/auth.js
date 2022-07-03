const { StatusCodes } = require("http-status-codes")




const registerUser=async(req,res,next)=>{
    res.status(StatusCodes.CREATED).json({msg:'registered User'})
}


const loginUser=async(req,res,next)=>{
    res.status(StatusCodes.OK).json({msg:'logged User'})
}

module.exports={loginUser,registerUser}