const router = require('express').Router();
const UserList = require('mongoose').model('UserList');

const getUser = (req, res) => {
  UserList.find({}, (err, data) => {
    res.send(data);
})
}

const postNewUser = (req, res) => {
  console.log(req.body)
  	UserList.create({
	     username: req.body.username,
	     password: req.body.password,
	     email: req.body.email,
	     bio: req.body.bio,
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
  .get(getUser)
  .post(postNewUser)


module.exports = router;
