const mongoose =require('mongoose');



const JobSchema=({
    company:{
        type:String,
        required:[true,'the company name must be provided'],
        maxLength:50
    },
    position:{
        type:String,
        required:[true,'the position must be provided'],
        maxLength:100
    },
    status:{
        type:String,
        enum:{
            values:['pending','interview','rejected'],
            message:'{VALUE} is not supported'
        },
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'the User must be provided']
    }
},{timestamps:true})


const JobModel=mongoose.model('Job',JobSchema);

module.exports=JobModel