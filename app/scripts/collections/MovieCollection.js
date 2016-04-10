import Backbone from 'backbone';
import MovieModel from '../models/MovieModel';



const MovieCollection = Backbone.Collection.extend({
	model: MovieModel,
	url: 'https://group-project-movie-tiy.herokuapp.com/api/movies',
	 comparator: function(model) {
	 	return -1*model.get('upvotes_count');
	 }
});



export default new MovieCollection();