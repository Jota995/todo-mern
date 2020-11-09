const express = require('express');
const authController = require('../controller/authorization')
const userController = require('../controller/user')

const router = express.Router()

router.post('/signup', userController.createUser)
router.post('/signin', authController.signIn)


module.exports = router