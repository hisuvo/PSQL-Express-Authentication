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

const getUser = async (req: Request, res: Response) => {
  try {
    const reslut = await userService.getUser();

    if (reslut.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      succss: true,
      message: "Data trived successfully",
      data: reslut.rows,
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
  getUser,
};
