require('dotenv').config();
require('express-async-errors');
const express=require('express');
const { StatusCodes } = require('http-status-codes');
const morgan=require('morgan');
const authenticateUser = require('./middleware/auth');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundHandler = require('./middleware/not-found');
const authRouter = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const startServer = require('./start-server');

const app=express();

const port =process.env.PORT||3000;

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

app.use(morgan('tiny'));

//routes

/*
auth ->

app.get('/api/v1/auth/login')  --->  loginUser()   
app.get('/api/v1/auth/register)  --->  registerUser()   


Job -->

app.get('api/v1/jobs')      getAllJobs()
app.post('api/v1/jobs')      addJob()
app.get('api/v1/jobs/:id')      getJob()
app.delete('api/v1/jobs/:id')      deleteJob()
app.patch('api/v1/jobs/:id')      updateJob()

*/

app.get('/',(req,res)=>{
    res.status(StatusCodes.OK).json({msg:'welcome to the API'})
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',authenticateUser,jobRouter)



app.use(notFoundHandler);
app.use(errorHandlerMiddleware);




startServer(app,port);
