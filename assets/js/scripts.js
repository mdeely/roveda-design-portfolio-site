$( document ).ready(function() {

	//////////////////////
	// Gather elements //
	/////////////////////

	var $cover_list = $(".cover__list");
	var navHeight = $("nav").outerHeight();
	var $nav = $("nav");

	/////////////////////////////////////////////////////////////
	// Hide nav when user scroll up, show when user scroll down//
	/////////////////////////////////////////////////////////////

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
