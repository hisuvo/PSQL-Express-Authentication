import express, { Request, Response } from "express";
import initDB from "./config/DB";
import { userRouter } from "./modules/register/register.routes";
import { loginRouter } from "./modules/login/login.routes";
import auth from "./middleware/auth/auth";

const app = express();

// parse
app.use(express.json());

// DB
initDB();

app.get("/", auth(), (req: Request, res: Response) => {
  res.status(200).json({
    title: "Athentication Flow Server",
    author: "Develop By Suvo Data",
    user: req.user,
  });
});

// Routes:
app.use("/auth", userRouter);
app.use("/login", loginRouter);

// 404 eroor
app.use((req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
