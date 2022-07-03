const connectDB = require("./db/connectDB");




const startServer=async(app,port)=>{
    try{
        await connectDB();
        console.log('\n connected successfully to the database');
        app.listen(port,()=>{
            console.log(`started listening at port ${port}`)
        })
        
    }
    catch(err){
        console.log(err);
    }

}

module.exports=startServer