import express, { Request, Response } from "express";

const app = express();

// parse
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    title: "Athentication Flow Server",
    author: "Develop By Suvo Data",
  });
});

// 404 eroor
app.use((req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
