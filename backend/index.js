/////////////////////////
// Index page - import and organize all models and routes. export for use in server
/////////////////////////

//Models
const BlogPosts = require('./posts/posts-model');

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');

module.exports = {
  models: {
    Posts: BlogPosts
  },
  routes: {
    posts: posts,
    home: home
  }
}
