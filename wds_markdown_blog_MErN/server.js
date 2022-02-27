const express = require("express")
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  const articles = [{
    title: "Test Article", 
    createdAt: new Date(), 
    description: "test description"
  },{
    title: "Test Article2", 
    createdAt: new Date(), 
    description: "test description"
  }]

  res.render('articles/index', { articles: articles })
})


app.listen(5000)


// ?   res.render('index', { articles: articles }) => just passing any object we want with any keys any values and this is gonna be available in our index.ejs