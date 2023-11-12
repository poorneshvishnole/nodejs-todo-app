const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected succesfully"))
    .catch((error) => {
      console.log("something error");
      console.log(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
