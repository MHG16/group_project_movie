import $ from 'jquery';
import Backbone from 'backbone';
import MovieCollection from '../collections/MovieCollection';

const MoviePageView = Backbone.View.extend({
 	//want an event here for user clicking on the vote button 
	// events: {
	//  	'click .vote': 'addVote' 
	//  },

	className: 'movie',
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
				<div class="poster">
					<p>${this.genre}</p>
					<a href="${this.a}"><img src="${this.url}"></a>
				</div>
					<p>${this.title}</p>
						<div class="vote_button">
							<p>Vote</p>
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
		
	// 	this.vote++;  

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
  //		return this.vote;

	// }

	
});



export default MoviePageView;
