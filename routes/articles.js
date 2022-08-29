const fs = require("fs")
const slugify = require("slugify")
const { body, validationResult } = require("express-validator")
const express = require("express")
const app = express()

// request to get all articles

app.get("/", (req, res) => {
  fs.readFile("./articles.json", (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      res.json(JSON.parse(data.toString()))
    }
  })
})

// request to get one article by slug

app.get("/:slug", (req, res) => {
  fs.readFile("./articles.json", (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      const articles = JSON.parse(data.toString())
      const findedArticle = articles.find((article) => {
        return article.slug === req.params.slug
      })
      res.json(findedCategory)
    }
  })
})

// request to post a new article

app.post("/:slug", (req, res) => {
  const newArticle = { ...req.body, category: req.params.slug, slug: "" }

  fs.readFile("./articles.json", (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      const articles = JSON.parse(data.toString())
      articles.push(newArticle)
      fs.writeFile("./articles.json", JSON.stringify(articles), (err) => {
        if (err) {
          console.log(err)
          return
        } else {
          res.json(newArticle)
        }
      })
    }
  })
})

module.exports = app
