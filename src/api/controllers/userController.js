const userController = () => {
    const getUser = (req, res) => {
        res.json({msg: 'hello user'})
    }
    return {
        getUser
    }
}

module.exports = userController