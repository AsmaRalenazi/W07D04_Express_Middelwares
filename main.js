
const express = require("express");

const app = express();
const port = 3000;
//q4
app.use(express.json());


const users = ["John", "Mark"];

app.get("/users", (req, res, next) => {
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
app.use(logUsers );

//q3
//Create a middleware function logMethod that logs the HTTP method 
//and use it on the /users route.

const logMethod=(req,res,next)=>{
console.log(req.method);
next()
}
//the HTTP method 
//and use it on the /users route.
app.use("/users",logMethod)

//q4
//Use the right builtin middleware to parse JSON payloads from the request.

//solve line 7

//q5
//Create an application-level error-handling middleware that will be called if 
//the users array is empty,the middleware should have the message No users,
// empty the array to test it out.

app.get ("/users",(req,res,next)=>{
const err=new Error ("No users")
err.status=500;
next()
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});