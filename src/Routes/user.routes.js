import { Router } from "express";
import { VerifyJWT } from "../Middlewares/Auth.middleware.js";
import { Add_adopted_pet, Update_address, User_login, User_register } from "../Controllers/user.controller.js";


const router = Router()



// register 
router.route('/register').post(User_register)

// login
router.route('/login').post(User_login)

// add address
router.route('/address').post(VerifyJWT, Update_address)

// add adopted pet
router.route('/adopted_pet').post(VerifyJWT, Add_adopted_pet)




export default router