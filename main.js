
const express = require("express");

const app = express();
const port = 3000;
//q4
app.use(express.json());

//q1 Practice
const authRouter=express.Router();

const users = ["John", "Mark"];

app.get("/users", (req, res, next) => {
    if(users.length === 0) {
        const err = new Error("no users");
  err.status = 500;
  // pass it to next, we only pass values to `next` when we want to call the error handling middleware
  next(err);
    }
    res.json(users);
  });

 //q1
 //Create a middleware function logUsers that logs the users array
 // then invokes the next middleware.
const logUsers=(req,res,next)=>{
    console.log(users)
    next()
}
//q2
//application-level middleware.
app.use(logUsers);

//q3
//Create a middleware function logMethod that logs the HTTP method 
//and use it on the /users route.

const logMethod=(req,res,next)=>{
console.log(req.method);
next()
}
//the HTTP method 
//and use it on the /users route.
app.use("/users", logMethod)

//q4
//Use the right builtin middleware to parse JSON payloads from the request.

//solve line 7

//q5
//Create an application-level error-handling middleware that will be called if 
//the users array is empty,the middleware should have the message No users,
// empty the array to test it out.

// app.use ((err,req,res,next)=>{
//     if(users === empty){
//         next(err)
//     }
// })

// app.use ((err,req,res,next)=>{
// const err = new Error("No users")
// err.status=500;
// res.json(err)
// })

//Practice
//q1
//Create a new express router to handel all requests to /users,
//.. and use it in the application, the endpoint /users should return all users.
authRouter.get("/users", (req, res, next) => {
    
    // if(users.length === 0) {
    //             const err = new Error("no users");
    //       err.status = 500;
    //       // pass it to next, we only pass values to `next` when we want to call the error handling middleware
    //       next(err);
    //         }
            res.json(users);  });

app.use(authRouter)







  app.use((err, req, res, next) => {
    // set the status code
    res.status(err.status);
    // send the response in JSON format
    res.json({
      error: {
        status: err.status,
        message: err.message,
      },
    });
  });




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});