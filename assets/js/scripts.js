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


	/////////////////////////////////////////////////////////////
	// Hide nav when user scroll up, show when user scroll down//
	/////////////////////////////////////////////////////////////

	var $project_items = $(".project__item__wrapper:not(a.project__item, .project__anchor)");

	$project_items.on('mouseover', setActiveProject);

	function setActiveProject(event) {
		var project = $(event.target);

		if ( $(project).hasClass("project__item__wrapper") ) {
			var projectClasses = $(project).attr('class').replace("project__item__wrapper ", "");
			var projectNumber = projectClasses;

			$(".project__item__wrapper").removeClass("active");
			$(".project__info").removeClass("active");
			$("." + projectNumber).addClass(" active");
		}
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
