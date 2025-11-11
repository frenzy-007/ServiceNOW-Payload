const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("✅ Express API is running on Vercel!");
});

// Add your routes here
app.get("/about", (req, res) => {
  res.json({
    "category-actions": {
      name: "Navigate To URL",
      type: "navigateTo",
      value: "Error! Hyperlink reference not valid.",
      foreground: true,
      authentication: true,
      destructive: false,
    },
  });
});

module.exports = app;
