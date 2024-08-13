import express from "express";
import {
    getMyProfile,
    getAllUsers,
    login,
    register,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/register", register);

router.post("/login", login);

router.get("/profile", getMyProfile);

export default router;
