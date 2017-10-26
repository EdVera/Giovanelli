$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(document).on('click', 'a.menu-link', function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});
	$('.slider').slider({
		full_width: false,
		height: 550,
		interval: 5000,
		indicators: false,
	});
	$('.slider1').slider({
		full_width: false,
		height: 550,
		interval: 5000,
		indicators: false,
	});
	$('.slider2').slider({
		full_width: false,
		height: 550,
		interval: 5000,
		indicators: false,
	});
	$('.materialboxed').materialbox();
});

$('.next').click(function() {
 $('.slider').slider('next');
});
$('.prev').click(function() {
 $('.slider').slider('prev');
});

$('#buttonmelamina').click(function(){
    // cambiar la clase CSS de los botones aquí
		$('#buttonmelamina').addClass('btn-active');
		$('#buttonlaca').removeClass('btn-active');
		$('#buttonmadera').removeClass('btn-active');
		// cambiar la clase CSS del slider aquí
		$('#melamina').removeClass('hide');
		$('#melamina').addClass('slider');
		$('#laca').addClass('hide');
		$('#laca').removeClass('slider');
		$('#madera').addClass('hide');
		$('#madera').removeClass('slider');
		// cambiar la clase CSS de la descripción aquí
		$('#melaminatext').removeClass('hide');
		$('#lacatext').addClass('hide');
		$('#maderatext').addClass('hide');
		// cambiar la clase CSS del formulario aquí
		$('#melaminaform').removeClass('hide');
		$('#lacaform').addClass('hide');
		$('#maderaform').addClass('hide');
});

$('#buttonmadera').click(function(){
    // cambiar la clase CSS de los botones aquí
		$('#buttonmadera').addClass('btn-active');
		$('#buttonlaca').removeClass('btn-active');
		$('#buttonmelamina').removeClass('btn-active');
		// cambiar la clase CSS del slider aquí
		$('#madera').removeClass('hide');
		$('#madera').addClass('slider');
		$('#laca').addClass('hide');
		$('#laca').removeClass('slider');
		$('#melamina').addClass('hide');
		$('#melamina').removeClass('slider');
		// cambiar la clase CSS de la descripción aquí
		$('#maderatext').removeClass('hide');
		$('#lacatext').addClass('hide');
		$('#melaminatext').addClass('hide');
		// cambiar la clase CSS del formulario aquí
		$('#maderaform').removeClass('hide');
		$('#lacaform').addClass('hide');
		$('#melaminaform').addClass('hide');
});

$('#buttonlaca').click(function()
{
    // cambiar la clase CSS de los botones aquí
		$('#buttonlaca').addClass('btn-active');
		$('#buttonmelamina').removeClass('btn-active');
		$('#buttonmadera').removeClass('btn-active');
		// cambiar la clase CSS del slider aquí
		$('#laca').removeClass('hide');
		$('#laca').addClass('slider');
		$('#melamina').addClass('hide');
		$('#melamina').removeClass('slider');
		$('#madera').addClass('hide');
		$('#madera').removeClass('slider');
		// cambiar la clase CSS de la descripción aquí
		$('#lacatext').removeClass('hide');
		$('#melaminatext').addClass('hide');
		$('#maderatext').addClass('hide');
		// cambiar la clase CSS del formulario aquí
		$('#lacaform').removeClass('hide');
		$('#melaminaform').addClass('hide');
		$('#maderaform').addClass('hide');
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
