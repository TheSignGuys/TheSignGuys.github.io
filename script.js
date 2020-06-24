$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$('header').addClass('navigation');
	} else {
		$('header').removeClass('navigation');
	}
})


const startTranslating = document.getElementById("start-translating");

startTranslating.addEventListener("click", () => {
	window.location.href = window.location.href + "loc2019/CWASA-plus-gui-panel.html"
})