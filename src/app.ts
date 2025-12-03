import express, { Request, Response } from "express";
import initDB from "./config/DB";
import { userRouter } from "./modules/register/register.routes";

const app = express();

// parse
app.use(express.json());

// DB
initDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    title: "Athentication Flow Server",
    author: "Develop By Suvo Data",
  });
});

// Routes:
app.use("/users", userRouter);

// 404 eroor
app.use((req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
