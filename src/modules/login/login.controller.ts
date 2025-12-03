import { Request, Response } from "express";
import { loginServices } from "./login.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await loginServices.loginUser(req.body);

    if (!result) {
      return res.status(204).json({
        success: false,
        message: "No content",
      });
    }

    res.status(200).json({
      success: true,
      message: "login successfull",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const loginController = {
  loginUser,
};
