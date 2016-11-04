/////////////////////////////////////////////////
//Routes for getting and creating (aka posting) blog posts
////////////////////////////////////////////////

const router = require('express').Router();
const BlogPost = require('mongoose').model('BlogPost');

//Get all posts from database
const getBlogPosts = (req, res) => {
  BlogPost.find({}, (err, data) => {
    res.send(data);
  })
}

//Create a new test post in database
const postBlogPosts = (req, res) => {
  console.log(req.body)
  BlogPost.create({
    title: req.body.title,
    blog: req.body.blog,
    author: req.body.author,
    imgURL: req.body.imgURL,
    date: req.body.date
  }, (err) => {
    if (err){
      console.log('error');
      return;
    }
    console.log('success!');
  })
}

//Configure router for get and post calls
router.route('/')
  .get(getBlogPosts)
  .post(postBlogPosts)


module.exports = router;