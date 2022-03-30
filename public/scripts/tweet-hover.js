$(document).ready(function () {
	$(".tweet")
		.on("mouseenter", function () {
			$(this).addClass("box-hover");
		})
		.on("mouseleave", function () {
			$(this).removeClass("box-hover");
		});

	$(".tweet span > i")
		.on("mouseenter", function () {
			$(this).addClass("gold");
		})
		.on("mouseleave", function () {
			$(this).removeClass("gold");
		});
});
