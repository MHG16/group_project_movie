// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../styles/main.scss';

import $ from 'jquery';
import Backbone from 'backbone';

import MoviePageView from './views/MoviePageView';
import movies from './collections/MovieCollection';


//const updatedMoviePage = new MoviePageView();

//$('body').append(MoviePageView.$el);


//get the latest movie information from the server when page loads  
//for now just show the top four movies with most votes

const settings = {
	success: function() {
		console.log(movies);

		movies.forEach((movie) => {
			console.log(movie.get('title'));
			let updatedMoviePage  = new MoviePageView(movie.get('title'));

			$('body').html(updatedMoviePage.el);


 		});

	}
};
movies.fetch(settings);







