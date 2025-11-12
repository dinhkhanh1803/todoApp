import express from "express";
import taskRouter from "./routers/taskRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors({ origin: ["http://localhost:5173/"] }));

app.use("/api/tasks", taskRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server start port ${PORT}`);
  });
});

// MONGODB_CONNECTIONSTRING =
//   "mongodb+srv://capy1803:j2wxNprmnnkBxxkT@cluster0.pxmog2w.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";
// PORT = 5001;
