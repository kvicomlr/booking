import express from "express";
import { register } from "../controllers/Auth";
const router = express.Router();

//Register New User
router.post("/register", register);
// router.post("/login", login);

export default router;
