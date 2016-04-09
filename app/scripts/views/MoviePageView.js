import $ from 'jquery';
import Backbone from 'backbone';


const MovieView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element for the TodoListView
	
	initialize: function() {
		this.render();
	},
	render: function() {  //code to put the elements needed into the root element
		const template = `
		<p>Hello World</p>`; 

		this.$el.html(template);  //html here replaces anything in the section with the template.

	}
	
});



export default MoviePageView;