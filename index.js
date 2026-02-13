const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Route for best foods
app.get("/bestFoods", (req, res) => {
  res.sendFile(path.join(__dirname, "bestFoods.json"));
});

// Optional: root route
app.get("/", (req, res) => {
  res.send("Food Delivery API is running!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
