import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.SECRET_KEY;

const tokenString = jwt.sign({ userID: "a12345" }, secretKey);

const token = jwt.verify(tokenString, secretKey, (error, data) => {
  if (error) {
    console.log("Token驗證失敗");
  } else {
    console.log("Token驗證成功", data);
  }
});
