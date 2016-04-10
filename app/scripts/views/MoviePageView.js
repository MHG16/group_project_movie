import $ from 'jquery';
import Backbone from 'backbone';
import MovieCollection from '../collections/MovieCollection';

const MoviePageView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element 
	// events: {
	// 	'click .vote': 'addVote' 

	initialize: function(title, genre, upvotes_count) {
		//console.log('initialize');
		this.title = title;  
		this.genre = genre; 
		this.vote = upvotes_count;
		this.render();
	},
	render: function() {  //code to put the elements needed into the root element
		//console.log('render');
		const template = `
		<div class="movie_best">
						<div class="poster">
							<a href="http://www.imdb.com/title/tt3774802/?ref_=nv_sr_1"><img src="http://www.flickeringmyth.com/wp-content/uploads/2016/02/Pandemic-2016-Movie-Poster-600x889.jpg"></a>
						</div>
							<p>"${this.title}"</p>
							<p>Release Date</p>
						<div class="vote_button">
							<p>"${this.get('upvotes_count')}"</p>
						</div>
		</div>`; 


		//this.$el.html(this.title);  
		this.$el.html(template);
	}

	// function: addVote(e) {
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
