$(document).ready(function(){
	var imgItems = $(".slider li").length; // para saber la cantidad de fotos que tenemos
	var imgPos = 1;
	// agregando paginación 
	for (i = 1; i <= imgItems; i++) {
		$(".pagination").append("<li><span class='fa fa-circle'></span></li>");
	}	
	

	$(".slider li").hide(); // ocultar fotos
	$(".slider li:first").show();
	$(".pagination li:first").css({"color": "#434343"});

	// ejecutar las funciones
	$(".pagination li").click(pagination);
	$(".right span").click(nextSlider);
	$(".left span").click(prevSlider);

	setInterval(function(){
		nextSlider();
	},4000);

	// funciones
	function pagination(){
		var paginationPos = $(this).index() + 1;
		
		$(".slider li").hide();
		$('.slider li:nth-child('+ paginationPos + ')').fadeIn();

		// Estilos a la paginación
		$(".pagination li").css({'color': '#000'});
		$(this).css({'color': '#434343'});

		imgPos = paginationPos;
	}

	function nextSlider(){
		if(imgPos >= imgItems){
			imgPos = 1;
		} else{
			imgPos ++;
		}

		$(".pagination li").css({'color': '#000'});
		$('.pagination li:nth-child(' + imgPos + ')').css({'color': '#434343'});
		
		$(".slider li").hide();
		$('.slider li:nth-child('+ imgPos + ')').fadeIn();

	}
	function prevSlider(){
		if(imgPos <= 1){
			imgPos = imgItems;
		} else{
			imgPos --;
		}

		$(".pagination li").css({'color': '#000'});
		$('.pagination li:nth-child(' + imgPos + ')').css({'color': '#434343'});
		
		$(".slider li").hide();
		$('.slider li:nth-child('+ imgPos + ')').fadeIn();

	}

});
