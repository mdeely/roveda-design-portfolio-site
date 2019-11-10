$( document ).ready(function() {

	//////////////////////
	// Gather elements //
	/////////////////////

	var $nav = $(".nav__menu-list");

	var $menuTrigger = $(".nav__menu-mobile-trigger");

	$menuTrigger.on('click', showMenuTrigger);

	function showMenuTrigger() {
		$nav.toggleClass("open");
		$menuTrigger.children("i").toggleClass("fa-bars").toggleClass("fa-times");
	}
});
