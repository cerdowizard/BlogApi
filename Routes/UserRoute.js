import express from "express"
import { getUser, getUsers } from "../Controllers/UserCtrl.js";
import {auth} from "../Middleware/validator.js";
import {authAdmin} from "../Middleware/admin.js"
const router = express.Router();

router.get('/all',auth, authAdmin, getUsers)

router.get('/one/:id',auth, getUser)


export default router