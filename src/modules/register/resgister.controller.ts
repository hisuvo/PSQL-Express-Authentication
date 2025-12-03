import { Request, Response } from "express";
import { userService } from "./register.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body);

    if (result.rows.length === 0) {
      return res.status(204).json({
        success: false,
        message: "No content",
      });
    }

    res.status(201).json({
      success: false,
      message: "Data upload successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const userController = {
  createUser,
};
