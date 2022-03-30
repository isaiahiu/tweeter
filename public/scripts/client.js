/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweet) {
	const $tweet = `			
    <article class="tweet">
			<header>
			  <span>
					<img src="${tweet.user.avatars}"/>
					<h3>${tweet.user.name}</h3>
				</span>
				<span>${tweet.user.handle}</span>
			</header>
			<p>${tweet.content.text}
			</p>
			<footer>
				<span>${tweet.created_at}</span>
				<span>
					<i class="fa-solid fa-heart"></i>
					<i class="fa-solid fa-flag"></i>
					<i class="fa-solid fa-retweet"></i>
				</span>
			</footer>
		</article>`;
	return $tweet;
}

function renderTweets(arr) {
	for (let tweet of arr) {
		let $post = createTweetElement(tweet);
		$(".container").append($post);
	}
}

function loadTweets() {
	$.get("/tweets").then(data => {
		console.log(data);
		renderTweets(data);
	});
}

$(() => {
	$("form").submit(event => {
		event.preventDefault();
		let text = $("#tweet-text").serialize();
		$.post("/tweets", text);
	});

	loadTweets();
});
