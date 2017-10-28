$(document).ready(function(){

	$('.slider').slider({
		full_width: true,
		height: 550,
		interval: 1000,
		indicators: false,
	});

	$('.next').click(function() {
	 $('.slider').slider('next');
	});
	$('.prev').click(function() {
	 $('.slider').slider('prev');
	});

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
		$('#laca').addClass('hide');
		$('#melamina').addClass('hide');
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
		$('#melamina').addClass('hide');
		$('#madera').addClass('hide');
		// cambiar la clase CSS de la descripción aquí
		$('#lacatext').removeClass('hide');
		$('#melaminatext').addClass('hide');
		$('#maderatext').addClass('hide');
		// cambiar la clase CSS del formulario aquí
		$('#lacaform').removeClass('hide');
		$('#melaminaform').addClass('hide');
		$('#maderaform').addClass('hide');
});
