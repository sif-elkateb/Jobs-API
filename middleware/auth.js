const jwt=require('jsonwebtoken');
const { AuthenticationError } = require('../errors');



const authenticateUser=(req,res,next)=>{

    const {authorization}=req.headers;

    if(!authorization||!authorization.startsWith('Bearer ')){
        throw new AuthenticationError('no token provided')
    }
    try{
        const token=authorization.split(' ')[1];
        const decoded=jwt.verify(token,process.env.SECRET_KEY);

        const {userName,userId}=decoded;

        req.user={userName,userId};

        next();
        

    }
    catch(err){
        throw new AuthenticationError('invalid token')
    }

}

module.exports=authenticateUser;