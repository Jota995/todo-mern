const express = require('express')

const taskController = require('../controller/task')

const router = express.Router()

router.get('/:userId', taskController.getAllTasks)
router.post('/',taskController.createTask)
router.put('/:id',taskController.updateTask)
router.put('/toggleComplete/:id', taskController.toggleComplete)
router.delete('/:userId/:id', taskController.deleteTask)

module.exports = router