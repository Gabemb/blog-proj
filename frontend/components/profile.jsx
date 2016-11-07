import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import $ from 'jquery'

var userProfile = React.createClass({
	getInitialState(){
		return {blogs: []}
	},
	componentDidMount() {
		$.ajax({
			url: '/posts',
			type: 'GET',
		}).done( (data) => {
		 this.setState({blogs: data.reverse()
		 })})
		},
	render: function(){
		if (this.state.blogs.length > 1) 
			console.log(this.state.blogs[0]._id);
		return (
			<div id="landing-main">
				{this.state.blogs.map( (blog, idx) => {
					return 
					(
					<div key={idx}>
					<h1>{blog.title}</h1> 
					<h6>Date posted: {blog.date}</h6>
					<h3>By:<Link to={`/user/${blog.author}`}>{blog.author}</Link></h3>
					<img alt="image" src={blog.imgURL} width={800} height={600}></img>
					<p>{blog.blog}</p>
					</div>
					)
				})}
			</div>
			)
	}
})

export default userProfile;