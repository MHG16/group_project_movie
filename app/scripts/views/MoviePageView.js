import $ from 'jquery';
import Backbone from 'backbone';
import MovieCollection from '../collections/MovieCollection';

const MoviePageView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element 
	// events: {
	// 	'click .vote': 'addVote' 

	initialize: function(title, genre, upvotes_count, url) {
	
		this.title = title;  
		this.genre = genre; 
		this.vote = upvotes_count;
		this.url = url; 
		this.render();
	},
	template: function () {
		return `<div class="movie_best">
						<div class="poster">
							<a href="${this.url}"><img src=""></a>
						</div>
							<p>${this.title}</p>
							<p>  </p>
						<div class="vote_button">
							<p>Vote</p>
						</div>
					</div> `
	},
	render: function() {  
		this.$el.html(this.template());
	}

	// function: addVote(e) {
		//need to increase the vote count by one 
		//let this.vote = this.vote++;

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