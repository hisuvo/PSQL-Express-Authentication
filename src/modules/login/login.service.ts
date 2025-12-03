import bcrypt from "bcryptjs";
import { pool } from "../../config/DB";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (payload: Record<string, unknown>) => {
  const { email, password } = payload;

  const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
    email,
  ]);

  if (result.rows.length === 0) {
    null;
  }

  const user = result.rows[0];

  // check password is valid
  const isMatch = bcrypt.compare(password as string, user.password);

  if (!isMatch) {
    return false;
  }

  // creae token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    config.privateKey!,
    {
      expiresIn: "30d",
    }
  );

  return { sucess: true, token, user };
};

export const loginServices = {
  loginUser,
};
