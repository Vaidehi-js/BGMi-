const express = require ('express');
const userRouter = require ('.routers/userRouter');
const cors = require ('cors');

//initializing express
const app =express();
const port = 5000;

app.use (cors({
    origin : ['http://localhost3000']
}))

//middleware here
app.use('/user', userRouter);



//to start the server
app.listen(port,() => {
    console.log("express server starter");
})