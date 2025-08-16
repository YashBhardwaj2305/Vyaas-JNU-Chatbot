import User from '../models/User.model.js'
import apierr from '../utils/apierr.js'
import jwt from 'jsonwebtoken'
const VerifyJwt=async(req,_,next)=>{
    try {  
                const token=req.cookies?.accesst
        if(!token) throw new apierr(401,"token is invalid")
            const decode=jwt.verify(token,process.env.AccessSecret)
        const user=await User.findById(decode._id).select("-password -refreshtoken")
        req.user=user
        next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw new apierr(401, "Invalid token");
        } else {
            throw new apierr(500, "Internal server error");
            console.log(error);
        }
    }
}
export default VerifyJwt