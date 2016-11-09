import React from 'react';
import {Link} from 'react-router';
//jquery for AJAX call
import $ from 'jquery';
//React component
import DeleteBlog from './DeleteBlog';
import EditBlogButton from './EditBlogButton.jsx';
import EditBlog from './EditBlog.jsx';

var Home = React.createClass({
	getInitialState(){
		return {blogs: []}
	},
	componentWillMount() {
		this.getBlogPosts()
	},
	getBlogPosts(){
		$.ajax({
			url: '/api/posts',
			type: 'GET',
		}).done( (data) => {
		 this.setState({blogs: data.reverse()})
		});
	},
	render: function(){
		if (this.state.blogs.length > 1) console.log(this.state.blogs[0]._id);
		return (
			<div id="landing-main">
				{this.state.blogs.map( (blog, idx) => {
					return (
					<div key={idx}>
						<Link to={`/${blog.author}/${blog.title}`}><h1>{blog.title}</h1> </Link>
						<h6>Date posted: {blog.date}</h6>
							<h3>By: <Link to ={`/user/${blog.author}`}>{blog.author}</Link></h3>
								<img alt="image" src={blog.imgURL} width={50} height={50}></img>
								<p>{blog.blog}</p>
								<DeleteBlog blogID={blog._id} refresh={this.getBlogPosts} /> 
								<EditBlogButton username={blog.author} blogID={blog._id} blogTitle={blog.title}/>
					</div>)
				})}
			</div>
		)
	}
})

export default Home;