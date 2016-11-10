import React from 'react';
import $ from 'jquery';

var EditBlog = React.createClass({
	getInitialState(){
		return {blogid: null}
	},
	componentDidMount: function() {
		var id = this.props.params.BlogID
		// console.log('before ajax',id)
		$.ajax({
			url: '/api/posts/single/'+id,
			type: 'PUT',
			}).done( (data) => {
			// console.log("SUCCESS", data)
			this.setState({blogid: data})
		});
	},
	handlClick: function(){
		console.log(this.state.blogid)
	},
	// editRequest: function() {
	// 	$.ajax({
	// 		url: '/'
	// 	})
	// }
	render: function(){
		return (
		<div>
		{this.state.blogid ? 
			(<div>
				<form>
				<div id='CommentDivId'>
				<input type='text' value={this.state.blogid.author}></input>	 	
				</div>
				<button onClick={this.handleClick}>butt</button>
				</form>	
			</div>)
		 	: null}
		 </div>
		 )
		// if (this.state.blogid){
		// return (
		// 	<div>
		// 		hello from editblog
		// 		<h1>{this.state.blogid.title}</h1>
		// 	</div>
		// 	)
		// }
		// else {
		// 	return null
		// }
	}
})


export default EditBlog;