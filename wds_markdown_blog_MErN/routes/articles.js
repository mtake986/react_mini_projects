const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('articles/new')
})

router.post('/', (req, res) => {
  
})


module.exports = router

/* 
router.get('[LINK]', (req, res) => {
  res.render('[FILENAME]')
})
*/