// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../styles/main.scss';

import $ from 'jquery';
import Backbone from 'backbone';

import MoviePageView from './views/MoviePageView';
import movies from './collections/MovieCollection';


const updatedMoviePage = new MoviePageView();

$('body').html(updatedMoviePage.$el);


//get the latest movie information from the server when page loads  
const settings = {
	success: function() {
		console.log(movies);
		// settings.each((movies) => {
		// 	console.log(movies.get('title'));
		// };


		// //loop through the top four items in the array and display their titles
		// for (var i = 0; i < movies.length; i++) {
		// 	console.log(movies[i]);
		// 	};
		// };


		


 }

};

movies.fetch(settings);







