import Users from "../../models/Users.js";
import validator from "validator";
import express from "express";
import User from "../../../../game_vault/src/models/User.js";


const signupRouter = express.Router();

signupRouter.post("/signup",async(req,res)=>{
    try{
        console.log(req.body);
        const email = req.body.email;

        if(!req.body.username){
            res
                .json({
                    message : "Username is required"
                })
        }

        if(!validator.isEmail(email) || !email){
            res
                .json({
                    message : "This is not a valid Email"
                })
        }

        const emailfound = await Users.findOne({email : req.body.email})

        if(emailfound){
            res
                .json({
                    message : "User already exist"
                })
        }

        const password = req.body.password;

        const isValidPassword = validator.isStrongPassword(password);

        if(!isValidPassword){
            res
                .json({
                    message : "Enter a Strong password"
                })
        }

        let user = new Users({
            username : req.body.username,
            email : req.body.email,
            password : password,
            age : req.body.age
        });
       
        await user.save();
        res
            .status(200)
            .json({message : "User saved successfully"})
    }
    catch(error){
        res
            .json({
                message : `something went wrong : ${error}`
            })
    }
    
    
})
export default signupRouter;