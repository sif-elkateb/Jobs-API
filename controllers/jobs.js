const { StatusCodes } = require("http-status-codes")



const getAllJobs=async(req,res,next)=>{
    res.status(StatusCodes.OK).json(req.user)
}
const addJob=async(req,res,next)=>{
    res.status(StatusCodes.OK).json({msg:'added  job'})
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