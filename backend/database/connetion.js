import express from 'express'
import mongoose from 'mongoose'
const db=async(req,res)=>{
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log("connected!!");
    } catch (error) {
        console.log(error);
        
    }
    
}
export default db