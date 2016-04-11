// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import MoviePageView from './views/MoviePageView';
import MovieCollection from './collections/MovieCollection';



let movies = MovieCollection;


var settings = {
	success: function() {
		
		MovieCollection.forEach((movie) => {
			let newMoviePageView = new MoviePageView( movie.get('title'), movie.get('genre'), movie.get('upvotes_count'), movie.get('url'));
			$('.stuff').append(newMoviePageView.el);
 		});	
	
	}

};

movies.fetch(settings);






