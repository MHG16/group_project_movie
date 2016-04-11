import Backbone from 'backbone';


const MovieModel = Backbone.Model.extend({
		
	urlRoot: 'https://group-project-movie-tiy.herokuapp.com/api/movies',
	idAttribute: 'id',
	
	defaults: {
		title: 'title',
		genre: 'genre', 
		upvotes_count: 'upvotes_count',
		url: 'url',
		a: 'a'
	}
});



export default MovieModel;