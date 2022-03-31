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
				<span>${timeago.format(tweet.created_at)}</span>
				<span class="icon-hover">
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
		$("#feed").prepend($post);
	}
}

function loadTweets() {
	$.get("/tweets").then(data => {
		renderTweets(data);
	});
}

$(() => {
	loadTweets();
	$("form").submit(event => {
		event.preventDefault();
		let $text = $("#tweet-text").serialize();

		if (!$("#tweet-text").val()) {
			return alert("Empty tweet!");
		}
		if ($("#tweet-text").val().length > 140) {
			return alert("Too many characters!");
		}

		$.post("/tweets", $text).then(() => {
			$("#feed").empty();
			loadTweets();
			$(".counter").html(140);
			$("form").trigger("reset");
		});
	});
});
