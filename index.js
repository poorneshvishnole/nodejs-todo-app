const express = require("express");
const app = express();

require("dotenv").config();

const dbConnect = require("./config/database");
dbConnect();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});
