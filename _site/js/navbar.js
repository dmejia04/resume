$(document).ready(function() {

	$(".navTitle").hide();

	if ($(window).width() < 640 ){
		$('.navList').hide();
	}

	var navOffset = $("nav").offset().top;
	var navHeight = $("nav").outerHeight();

	$("nav").wrap('<div class="navPlaceholder"></div>');
	$(".navPlaceholder").height($("nav").outerHeight());

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();

		if (scrollPos >= navOffset) {
			$("nav").addClass("fixed");
			$(".navTitle").slideDown(200);

		} else	{
			$("nav").removeClass("fixed");
			$(".navTitle").slideUp(200);

		}
	})

})

$(window).resize(function(){

	var navHeight = $("nav").outerHeight();

	$(".navPlaceholder").height($("nav").outerHeight());

	if ($(window).width() > 640 ){
		$('.navList').show();
	}

	if ($(window).width() < 640 ){
		$('.navList').hide();
	}

});

$('#navToggle').click(function() {
	
	var navHeight = $("nav").outerHeight();
	
	$('ul.navList').toggle();
	$(".navPlaceholder").height($("nav").outerHeight());
});



