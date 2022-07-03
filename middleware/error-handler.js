const { StatusCodes } = require("http-status-codes")
const { CustomError } = require("../errors")


const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.stausCode).json({msg:err.message})
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err})
}

module.exports=errorHandlerMiddleware