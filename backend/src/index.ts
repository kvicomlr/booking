import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import authRoutes from "./routes/auths";

const app = express();

const PORT = process.env.Port;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auths", authRoutes);
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
