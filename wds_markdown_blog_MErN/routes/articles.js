const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})

router.get('/:slug', async (req, res) => {
  console.log("obfnsav")
  try {
    console.log("try")
    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) res.redirect('/')
    console.log(article)
    res.render('articles/show', { article: article })
  } catch (e) {
    console.log("catch")
    console.log(e)
  }
  // res.render('articles/show', { article: article })
})

router.post('/', async (req, res) => {
  console.log('1')
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  })
  try {
    console.log('2')
    article = await article.save()
    console.log('2.1')
    res.redirect(`/articles/${article.slug}`)
    console.log('2.2')
  } catch (e) {
    console.log('3')
    console.log(e)
    res.render('articles/new', { article: article })
  }
})

method="DELETE"
router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

module.exports = router

/*
router.get('[LINK]', (req, res) => {
  res.render('[FILENAME]')
})
*/

// ? await article.save() => this is asynchronous function so we just wanna make sure we set this up inside of our own async function and we await this article that save 