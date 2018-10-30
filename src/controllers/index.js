// const { User, Post } = require('../models/index')
// const elastic = require('../library/products')

// const userController = async function (req, res) {
//     const users = await User.findAll()
//     const user = users[0]

//     // const post1 = await Post.create({
//     //     title: 'post 1',
//     //     content: 'text of the post N 1'
//     // })
//     // const post2 = await Post.create({
//     //     title: 'Post 2',
//     //     content: 'text of the post N 2'
//     // })
//     // await user.setPosts([post1]) // override
//     // await user.addPost(post2) // append

//     const myPosts = await user.getPosts()
//     console.log(myPosts)

//     res.send('pong')
// }

// const elasticSearch = async function (req, res) {
//     elastic.test()
//     res.send()
// }

module.exports = {
    userController: require('../controllers/userController'),
    postController: require('../controllers/postController')
}

