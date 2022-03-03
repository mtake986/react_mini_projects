// @desc get all transactions 
// @route GET /api/v1/transactionsRouter
// @access Public
exports.getTransaction = (req, res, next) => {
  res.send('get transaction')
}

// @desc Add a transaction
// @route POST /api/v1/transactionsRouter
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('add a transaction')
}

// @desc delete a transaction
// @route DELETE /api/v1/transactionsRouter/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send(`delete id is ${req.params.id}`)
} 