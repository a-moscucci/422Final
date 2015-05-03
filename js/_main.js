

( function( $ ) {

	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {

		      // Resize sections
		      adjustWindow();

		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow(){

		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});

		// Get window size
	    winH = $window.height();

	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		}

	    // Resize our slides
	    $slide.height(winH);

	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));

	}

} )( jQuery );

$(window).scroll(function(){
    var st = $(this).scrollTop(),
        height = $(this).height(),
        add = 140;

    $('.copy').each(function(){
        var pos = $(this).position().top;

        if(st + height >= pos + add){
            $(this).stop().animate({opacity:1},'fast');
        }else{
            $(this).stop().animate({opacity:0},'fast');
        }
    });
});

$(document).ready(function(){

    /* default settings */
    $('.venobox').venobox();


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '',        // default: ''
        frameheight: '',       // default: ''
        border: '10px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');
});
