import $ from 'jquery';
import Backbone from 'backbone';
import MovieCollection from '../collections/MovieCollection';

const MoviePageView = Backbone.View.extend({
 
	// events: {
	//  	'click .vote': 'addVote' 
	//  },

	className: 'col col-12',
	initialize: function(title, genre, upvotes_count, url, a) {
	
		this.title = title;  
		this.genre = genre; 
		this.vote = upvotes_count;
		this.url = url; 
		this.a = a;
		this.render();
	},
	template: function () {
		return `
			<div class ="best_of">
			<div class="movie_best">
				<div class="poster">
					<a href="${this.a}"><img src="${this.url}"></a>
					</div>
					<p>${this.title}</p>
						<div class="vote_button">
							<p>${this.vote}</p>
						</div>
					</div>
			</div>
				`
	},
	render: function() {  
		this.$el.html(this.template());
		console.log('this is rendering.')

	},

	//function here for click event handler on 'vote buttons, need to add one to vote when clicked
	//also, should push to server when clicked.  
	// addVote: function(e) {
		
	// 	let this.vote = this.vote++;

	// 	return this.vote;
	// }
		//then push the changes to server
		// $(".input-form" ).submit( (e) => {
  //       e.preventDefault();
  //       let title = $(".movieTitle").val();
  //       let genre = $('.movieGenre').val();
  //       let upvotes_count = $('.movieVotes').val();
  //       let pic = $('.moviePic').val();
  //       $.post( "https://group-project-movie-tiy.herokuapp.com/api/movies", 
  //          {post: {title: title , genre: genre, upvotes_count: count, pic: pic} });


	// }

	
});



export default MoviePageView;
