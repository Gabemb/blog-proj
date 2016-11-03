//////////////
//Routes for getting and creating (aka posting) blog posts
/////////////

const router = require('express').Router();
const Post = require('mongoose').model('Post');

//Get all posts from database
const getPosts = (req, res) => {
	Post.find({}, (err, data) => {
		res.send(data);
	})
}

//Create a new test post in database