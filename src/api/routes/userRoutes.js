const express = require('express')

const userRoutes = () => {
    const userRouter = express.Router()
    const userController = require('../controllers/userController')()

    userRouter.route('/')
    .get(userController.getUser)

    return userRouter
}

module.exports = userRoutes