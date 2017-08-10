$(document).ready(function() {
	// fullpage plugin 
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage','fourdPage','fifthdPage'],
		menu: '#js_menu',
		autoScrolling: false,
		scrollingSpeed: 1200		
	});
	// logo scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js_header");
		if(scrollDistance >80){
			$header.addClass("header--scrolling");

		}
		else{
			$header.removeClass("header--scrolling");
		}
	})
	var rellax = new Rellax('.rellax',{
		 center: true
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    navText:[],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1600:{
            items:4
        }
    }
})
});