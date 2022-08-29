const fs = require("fs")
const { body, validationResult } = require("express-validator")
const express = require("express")
const app = express()

// request to get all categories

app.get("/", (req, res) => {
  fs.readFile("./categories.json", (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      res.json(JSON.parse(data.toString()))
    }
  })
})

// request to get one category by slug

app.get("/:slug", (req, res) => {
  fs.readFile("./categories.json", (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      const categories = JSON.parse(data.toString())
      const findedCategory = categories.find((category) => {
        return category.slug === req.params.slug
      })
      res.json(findedCategory)
    }
  })
})

// request to post a new category

app.post("/", (req, res) => {
  fs.readFile("./categories.json", (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      const categories = JSON.parse(data.toString())
      categories.push(req.body)
      fs.writeFile("./categories.json", JSON.stringify(categories), (err) => {
        if (err) {
          console.log(err)
          return
        } else {
          res.json(req.body)
        }
      })
    }
  })
})

module.exports = app
