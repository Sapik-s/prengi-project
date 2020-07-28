$(document).ready(function(){
	// Обёртка сликов ( $('.bg-main__slick-main') )
	$('.bg-main__slick-main').slick({
		// Бесконечно будет крутиться или нет
		infinite: true,
		// Скорость
		speed: 1000,
		// То сколько слайдов будет показываться
		slidesToShow: 1,
		// То, сколько слайдов будет прокручиваться
        slidesToScroll: 1,
        // Изменение точек под слайдером
        dots: true,
        dotsClass: 'bg-main__slick-dots',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slick-arrow/left-arrow.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/slick-arrow/right-arrow.svg"></button>',
	});
	
	$('.expert__slick').slick({
		// Бесконечно будет крутиться или нет
		infinite: true,
		// Скорость
		speed: 1000,
		// То сколько слайдов будет показываться
		slidesToShow: 1,
		// То, сколько слайдов будет прокручиваться
		slidesToScroll: 1,
		fade: true,
  		cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev-expert"><img src="img/slider/arrow-left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next-expert"><img src="img/slider/arrow-right.svg"></button>',
	});
	
	// Скрипт для стрелки вверх
	$(window).scroll(function() {
		// Пролистывая 1600 пикселей появится стрелка
		if ($(this).scrollTop() > 1600) {
			// Указать класс ссылки, внутри которой находится изображение со стрелкой
			$('.up').fadeIn();
		} else {
			// Указать класс ссылки, внутри которой находится изображение со стрелкой
			$('.up').fadeOut();
		}
	});

	// Плавный скролл наверх
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

});