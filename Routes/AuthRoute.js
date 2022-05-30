import express from "express"

const router = express.Router();

import { login, signUp } from "../Controllers/AuthCtrl.js";

router.post('/', signUp),

router.post('/login', login)

export default router
