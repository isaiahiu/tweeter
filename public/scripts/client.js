/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
	user: {
		name: "Newton",
		avatars: "https://i.imgur.com/73hZDYK.png",
		handle: "@SirIsaac",
	},
	content: {
		text: "If I have seen further it is by standing on the shoulders of giants",
	},
	created_at: 1461116232227,
};

function createTweetElement(tweet) {
	const tweetElement = `			
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
	return tweetElement;
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
$(() => {
	$(".container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
	console.log($tweet); // to see what it looks like
});
