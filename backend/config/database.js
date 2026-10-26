import { connect } from "mongoose";
import "dotenv/config.js";

const connectDb = async () => {
    try{
        console.log(process.env.MONGO_DB);
        await connect(process.env.MONGO_DB);
    }
    catch(error){
        res.json({message : "this is inside th db"})
    }
}

export default connectDb;