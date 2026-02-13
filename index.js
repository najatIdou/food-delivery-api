const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Route for best foods
app.get("/bestFoods", (req, res) => {
  res.sendFile(__dirname + "/bestFoods.json");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
