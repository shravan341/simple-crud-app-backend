const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const  productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
//form url encoded 
app.use(express.urlencoded({ extended: false}));

//routes 
app.use('/api/products',productRoute);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});

app.get("/", (req, res) => {
  res.send("Hell from backend server");
});



mongoose
  .connect(
    "mongodb+srv://shravankumar21a:30i6bdgItGMyUQGo@backend.1rgwb.mongodb.net/?retryWrites=true&w=majority&appName=backend"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });
