const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 4000;

//Routes
const playerRoutes = require('./Router/PlayerRoutes')




const app = express();
app.use(express.json());
app.use(cors())

const mongoDBURL = "mongodb+srv://asifsiddiqui9011:6BqVn1xUg0Gkw8XN@cluster0.vvlp9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//api calls
app.use("/api", playerRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
