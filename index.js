require("dotenv").config()
const express = require("express")
const app = express()
const Store = require("./services/Store")
const store = new Store()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", function (req, res) {
  const { body: data } = req
  try {
    res.json({ value: store.get(data.key), ip: IP, port: PORT })
  } catch (error) {
    res.json({ error: error.message })
  }
})

app.post("/", function (req, res) {
  const { body: data } = req
  try {
    res.json({ value: store.save(data.key, data.value), ip: IP, port: PORT })
  } catch (error) {
    res.json({ error: error.message })
  }
})

app.delete("/", function (req, res) {
  const { body: data } = req
  try {
    res.json({ value: store.delete(data.key), ip: IP, port: PORT })
  } catch (error) {
    res.json({ error: error.message })
  }
})

app.get("/db", (req, res) => {
  res.json(store.getStore())
})

app.put("/db", (req, res) => {
  const { body: data } = req
  console.log(data.newStore)
  res.json(store.setStore(data.newStore))
})

IP = process.argv[3] || "localhost"
PORT = parseInt(process.argv[2]) || 3000
app.listen(PORT, function () {
  console.log(`Listen http://${IP}:${PORT}`)
})
