import React from 'react';
import {Link} from 'react-router';
//jquery for AJAX call
import $ from 'jquery';
//React component
import DeleteBlog from './DeleteBlog';

var Home = React.createClass({
	getInitialState(){
		return {blogs: []}
	},
	componentWillMount() {
		this.getBlogPosts()
	},
	getBlogPosts(){
		$.ajax({
			url: '/posts',
			type: 'GET',
		}).done( (data) => {
		 this.setState({blogs: data.reverse()})
		});
	},
	render: function(){
		console.log("OUR STATE", this.state.blogs)
		if (this.state.blogs.length > 1) console.log(this.state.blogs[0]._id);
		return (
			<div id="landing-main">
				{this.state.blogs.map( (blog, idx) => {
					return (
					<div key={idx}>
						<h1>{blog.title}</h1> 
						<h6>Date posted: {blog.date}</h6>
							<Link to ={`/user/${blog.author}`}><h3>By: {blog.author}</h3></Link>
								<img alt="image" src={blog.imgURL} width={50} height={50}></img>
								<p>{blog.blog}</p>
								<DeleteBlog blogID={blog._id} refresh={this.getBlogPosts} />
					</div>)
				})}
			</div>
		)
	}
})

export default Home;