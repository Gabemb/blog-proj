import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

var Home = React.createClass({
	getInitialState(){
		return {blogs: []}
	},
	componentDidMount() {
		$.ajax({
			url: '/posts',
			type: 'GET',
		}).done( (data) => {
				this.setState({blogs: data})
		} )
	},
	render: function(){
		console.log("OUR STATE", this.state.blogs)
		if (this.state.blogs.length > 1) console.log(this.state.blogs[0]._id);
		return (
			<div id="landing-main">
				{this.state.blogs.map( (blog, idx) => {
					return <div key={idx}>
										<h1>{blog.title}</h1>
											<h6>By: {blog.author}</h6> <h6>Date posted: {blog.date}</h6>
											<img alt="image" src={blog.imgURL}></img>
											<p>{blog.blog}</p>
									</div>
				})}
			</div>
			)
	}
})

export default Home;