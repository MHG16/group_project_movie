import Backbone from 'backbone';


const MovieModel = Backbone.Model.extend({
	
	urlRoot: 'https://group-project-movie-tiy.herokuapp.com/api/movies',
	idAttribute: 'id',
	title: 'title',
	genre: 'genre', 
	upvotes_count: 'upvotes_count'
});



export default MovieModel;