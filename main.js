
const express = require("express");

const app = express();
const port = 3000;
//q4 Pulse Check
app.use(express.json());

//q1 Practice
const authRouter=express.Router();
const productRouter=express.Router();

const users = ["John", "Mark"];

//q5 Pulse Check
app.get("/users", (req, res, next) => {
    if(users.length === 0) {
        const err = new Error("no users");
  err.status = 500;
  
  next(err);
    }
    res.json(users);
  });
//Pulse Check
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
    
            res.json(users);  });


//q2
//Add a new route /users/create that will add a new user to the users array,
// and create a middleware that will log 
//the request body if found (use the correct HTTP method).

authRouter.post("/users/create", (req, res, next) => {

    const newUSER = req.body.name
    users.push(newUSER)
    
    res.json(users); 
 });


 app.use(authRouter)




//q3
//Create a new express router to handel all requests to /products then 
//use it in the app.

productRouter.get("/products", (req, res, next) =>{

})

app.use(productRouter)


//q4
//Create a products array that has the following items keyboard,
// mouse and then add a route to update the items /products/update 
//in the array, it should replace one of the values with the new value.

 const products=["keyboard","mouse"]

 authRouter.post("/products/update", (req, res, next) =>{
  const updateUser=req.body.name
  products.push(updateUser)
  res.json(products)
 })


//q5
//Create a new router-level middleware attached on the products router 
//that will log the products router at every HTTP request.
productRouter.get((req, res, next) =>{
next()
})


//q6
//Create an application-level error-handling middleware,
// that has the message of NOT FOUND and a status code of 404 
//and that will be called when trying to access an unassigned endpoints.

app.get ((err,req,res,next)=>{

   const Err=new Error("NOT FOUND")
   Err.status=404
   next(err) 
})







  //q5 Pulse Check
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