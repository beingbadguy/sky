import express from "express";
const app = express();
import { configDotenv } from "dotenv";
import path from "path";
import DatabaseConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";

import cors from "cors";

configDotenv();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  DatabaseConnection();
  console.log(`listening on ${port}`);
});
