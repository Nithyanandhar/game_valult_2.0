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
            return res
                .status(400)
                .json({
                    message : "Username is required"
                })
        }

        if(!validator.isEmail(email) || !email){
            return res
                .status(400)
                .json({
                    message : "This is not a valid Email"
                })
        }
        
        const password = req.body.password;
        const isValidPassword = validator.isStrongPassword(password);
        if(!isValidPassword){
            return res
                .status(400)
                .json({
                    message : "Enter a Strong password"
                })
        }
        
        const emailfound = await Users.findOne({email : req.body.email})

        if(emailfound){
            return res
                .status(400)
                .json({
                    message : "User already exist"
                })
        }




        let user = new Users({
            username : req.body.username,
            email : req.body.email,
            password : password,
            age : req.body.age
        });
       
        await user.save();
        return res
            .status(200)
            .json({message : "User saved successfully"})
    }
    catch(error){
        return res
            .status(400)
            .json({
                message : `something went wrong : ${error}`
            })
    }
    
    
})
export default signupRouter;