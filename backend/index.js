/////////////////////////
// Index page - import and organize all models and routes. export for use in server
/////////////////////////

//Models
const BlogPosts = require('./posts/posts-model');
const UserList = require('./userdb/user-model')

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');
const login = require('./login/login')

module.exports = {
  models: {
    Post: BlogPosts
    User: UserList
  },
  routes: {
    posts: posts,
    home: home
    login: login
  }
}
