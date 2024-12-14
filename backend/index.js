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

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// API Routes
app.use("/api/auth", authRouter);

// Serve Static Assets in Production
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "frontend", "dist"), {
      setHeaders: (res, filePath) => {
        // Manually set Content-Type for CSS files
        if (filePath.endsWith(".css")) {
          res.set("Content-Type", "text/css");
        }
        // Manually set Content-Type for JavaScript files
        if (filePath.endsWith(".js")) {
          res.set("Content-Type", "application/javascript");
        }
      },
    })
  );

  // Serve index.html for all non-API routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start the Server
app.listen(port, () => {
  DatabaseConnection();
  console.log(`listening on ${port}`);
});
