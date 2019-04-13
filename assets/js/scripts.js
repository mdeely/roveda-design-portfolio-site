$( document ).ready(function() {

	//////////////////////
	// Gather elements //
	/////////////////////

	var $cover_list = $(".cover__list");
	var navHeight = $("nav").outerHeight();
	var $nav = $("nav");
	var $overlay = $(".overlay__container");
	var $overlay_open = $("[href='#overlay_open']");
	var $overlay_close = $("[href='#overlay_close']");


	/////////////////////////////////////////////////////////////
	// Hide nav when user scroll up, show when user scroll down//
	/////////////////////////////////////////////////////////////

	$overlay_open.on('click', openOverlay);
	$overlay_close.on('click', closeOverlay);


	function openOverlay(e){
		e.preventDefault();
		$overlay.fadeIn(300);
	};

	function closeOverlay(e){
		e.preventDefault();
		$overlay.fadeOut(300);
	};

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	   		$nav.css("top", 0);
	  } else if ( currentScrollPos < 200 ) {
	   		$nav.css("top", 0);
	  }
 		else {
	   		$nav.css("top", -navHeight);
	  }
	  prevScrollpos = currentScrollPos;
	}


});
