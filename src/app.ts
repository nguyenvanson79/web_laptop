import express from "express";
const app = express();
const PORT = 9090;

app.get("/", (req , res) => {
  res.send ("hello");
});
app.get("/bai24", (req , res) => {
  res.send ("hello bai24");
});
app.listen(PORT, () =>{
  console.log(`run ok :${PORT} `)
});
