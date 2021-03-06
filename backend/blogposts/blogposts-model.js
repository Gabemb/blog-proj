const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
	title: {type: String, required: true, unique: true},
	blog: {type: String, required: true},
	author: String,
	imgURL: String,
	date: {type:Date, required:true, default: Date.now}
});

//First argument is name of model, second argument is schema
mongoose.model('BlogPost', blogSchema);

//BLOG POSTS:
//Title of blog post
//Date posted
//Blog post text
//Catergories/tags
//comments on posts
//Images for post
//Author of blog post
//related blog posts to tags
//archive: boolean

//COMMENTS


//ARCHIVE:
//Archive (older posts)
//Comments on posts
//ID: Blog Post

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READER
//Users
//name
//comments
//email
//password
//date joined
//age




