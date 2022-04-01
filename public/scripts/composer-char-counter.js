// jQuery to add responsiveness to compose tweet

$(document).ready(function () {
	// event handler registered to keyup
	$("#tweet-text").on("keyup", function () {
		let post = $(this).val();
		let remaining = 140 - post.length;
		let counter = $(this).next()[0].children[1];

		// replace counter html text with remaining
		$(counter).html(remaining);

		// logic to change counter in html to red
		if (remaining <= 0) {
			$(counter).addClass("red");
		} else {
			$(counter).removeClass("red");
		}
	});
});
