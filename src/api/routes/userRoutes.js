const express = require('express')

const userRoutes = () => {
    const userRouter = express.Router()
    const app = express()
    const userController = require('../controllers/userController')()


    userRouter.use((req, res, next) => {
        Object.setPrototypeOf(res, app.response)
        Object.setPrototypeOf(req, app.request)
        req.res = res
        res.req = req
        next()
    })
    userRouter.route('/')
    .get(userController.getUser)

    return userRouter
}

module.exports = userRoutes