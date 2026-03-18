import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:8000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Routes
import healthCheckRoute from "./routes/healthCheck.routes.js";
import UserRoute from './routes/user.routes.js'

app.use("/api/v1/healthcheck", healthCheckRoute);
app.use("/api/v1/users", UserRoute)

export default app;
