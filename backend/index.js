import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userrouter from './routes/user.route.js'
import db from './database/connetion.js'
const app= express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
dotenv.config(
  {  path:'./.env'}
)
   
app.use("/api/data",userrouter)
db()
.then(()=>{
  app.listen(process.env.Port,()=>{
    console.log(`server is running at port ${process.env.Port}`); 
})
})
.catch((err)=>console.log(err)
)