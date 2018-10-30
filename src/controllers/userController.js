const { User } = require('../models/index')

const create = async function (req, res) {
    // TODO: add uniqueness email constrain
    const params = req.body
    const user = await User.createUser(params)
    res.send(user)
}

module.exports = { create }