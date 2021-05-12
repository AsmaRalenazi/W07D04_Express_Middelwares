
const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());


const users = ["John", "Mark"];

app.get("/users", (req, res, next) => {
    res.json(users);
  });

 //q1
 //Create a middleware function logUsers that logs the users array then invokes the next middleware.
const logUsers=(req,res,next)=>{
    console.log(users)
    next()
}
//q2
//application-level middleware.
app.use(fun0);





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});