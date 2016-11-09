//React modules
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';

//App components
import Home from './components/home.jsx';
import newUser from './components/userlist.jsx';
import NewPostForm from './components/NewPost.jsx';
import userProfile from './components/profile.jsx';
import Blog from './components/Blog.jsx';
import EditBlog from './components/EditBlog.jsx';

var App = React.createClass({
  render: function() {
    return (
    	<div id = "app-main">
        {this.props.children}
      </div>  
    )
  }
})

render(
   <Router history={browserHistory}>
    <Route path="/">
    <IndexRoute component={Home}/>
      <Route path="/newpost" component={NewPostForm} />
      <Route path="/newuser" component={newUser} />
      <Route path="/user/:username" component={userProfile} />
      <Route path="/user/:username/:blogID" component={EditBlog} />
      <Route path="/:author/:blogTitle" component={Blog} />  
    </Route>
   </Router>,
  document.getElementById('root')
);
