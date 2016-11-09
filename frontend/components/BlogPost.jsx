import React from 'react'

import $ from 'jquery'

var getBlog = React.createClass({
	getInitialState: function(){
		return {blogs: []
		}
	},
	componentDidMount: function(){
		$.ajax{	url: '/api/posts',
				type: 'GET',
				data: 
					title: this.props.title,
					blog: this.props.blog,
					author: this.props.author,
					imgURL: this.props.imgURL,
					date: this.props.date
			}.done( (data) => {
		 this.setState({blogs: data})
		}
	)}
	,
	render: function(){
		console.log(this.state)
		return (
				<div>
				{this.state.blogs}
				</div>
			)
	}
})

export default getBlog