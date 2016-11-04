import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import $ from 'jquery';
import Home from './components/home.jsx';
import NewPostForm from './components/postpage.jsx';

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
    <Route path="/" component={Home} >
    	<IndexRoute component={Home}/>
    </Route>
      <Route path="/newpost" component={NewPostForm} />
   </Router>,
  document.getElementById('root')
);
