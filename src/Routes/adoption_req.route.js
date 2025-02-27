import { Router } from "express";
import { VerifyJWT } from "../Middlewares/auth.middleware.js";
import { Create_adoption_request } from "../Controllers/adoption_req.controller.js";

const router = Router()



// register 
router.route('/adoption_req').post(VerifyJWT,Create_adoption_request)





export default router