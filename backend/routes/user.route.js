import {Login,registration} from "../controllers/user.controller.js"
import VerifyJwt from '../middleware/auth.js' 
import {Router} from 'express'
const userrouter=Router()
userrouter.route('/register').post(registration)
userrouter.route('/login').post(Login)
// userrouter.route('/logout').get(VerifyJwt,Logout)
export default userrouter;
