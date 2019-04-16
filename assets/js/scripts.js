$( document ).ready(function() {

	//////////////////////
	// Gather elements //
	/////////////////////

	var navHeight = $("nav").outerHeight();
	var $nav = $("nav");

	$("#contact_form").submit(function(e) {

	    e.preventDefault(); // avoid to execute the actual submit of the form.

	    var form = $(this);
	    var url = form.attr('action');

		$.ajax({
		    url: url,
	        data: form.serialize(),
		    type: "POST",
		    dataType: "xml",
		    statusCode: {
		        0: function() {
		            //Success message
		        },
		        200: function() {
		            //Success Message
		        }
		    }
		});
	});




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
