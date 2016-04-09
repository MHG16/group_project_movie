import $ from 'jquery';
import Backbone from 'backbone';


const MoviePageView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element 
	// events: {
	// 	'click .vote': 'addVote' 

	initialize: function(title) {
		console.log('initialize');
		this.title = title;  
		this.render();
	},
	render: function() {  //code to put the elements needed into the root element
		console.log('render');
		const template = `
		<div class ="title">${this.title}</div>`; 

		this.$el.html(this.title);  
		this.$el.html(template);
	}

	// function: addVote(e) {



	// }

	
});



export default MoviePageView;