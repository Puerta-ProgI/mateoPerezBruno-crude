const express = require("express");
const app = express();
app.listen(3031, ()=>console.log("Server ON. Puerto 3031"));

// app.get("/", (req, res)=>{
//     res.send("<h1>Hello World</h1>")
// })

const mainRouter = require("./router/main-router.js");

app.use(mainRouter);