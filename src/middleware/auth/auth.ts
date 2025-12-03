import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";

const auth = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("You are authothorized");
      }

      let decoded = jwt.verify(
        token,
        config.privateKey as string
      ) as JwtPayload;

      req.user = decoded;

      next();
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
};

export default auth;
