const express = require('express')
const { createTodo, getAllTodos, deleteTodo } = require('./todoController')
const router = express.Router()



router.post('/addtodo', createTodo)
router.get('/alltodos', getAllTodos)
router.delete('/deletetodo/:id', deleteTodo)

module.exports = router
