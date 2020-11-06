const express = require('express');
const userController = require('../controller/user')

const router = express.Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUser)


module.exports = router