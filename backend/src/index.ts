import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

const PORT = process.env.Port;

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
//dBase
mongoose.connect(process.env.mongoDB as string);

app.get("/api/booking", async (req: Request, res: Response) => {
  res.json({
    meseage: "KVI Booking App",
  });
});

//Server
app.listen(PORT, () => {
  console.log(`1. Server is running on port: ${PORT}`);
});
