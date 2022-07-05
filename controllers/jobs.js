const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");


const JobModel=require('../models/jobs');



const getAllJobs=async(req,res,next)=>{

    const {user:{userId}}=req;
    const jobsList=await JobModel.find({createdBy:userId});
    res.status(StatusCodes.OK).json({jobsList})
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
    res.status(StatusCodes.OK).json({msg:'deleted job'})
}
const updateJob=async(req,res,next)=>{
    res.status(StatusCodes.OK).json({msg:'updated  job'})
}
const getJob=async(req,res,next)=>{
    res.status(StatusCodes.OK).json({msg:'got the job'})
}

module.exports={
    getAllJobs,getJob,addJob,deleteJob,updateJob
}