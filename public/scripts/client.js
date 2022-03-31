/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function escape(str) {
	let div = document.createElement("div");
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
}

function createTweetElement(tweet) {
	const safeHTML = `${escape(tweet.content.text)}`;
	const $tweet = `			
    <article class="tweet">
			<header>
			  <span>
					<img src="${tweet.user.avatars}"/>
					<h3>${tweet.user.name}</h3>
				</span>
				<span>${tweet.user.handle}</span>
			</header>
			<p>${safeHTML}
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
		$("#empty").slideUp();
		$("#overlimit").slideUp();

		if (!$("#tweet-text").val()) {
			return $("#empty").slideDown();
		}
		if ($("#tweet-text").val().length > 140) {
			return $("#overlimit").slideDown();
		}

		$.post("/tweets", $text).then(() => {
			$("#feed").empty();
			loadTweets();
			$(".counter").html(140);
			$("form").trigger("reset");
		});
	});
});
