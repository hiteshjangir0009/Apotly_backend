import { Router } from "express";
import { VerifyJWT } from "../Middlewares/Auth.middleware.js";
import { Create_adoption_request } from "../Controllers/adoption_req.controller.js";
import { addPet, getPets } from "../Controllers/pet_list.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";

const router = Router()



// register 
router.route('/add_pets').post(VerifyJWT,upload.single("avatar"),addPet)
router.route('/get_pets').get(VerifyJWT,getPets)





export default router