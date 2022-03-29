$(document).ready(function () {
	// --- our code goes here ---
	$("#tweet-text").on("keyup", function () {
		let post = $(this).val();
		let remaining = 140 - post.length;
		let counter = $(this).next()[0].children[1];
		$(counter).html(remaining);
		if (remaining <= 0) {
			$(counter).addClass("red");
		} else {
			$(counter).removeClass("red");
		}
	});
});
