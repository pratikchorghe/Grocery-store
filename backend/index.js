const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    console.log(result);
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      const save = await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: "Error occurred while signing up", alert: false });
  }
});

//api login
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login is successful",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: "Error occurred while logging in", alert: false });
  }
});
// product section
const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

const productModel = mongoose.model("product", schemaProduct);

// save product in data
// api
app.post("/uploadProduct", async (req, res) => {
  try {
    const data = await productModel.create(req.body);
    console.log(data);
    res.send({ message: "Upload successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error uploading product" });
  }
});

// get all products
app.get("/products", async (req, res) => {
  try {
    const options = { maxTimeMS: 30000 }; // increase the timeout to 30 seconds
    const data = await productModel.find({}, null, options);
    res.send(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error retrieving products" });
  }
});

// get product by id
app.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productModel.findById(id);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error retrieving product" });
  }
});

// update product by id
app.put("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productModel.findByIdAndUpdate(id, req.body);
    if (data) {
      res.send({ message: "Product updated successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating product" });
  }
});

// delete product by id
app.delete("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await productModel.findByIdAndDelete(id);
    if (data) {
      res.send({ message: "Product deleted successfully" });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error deleting product" });
  }
});

//server is running
app.listen(PORT, () => console.log("Server is running at port: " + PORT));
