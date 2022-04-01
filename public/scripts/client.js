/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 */

// Function helpers here //

// escape function to protect against XSS
function escape(str) {
	let div = document.createElement("div");
	div.appendChild(document.createTextNode(str));
	return div.innerHTML;
}

// create a tweet element as a string literal from an object
function createTweetElement(tweet) {
	// use escape helper function here
	const safeHTML = `${escape(tweet.content.text)}`;
	// get user details from object and create html with user data
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

// Takes in array of objects, calls createTweetElement, posts result in reverse chronological order to html
function renderTweets(arr) {
	for (let tweet of arr) {
		let $post = createTweetElement(tweet);
		$("#feed").prepend($post);
	}
}

// make AJAX GET request to /tweets and calls function to render tweets onto page
function loadTweets() {
	$.get("/tweets").then(data => {
		renderTweets(data);
	});
}

// jQuery Document ready here //

$(() => {
	// once html is loaded, fetch posts from server and display
	loadTweets();

	// register event handler to compose button, toggles compose tweet area
	$("#compose").on("click", () => {
		$(".new-tweet").slideToggle();
	});

	// register event handler to submit form
	$("form").submit(event => {
		// prevent page from reloading and serialize text input
		event.preventDefault();
		let $text = $("#tweet-text").serialize();

		// error messages to disappear if shown
		$("#empty").slideUp();
		$("#overlimit").slideUp();

		// logic to show error messages, if falsy or > 140
		if (!$("#tweet-text").val()) {
			return $("#empty").slideDown();
		}
		if ($("#tweet-text").val().length > 140) {
			return $("#overlimit").slideDown();
		}

		// if no error make AJAX promise call to POST $text
		$.post("/tweets", $text).then(() => {
			// empty out the current tweets feed then load new feed with new post
			$("#feed").empty();
			loadTweets();

			// reset counters and form input area
			$(".counter").html(140);
			$("form").trigger("reset");
		});
	});
});
