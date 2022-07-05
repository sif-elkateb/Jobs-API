const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");


const JobModel=require('../models/jobs');



const getAllJobs=async(req,res,next)=>{

    const {user:{userId}}=req;
    const jobsList=await JobModel.find({createdBy:userId}).sort('-createdAt');
    res.status(StatusCodes.OK).json({suceess:true,nOfJobs:jobsList.length,jobsList})
}
const addJob=async(req,res,next)=>{
    const {company,position,status}=req.body;

    if(!company||!position){

        throw new BadRequestError('you must provide both company and position')
    }
    const {user:{userId}}=req;
    
    const job=await JobModel.create({createdBy:userId,company,position,status});
    res.status(StatusCodes.CREATED).json({job});
}
const deleteJob=async(req,res,next)=>{

    const {user:{userId},params:{id:jobId}}=req;

    const job=await JobModel.findOneAndDelete({_id:jobId,createdBy:userId});

    if(!job){
        throw new NotFoundError('the job you want to delete  is not found ')
    }
    res.status(StatusCodes.OK).json({suceess:true,job})
}
const updateJob=async(req,res,next)=>{
    const {user:{userId},params:{id:jobId}, body:{company,position,status}}=req;

    // if(company===''||position===''){
    //     throw new BadRequestError('company or position can not be empty');
    // }

    const job=await JobModel.findOneAndUpdate({_id:jobId,createdBy:userId},{company,position,status},{new:true,runValidators:true});

    if(!job){
        throw new NotFoundError('the job you are trying to update  is not found ')
    }
    res.status(StatusCodes.OK).json({suceess:true,job})
}


const getJob=async(req,res,next)=>{
    const {user:{userId},params:{id:jobId}}=req;

    const job=await JobModel.findOne({_id:jobId,createdBy:userId});

    if(!job){
        throw new NotFoundError('the job you are looking for is not found ')
    }
    res.status(StatusCodes.OK).json({suceess:true,job})
}

module.exports={
    getAllJobs,getJob,addJob,deleteJob,updateJob
}