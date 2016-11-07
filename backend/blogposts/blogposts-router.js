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
  console.log(req.body);
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

//Delete a post in our database
const delBlogPosts = (req, res) => {
  res.send('DELETE request is working!'); 
  console.log("This is what we're trying to delete", req.body._id);
  BlogPost.findById(req.body._id, (err,data) => {
    console.log("WE FOUND IT!!!",data);
    BlogPost.remove(data, (err) => {
      if (err) console.log("DELETE request could not be completed");
      else console.log("Blog post successfully deleted!");
    });
  });
}

// Tank.remove({ size: 'large' }, function (err) {
//   if (err) return handleError(err);
//   // removed!
// });

//Configure router for get and post calls
router.route('/')
  .get(getBlogPosts)
  .post(postBlogPosts)
  .delete(delBlogPosts)


module.exports = router;