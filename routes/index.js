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

router.get('/:id', (req, res) => {
  const foundTodo = todos.find(todo => todo.id === Number(req.params.id))
  res.json(foundTodo)
})

module.exports = router