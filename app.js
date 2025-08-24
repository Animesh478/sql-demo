const express = require("express");
const db = require("./utils/db-connection");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

// models
require("./Models");

const app = express();

// middleware
app.use(express.json());

app.use("/students", studentRoutes);
app.use("/course", courseRoutes);

// syncing the database
db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
