const { StatusCodes } = require("http-status-codes");


const CustomError = require("./custom-error");

class AuthenticationError extends CustomError {
    constructor(message){
        super(message);
        this.statusCode=StatusCodes.UNAUTHORIZED
        
    }
}


module.exports=AuthenticationError