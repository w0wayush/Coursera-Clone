const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://pandeysmokey:EKODbRbTVPbd32Be@cluster0.asdhhnf.mongodb.net/course"
    )
    .then(() => {
      console.log("DB Connection successful");
    })
    .catch((err) => {
      console.log("Issue in DB Connection");
      console.error(err.message);
      //console.log(`Error in connection: ${err.message}`)
      process.exit(1);
    });
};

dbConnect();

app.listen(3000, () => console.log("Server running on port 3000"));
