import express from "express"
import { createPost } from "../Controllers/PostCtrl.js";
import {auth} from "../Middleware/validator.js";
const router = express.Router();


router.post('/create/post', auth, createPost)

export default router
