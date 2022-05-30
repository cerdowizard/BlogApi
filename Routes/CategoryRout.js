import express from "express"
import { createCat } from "../Controllers/CategoryAuth.js";
import {authAdmin} from "../Middleware/admin.js"
import {auth} from "../Middleware/validator.js";
const router = express.Router();


router.post('/create', auth, authAdmin, createCat)

export default router
