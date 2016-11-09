//React modules
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';

//App components
import Home from './components/home.jsx';
import newUser from './components/userlist.jsx';
import NewPostForm from './components/postpage.jsx';
import userProfile from './components/profile.jsx';

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
      <Route path='/newuser' component={newUser}/>
      <Route path="/showuser" component={userProfile}/>
    </Route>
   </Router>,
  document.getElementById('root')
);
