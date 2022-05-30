import express from "express"
import {auth} from "../Middleware/validator.js";
const router = express.Router();


router.post('/create/cat', auth, createPost)

export default router
