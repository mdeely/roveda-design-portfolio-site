$( document ).ready(function() {

	//////////////////////
	// Gather elements //
	/////////////////////

	var navHeight = $("nav").outerHeight();
	var $nav = $("nav");

	// $("#contact_form").submit(function(e) {

	//     e.preventDefault(); // avoid to execute the actual submit of the form.

	//     var form = $(this);
	//     var url = form.attr('action');

	// 	$.ajax({
	// 	    url: url,
	//         data: form.serialize(),
	// 	    type: "POST",
	// 	    dataType: "xml",
	// 	    statusCode: {
	// 	        0: function() {
	// 	            //Success message
	// 	        },
	// 	        200: function() {
	// 	            //Success Message
	// 	        }
	// 	    }
	// 	});
	// });



	// /////////////////////
	// //iOS Compensation //
	// ////////////////////

	// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	// let vh = window.innerHeight * 0.01;
	// // Then we set the value in the --vh custom property to the root of the document
	// document.documentElement.style.setProperty('--vh', `${vh}px`);

	// // We listen to the resize event
	// window.addEventListener('resize', () => {
	//   // We execute the same script as before
	//   let vh = window.innerHeight * 0.01;
	//   document.documentElement.style.setProperty('--vh', `${vh}px`);
	// });

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
