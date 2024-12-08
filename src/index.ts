import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

const myvar = "ssss";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[Server] started on http://localhost:${PORT}`);
});
