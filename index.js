const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const categoriesRoutes = require("./routes/categories")
const articlesRoutes = require("./routes/articles.js")

const port = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.json("Mini-blog API")
})

app.use("/articles", articlesRoutes)
app.use("/categories", categoriesRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
