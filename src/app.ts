import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 9090;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/bai24", (req, res) => {
  res.send("hello bai24");
});
app.listen(PORT, () => {
  console.log(`run ok :${process.env.PORT} `);
});
