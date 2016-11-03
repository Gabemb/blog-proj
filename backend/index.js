///////////////
//Index page - import and organize all models and routes
////////////

//Models
constPosts = require('./posts/posts-model');

//Routes
const home = require('./home/home-router');
const posts = require('./posts/posts-router');

module.exports = {
	models: {
		Posts: Posts
	},
	routes: {
		posts: posts,
		home: home
	}
}