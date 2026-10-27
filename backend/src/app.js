import express from "express";
import connectDB from "../config/database.js";
import signupRouter from "./Router/signupRouter.js";
import cors from "cors";


const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));

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