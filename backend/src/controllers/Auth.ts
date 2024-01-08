import { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
//User Registration

export const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    let user = await User.findOne({
      email,
    });

    //Check if user exist
    if (user) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    //Create New User
    user = new User({
      email,
      password,
      firstName,
      lastName,
    });

    //Save new user to the database
    await user.save();

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 8645000000,
    });
    return res.status(200).send({ message: "User successfully registered" });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, message: "Internal Server Error, try again" });
  }
};

//User Login
// export const login = async (req: Request, res: Response) => {
//   try {
//   } catch (error) {}
// };
