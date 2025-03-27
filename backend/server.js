import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import { connectDB } from "./lib/db.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}))

// API Endpoints
app.get("/", (req, res) => {
    res.send("API is running...")
})
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

connectDB()