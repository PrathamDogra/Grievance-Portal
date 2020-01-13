const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const userRoute = require("./Routes/Users");
const complaintRoute = require("./Routes/Complaint");

app.use("/users", userRoute);
app.use("/complaint", complaintRoute);
const uri = process.env.ATLAS_URI;
mongoose
  .connect(process.env.MONGODB_URI || uri, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() =>
    console.log("The connection to MongoDB is established successfully")
  )
  .catch(err => console.log(err));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is Up and Running"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  `Server is running at ${port}`;
});
