import { Router } from "express";
import { userController } from "./resgister.controller";
import auth from "../../middleware/auth/auth";

const router = Router();

router.post("/", userController.createUser);
router.get("/", auth(), userController.getUser);

export const userRouter = router;
