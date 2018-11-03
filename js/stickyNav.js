	$(document).ready(function() {
	var NavY = $('.slicknav_menu').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.slicknav_menu').addClass('sticky');
	} else {
		$('.slicknav_menu').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});