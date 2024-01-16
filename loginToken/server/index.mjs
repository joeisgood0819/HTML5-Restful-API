import express from "express";
import multer from "multer";
import moment from "moment";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import users from "./users.mjs";
const upload = multer();
dotenv.config();
const secretKey = process.env.SECRET_KEY;

console.log(secretKey);

const wwhitelist = [
  "http://localhost:5500",
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  undefined,
];
const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (wwhitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("不允許傳遞資料"));
    }
  },
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("首頁");
});

app.post("/api/users/login", (req, res) => {
  res.status(200).json({ message: "login success" });
});

app.post("/api/users/logout", (req, res) => {
  res.status(200).json({ message: "logout success" });
});

app.post("/api/users/status", (req, res) => {
  res.status(200).json({ message: "login status checking success" });
});

app.listen(3000, () => {
  console.log("server at http://localhost:3000");
});
