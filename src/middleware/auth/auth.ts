import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";

const auth = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      const decoded = jwt.verify(token!, config.privateKey!) as JwtPayload;

      res.user = decoded;

      next();
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
};

export default auth;
