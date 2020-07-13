const express = require("express");
const app = express();
const Store = require("./services/Store");
const store = new Store();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  const { body: data } = req;
  try {
    res.json({ value: store.get(data.key) });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/", function (req, res) {
  const { body: data } = req;
  try {
    res.json({ value: store.save(data.key, data.value) });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.delete("/", function (req, res) {
  const { body: data } = req;
  try {
    res.json({ value: store.delete(data.key) });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
