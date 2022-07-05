const { StatusCodes } = require("http-status-codes");
const { object } = require("joi");
const { CustomError } = require("../errors")


const errorHandlerMiddleware=(err,req,res,next)=>{
    // if(err instanceof CustomError){
    //     return res.status(err.statusCode).json({msg:err.message})
    // }



    const customError={
        message:err.message||'Error occured at the server please try again later',
        statusCode:err.statusCode||StatusCodes.INTERNAL_SERVER_ERROR
    }
    if(err.code=='11000'){
        console.log('yea yea yea yea ')
        customError.message='The '+Object.keys(err.keyValue).map(key=>`${key}`)+' you provided '+(Object.keys(err.keyValue).length>1?'are':'is')+' already taken';
        customError.statusCode=StatusCodes.BAD_REQUEST
    }
    console.log(err);
    res.status(customError.statusCode).json({msg:customError.message})
}

module.exports=errorHandlerMiddleware