import { Router } from "express";

import { login,signup,me } from "../controller/auth.controller";

const router = Router()


router.post("/login",  login);
router.get("/me",me);
router.post("/signup", signup);

export default router;