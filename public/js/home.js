$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(document).on('click', 'a.menu-link', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
	$('.slider').slider({
		full_width: true,
		height: 550,
		indicators: false,
		interval: 3000
	});

	$('.next').click(function() {
	 $('.slider').slider('next');
	});
	$('.prev').click(function() {
	 $('.slider').slider('prev');
	});
	$('.materialboxed').materialbox();
});

$('#buttonmelamina').click(function(){
    // cambiar la clase CSS de los botones aquí
		$('#buttonmelamina').addClass('btn-active');
		$('#buttonlaca').removeClass('btn-active');
		$('#buttonmadera').removeClass('btn-active');
		// cambiar la clase CSS del slider aquí
		$('#melamina').removeClass('hide');
		$('#laca').addClass('hide');
		$('#madera').addClass('hide');
});

$('#buttonmadera').click(function(){
    // cambiar la clase CSS de los botones aquí
		$('#buttonmadera').addClass('btn-active');
		$('#buttonlaca').removeClass('btn-active');
		$('#buttonmelamina').removeClass('btn-active');
		// cambiar la clase CSS del slider aquí
		$('#madera').removeClass('hide');
		$('#laca').addClass('hide');
		$('#melamina').addClass('hide');
});

$('#buttonlaca').click(function()
{
    // cambiar la clase CSS de los botones aquí
		$('#buttonlaca').addClass('btn-active');
		$('#buttonmelamina').removeClass('btn-active');
		$('#buttonmadera').removeClass('btn-active');
		// cambiar la clase CSS del slider aquí
		$('#laca').removeClass('hide');
		$('#melamina').addClass('hide');
		$('#madera').addClass('hide');
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 65) {
    //cuando se hace el scroll down
    $('nav').removeClass('transparent');
    $('nav').removeClass('z-depth-0');
    $('#iconmenumovil').removeClass('white-text');
    $('#iconmenumovil').css('color','#444');
  } else {
    //cuado se esta hasta arriba
    $('nav').addClass('transparent');
    $('nav').addClass('z-depth-0');
  }
});

$('.modal').modal({
		 dismissible: true, // Modal can be dismissed by clicking outside of the modal
		 opacity: .7, // Opacity of modal background
		 inDuration: 300, // Transition in duration
		 outDuration: 200, // Transition out duration
		 startingTop: '4%', // Starting top style attribute
		 endingTop: '10%', // Ending top style attribute
	 }
 );
