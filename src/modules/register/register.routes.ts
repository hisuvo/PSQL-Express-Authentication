import { Router } from "express";
import { userController } from "./resgister.controller";

const router = Router();

router.post("/", userController.createUser);

export const userRouter = router;
