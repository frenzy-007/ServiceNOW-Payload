const express = require("express");
const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello there! Your Express server is working.");
});

// Another example route
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
    dummyData: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(1000),
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ".repeat(
        1000
      ),
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ".repeat(
        1000
      ),
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. ".repeat(
        1000
      ),
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. ".repeat(
        1000
      ),
    ],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
