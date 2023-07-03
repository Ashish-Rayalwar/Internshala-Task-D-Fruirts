const express = require("express");
const router = express.Router();
const { fruits } = require("./data");
const app = express();

app.get("/fruits", (req, res) => {
  const sortFruitsByColor = fruits.sort((a, b) =>
    a.color.localeCompare(b.color)
  );
  return res.status(200).json({ data: sortFruitsByColor });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
