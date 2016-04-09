import Backbone from 'backbone';
import MovieModel from '../models/MovieModel';



const MovieCollection = Backbone.Collection.extend({
	model: MovieModel,
	url: 'https://group-project-movie-tiy.herokuapp.com/api/movies'
});



export default new MovieCollection();