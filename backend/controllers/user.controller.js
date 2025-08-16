import User from '../models/User.model.js'
import apierr from '../utils/apierr.js'
import apires from '../utils/apires.js'
const generateAccessRefresh=async(_id)=>{
    try {
        const user=await User.findById(_id)
        const accesst=user.genAccess()
        const refresht= user.genRefresh()
        user.refreshtoken=refresht
       await user.save({validateBeforeSave:false})
        return {accesst,refresht}
    } catch (error) {
        throw new apierr(400,"can't generate accesst or refresht")
    }
}
const registration=async (req,res)=>{
    const {username,password,email}=req.body
    if(!(username&&password&&email)) 
        throw new apierr(400,"all fields are required")
     if(username.trim()===""){
        throw new apierr(400,"username is required")
      }
    if(password.trim()===""){
        throw new apierr(400,"password is required")
     }
    if(email.trim()===""){
        throw new apierr(400,"email is required")
     }
        const existingUser=await User.findOne({email:email.trim()})
        if(existingUser) throw new apierr(400,"Email already in use")
        const user=await User.create({
   username,password,email
        })
        res.status(200).json(
   new apires(200,"Registered successfully",user)
        );
}

const Login=async(req,res)=>{
    const {username,password}=req.body
    if(!(username && password)){throw new apierr(402,"All fields are required")}
    const user=await User.findOne({username})   
    if(!user) throw new apierr(404,"user not found")
   const checkpass=await  user.passcorrect(password)
if(!checkpass) throw new apierr(400,"password is incorrect")
const loginuser= await User.findById(user._id).select("-password")
res
.status(200)
.json(new apires(200,"logged in successfully", {user:loginuser}))
}
// const Logout=async(req,res)=>{
//     const user=await User.findByIdAndUpdate(req.user._id,{$unset:{refreshtoken:1}})  
//     const options = {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production'
//     }
//     res
//     .status(200)
//     .clearCookie("accesst",options)
//     .clearCookie("refresht",options)
//     .json(new apires(200,"user Logout successfully",user))
// }

export {registration,Login}








































































