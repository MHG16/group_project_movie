import $ from 'jquery';
import Backbone from 'backbone';


const MoviePageView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element 
	
	initialize: function(movie) {
		this.title = movie;  
		this.render();
	},
	render: function() {  //code to put the elements needed into the root element
		const template = `
		<div class="movielist"></div>`; 

		this.$el.html(this.title);  //html here replaces anything in the section with the template.
		this.$el.html(template);
	}
	
});



export default MoviePageView;