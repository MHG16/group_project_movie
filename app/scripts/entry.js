// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../styles/main.scss';

import $ from 'jquery';
import Backbone from 'backbone'

import MoviePageView from './views/MoviePageView'


//instantiate a movie view  

let updatedMovieList = new MoviePageView();

$('body').append(updatedMovieList.$el);




//get the latest movie information from the server when page loads  
// var settings = {
// 	success: function() {
// 		movieCollection.forEach((todo) => {
// 			console.log(todo.get('text'));
// 			//instantiate each Todo Item View
// 			let newPersonalTodoListView = new TodoItemView(
// 				todo.get('text')
// 			);
// 			//append the 
// 			$('.todo-list1').append(newPersonalTodoListView.el);
// 		});
// 	}
// };
// updatedMovieCollection.fetch(settings);







