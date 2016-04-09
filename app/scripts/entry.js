// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../styles/main.scss';

import $ from 'jquery';
import Backbone from 'backbone'

import MoviePageView from './views/MoviePageView'
import MovieCollection from './collections/MovieCollection';


let updatedMoviePage = new MoviePageView();

$('body').html(updatedMoviePage.$el);


//get the latest movie information from the server when page loads  
var settings = {
	success: function() {
		MovieCollection.forEach((movie) => {
			console.log(movie.get('title'));
			let updatedMoviePage = new MoviePageView(movie.get('title'));
			$('.movielist').append(updatedMoviePage.el);
		});
	}
};
MovieCollection.fetch(settings);







