const jwt=require('jsonwebtoken');



const authenticateUser=(req,res,next)=>{

    const {authorization}=req.headers;

    if(!authorization||!authorization.startsWith('Bearer ')){
        throw new authenticateUser('no token provided')
    }
    try{
        const token=authorization.split(' ')[1];
        const decoded=jwt.verify(token,process.env.SECRET_KEY);

        req.user={userName:decoded.name,userId:decoded.userId}
        

    }
    catch(err){
        throw new authenticateUser('invalid token')
    }

}