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
  if (req.body.single) {
    BlogPost.findOne({title: req.body.title}, (err, data) => {
      console.log("Is this right?", data)
      res.send(data);
    });
  } else {
    BlogPost.create({
      title: req.body.title,
      blog: req.body.blog,
      author: req.body.author,
      imgURL: req.body.imgURL
    }, (err) => {
      if (err){
        console.log('error, could not create post');
        return;
      }
      console.log('success! post created!');
    });
  }
}


const editBlogPosts = (req, res) =>{
  res.sendStatus(200);
  console.log("this is what we're trying to edit",req.body._id);
  BlogPost.findById(req.body._id, (err,data) => {
    console.log('we found it!', data);
    BlogPost.get(data, (err)=>{
      if(err) console.log('edit could not be completed');
      else console.log('blog edited!')
    })
  })
}
//Delete a post in our database
const delBlogPosts = (req, res) => { 
  res.sendStatus(200);
  console.log("This is what we're trying to delete", req.body._id);
  BlogPost.findById(req.body._id, (err,data) => {
    console.log("WE FOUND IT!!!",data);
    BlogPost.remove(data, (err) => {
      if (err) console.log("DELETE request could not be completed");
      else console.log("Blog post successfully deleted!");
    });
  });
}


//Configure router for get and post calls

router.route('/')
  .get(getBlogPosts)
  .post(postBlogPosts)
  .delete(delBlogPosts);


module.exports = router;