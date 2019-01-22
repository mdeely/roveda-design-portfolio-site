$( document ).ready(function() {

	//////////////////////
	// Gather elements //
	/////////////////////

	if ( $(".carousel__container").length > 0 ) {
		var carouselPreviousClassName = "carousel__previous";
		var carouselNextClassName = "carousel__next";
		var $slider_controls = $(".carousel__next, .carousel__previous");
		var slideClassName = "carousel__slide";
		var slideCount = $("."+slideClassName).length;
	}

	////////////////////
	// Bind to events //
	////////////////////
	$slider_controls.on('click', handleSlideshow );


	///////////////
	// Functions //
	///////////////

	function handleSlideshow(direction) {
        direction.stopImmediatePropagation();
		direction.preventDefault();

		var activeSlide = getActiveSlide();
		var requestedSlide = null;
		var slideshowNumber = $(activeSlide).data("slideshow-index");

		if ( $(direction.target).hasClass(carouselPreviousClassName) ) {
			requestedSlide = slideshowNumber-1;

			if ( requestedSlide == 0 ) {
				requestedSlide = slideCount;
			}
		};

		if ( $(direction.target).hasClass(carouselNextClassName) ) {
			requestedSlide = slideshowNumber+1;

			if ( requestedSlide > slideCount ) {
				requestedSlide = 1;
			};
		};

		updateSlideshow(requestedSlide, activeSlide)
	}

	function getActiveSlide() {
		var activeSlide = $("."+slideClassName+".active");
		return activeSlide;
	}

	function updateSlideshow(requestedSlide, activeSlide) {
		var requestedSlide = $("."+slideClassName+"[data-slideshow-index="+requestedSlide+"]");

		$(activeSlide).removeClass("active");
		$(requestedSlide).addClass("active");
	}

	// if next is clicked
	// 	go to .classname plus one
	// 		if that doesn't exist, go back to first
	//		if it does, add active class

	// if previous is clicked
	// 	go to .classroom minus 1
	// 		if that doesn't exist, go to last. 

});
