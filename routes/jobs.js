const express=require('express');
const { getAllJobs, addJob, getJob, deleteJob, updateJob } = require('../controllers/jobs');

const jobRouter=express.Router();



jobRouter.route('/').get(getAllJobs).post(addJob)



jobRouter.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);



module.exports=jobRouter