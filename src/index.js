import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on server ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("mongoDB connection error", err);
    process.exit(1);
  });
