import React from 'react';
import $ from 'jquery';

var EditBlog = React.createClass({
	getInitialState(){
		return {blogid: null}
	},
	componentDidMount: function() {
		let id = this.props.params.BlogID
		// console.log('before ajax',id)
		$.ajax({
			url: '/api/posts/single/'+id,
			type: 'PUT',
			}).done( (data) => {
			// console.log("SUCCESS", data)
			this.setState({blogid: data})
		});
	},
	handleChange(inputEvent, event) {
		let id = this.props.params.BlogID
		this.setState({[inputEvent]: event.target.value});
	},
	// editRequest: function() {
	// 	$.ajax({
	// 		url: '/'
	// 	})
	// }
	render: function(){
		console.log(this.state.blogid)
		return (
		<div>
		{this.state.blogid ? 
			(<div>
				<form>
				<div id='blogDivTitle'>
				<textarea type='text' value={this.state.blogid.title} onChange={this.handleChange.bind(this,'title')}
					value={this.state.blogid.title}></textarea>	 	
				</div>
				<div id='blogDivBlog'>
				<textarea type='text' value={this.state.blogid.blog} onChange={this.handleChange.bind(this,'blog')}
					value={this.state.blogid.blog}></textarea>	 	
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