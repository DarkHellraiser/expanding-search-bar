/* ------------------------------------------------------------ *\
|* Search Javascript
\* ------------------------------------------------------------ */
(function(window){
	// add audio
	var swoosh = new Audio();
	swoosh.src = 'audio/swoosh.mp3';

	// get vars
	var searchEl = $("#search-input");
	var labelEl = $("#search-label");

	// register clicks and toggle classes
	labelEl.on("click",function(){
		if (searchEl.hasClass("show")) {
			stopAudio(swoosh);
			searchEl.removeClass("show");
			labelEl.removeClass("active");
			playAudio(swoosh);
		} else {
			stopAudio(swoosh);
			searchEl.addClass("show");
			labelEl.addClass("active");
			playAudio(swoosh);
		}
	});

	// register clicks outisde search box, and toggle correct classes
	document.addEventListener("click",function(e){
		var clickedID = e.target.id;
		if (clickedID != "search-input" && clickedID != "search-label") {
			if (searchEl.hasClass("show")) {
				stopAudio(swoosh);
				searchEl.removeClass("show");
				labelEl.removeClass("active");
				playAudio(swoosh);
			}
		}
	});

	function playAudio(audio) {
		audio.play();
	}
	function stopAudio(audio) {
		audio.pause();
		audio.currentTime = 0;
	}
}(window));