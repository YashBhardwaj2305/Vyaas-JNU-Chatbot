import mongoose,{Schema} from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const UserSchema=new Schema([
    {
    username:{
    type:String,
    required:true,
    unique:true    
}
},{
    email:{
        type:String,
        required:true
    }
},
{
    password:{
    type:String,
    required:true
}
}
])
UserSchema.pre("save",
    async function (next) {
    if(!this.isModified('password')) return next()
 this.password=await bcrypt.hash(this.password,10)
 next()}
)
UserSchema.methods.passcorrect=async function(password){
  try {    return await bcrypt.compare(password,this.password)
  } catch (error) {
     console.log("write correct pass",error);
    return false;
  }
} 
UserSchema.methods.genAccess=function(){
return jwt.sign({
    _id:this._id,
    username:this.username,
    password:this.password,
    email:this.email,
    
},process.env.AccessSecret,{expiresIn:process.env.AccessE})
}
UserSchema.methods.genRefresh=function(){
return jwt.sign({_id:this._id}, process.env.RefreshSecret,{expiresIn:process.env.RefreshE}) 
}

const User=mongoose.model("User",UserSchema)
export default User