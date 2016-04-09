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
		console.log(movies);
		// movies.forEach((movie) => {
		// 	console.log(movie.get('title'));
		// 	console.log(movie.get('upvotes_count'));
			
		// //now use backbone sort function that takes a function(the comparitor) and the number of votes
		// //then use backbone at to get the 0 through 3 elements in the array.  

		// sort_key: 'id',
		// comparator: function (item) {
		// 	return !item.get(this.sort_key);
		// },

		// sortByField: function (fieldName) {
		// 	this.sort_key = fieldName;
		// 	this.sort();
		// },



	

		// //loop through the top four items in the array and display their titles
		// // for (var i = 0; i < 4; i++) {
		// // 	console.log(movie[i].upvotes_count));
		// // 	$('.title').append(movie.get('title'));
		// // };
		
		

		// });
	}
};
movies.fetch(settings);







