import $ from 'jquery';
import Backbone from 'backbone';
import MovieCollection from '../collections/MovieCollection';

const MoviePageView = Backbone.View.extend ({
	tagName: 'section',  //section is the root element 
	// events: {
	// 	'click .vote': 'addVote' 

	initialize: function(title, genre, upvotes_count) {
	
		this.title = title;  
		this.genre = genre; 
		this.vote = upvotes_count;
		this.render();
	},
	render: function() {  
	
		const template = `
		<div class="best_of">
		<div class="movie_best">
						<div class="poster">
							<a href="http://www.imdb.com/title/tt3774802/?ref_=nv_sr_1"><img src="http://www.flickeringmyth.com/wp-content/uploads/2016/02/Pandemic-2016-Movie-Poster-600x889.jpg"></a>
						</div>
							<p>"${this.title}"</p>
							<p>Release Date</p>
						<div class="vote_button">
							<p>"${this.vote}"</p>
						</div>
		</div> 

		<div class="movie_best">
					<div class="poster">
							<a href="http://www.imdb.com/title/tt1386697/?ref_=nv_sr_1"><img src="https://pbs.twimg.com/media/CbR-y55VAAAhXQi.jpg:large"></a>
					</div>
						<p>"${this.title}"</p>
						<p>Coming - 8/5/16</p>
					<div class="vote_button">
						<p>"${this.vote}"</p>
					</div> 
		</div>

		<div class="movie_best">
					<div class="poster">
							<a href="http://www.imdb.com/title/tt1289401/?ref_=nv_sr_1"><img src="http://ia.media-imdb.com/images/M/MV5BNzAzODQ1NTk4OF5BMl5BanBnXkFtZTgwODIwOTIwODE@._V1_UY1200_CR90,0,630,1200_AL_.jpg"></a>
					</div>
						<p>"${this.title}"</p>
						<p>Coming - 8/5/16</p>
					<div class="vote_button">
						<p>"${this.vote}"</p>
					</div>

		<div class="movie_best">
					<div class="poster">
							<a href="http://www.imdb.com/title/tt3040964/?ref_=fn_al_tt_1"><img src="http://www.flickeringmyth.com/wp-content/uploads/2015/08/JBPoster-720x1066.jpg"></a>
						</div>
					</div>
						<p>"${this.title}"</p>
						<p>Coming - 8/5/16</p>
					<div class="vote_button">
						<p>"${this.vote}"</p>
					</div>
		</div>
		</div>`;


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