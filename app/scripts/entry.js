// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../styles/main.scss';

import $ from 'jquery';
import Backbone from 'backbone'

import MoviePageView from './views/MoviePageView'
import movies from './collections/MovieCollection';


let updatedMoviePage = new MoviePageView();

$('body').html(updatedMoviePage.$el);


//get the latest movie information from the server when page loads  
var settings = {
	success: function() {
		movies.forEach((movie) => {
			console.log(movie.get('title'));
			$('.title').append(movie.get('title'));
		//now use backbone sort function that takes a function(the comparitor) and the number of votes
		//then use backbone at to get the 0 through 3 elements in the array.  
		});
	}
};
movies.fetch(settings);







