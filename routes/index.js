const express = require('express')
const router = express.Router();

const todos = [
  {
    id: 1,
    name: 'Go shopping',
    completed: false
  }
]

router.get('/', (req, res) => {
  res.json(todos)
})

module.exports = router