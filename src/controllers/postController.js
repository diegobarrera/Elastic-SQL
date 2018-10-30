const elastic = require('../library/products')
const {Post} = require('../models/index')

const create = async function (req, res) {
    const params = req.body
    Post.create(params)
    res.send()
}

const getAll = async function (req, res) {
    const posts = elastic.getPosts('Product1')
    res.send(posts)
}

module.exports = { create, getAll }
