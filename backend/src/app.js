import express from "express";
import connectDB from "../config/database.js";
import signupRouter from "./Router/signupRouter.js";

const app = express();

app.use(express.json());
app.use("/",signupRouter);

connectDB()
    .then(()=>{
        app.listen(3000,()=>{
            console.log("server connected");
        })
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    })