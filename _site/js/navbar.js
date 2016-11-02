jQuery(document).ready(function() {
	
	var navOffset = jQuery("nav").offset().top;

	jQuery(".navTitle").hide();

	jQuery("nav").wrap('<div class="nav-placeholder"></div>');
	jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

	jQuery(window).scroll(function() {
		var scrollPos = jQuery(window).scrollTop();

		if (scrollPos >= navOffset) {
			jQuery("nav").addClass("fixed");
			jQuery(".navTitle").fadeIn(200);
		} else	{
			jQuery("nav").removeClass("fixed");
			jQuery(".navTitle").fadeOut(200);
		}
	})

})
