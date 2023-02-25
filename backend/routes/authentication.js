import express from "express";
import {login,register,logout} from "../controllers/auth.js"
import cors from 'cors'
const router = express.Router()

router.post('/register',register)
router.post('/login',cors(),login)
router.get('/logout',logout)
export default router
