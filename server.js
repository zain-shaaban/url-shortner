const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded({ extended: false }));
app.use("/",require("./routes/urls.routes"))

PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listining on port ${PORT}`));
