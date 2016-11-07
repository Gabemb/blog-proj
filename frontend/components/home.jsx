import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
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
		 this.setState({blogs: data.reverse()})
		} )
	},
	render: function(){
		console.log("OUR STATE", this.state.blogs)
		return (
			<div id="landing-main">
				{this.state.blogs.map( (blog, idx) => {
					return (
					<div key={idx}>
					<h1>{blog.title}</h1> 
					<h6>Date posted: {blog.date}</h6>
					<Link to ={`/user/${blog.author}`}><h3>By: {blog.author}</h3></Link>
					<img alt="image" src={blog.imgURL} width={800} height={600}></img>
					<p>{blog.blog}</p>
					</div>)
				})}
			</div>
			)
	}
})

export default Home;