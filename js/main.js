// Бургер

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


//main-slick.js
$(document).ready(function () {
	$('.slider').slick({ //==Обращаемся к слайдеру в HTML
		arrows: false, //Выключени стрелки
		dots: false, //Включает точки
		adaptiveHeight: true, //Включает разную висоту слайдам
		slidesToShow: 1, //Количество слайдов
		slidesToScroll: 1, //Количество слайдов пролистуемо за одно нажатие
		speed: 1000, //Скорость пролистования слайдов
		easing: 'linear', // Анимация появления слайдов
		infinite: true, // Разрешает бесконечную прокрутку слайдов
		initialSlide: 0, //Указует с какого слайда начинать просмотр
		autoplay: true, //Автоматическое проигривание слайдов
		autoplaySpeed: 3000, //Время проигривания слайдов
		pauseOnFocus: true, //Остановка слайдера при фокусе на слайд
		pauseOnHover: true, //Остановка слайдера при наведении на слайд
		pauseOnDotsHover: true, //Остановка слайдера при наведении на точку слайда
		draggable: true, //Отключает перемотку слайдов мишкой
		swipe: true, //Отключает перемотку слайдов на сенсорах
		touchThreshold: 5, //Длинна свайпа для перемотки слайдов
		touchMove: true, //false Включает или отключает возможности свайпа
		waitForAnimate: true, //false Виключает или отключает возможность по клику листать слайди
		centerMode: true, //true Виравнивает слайди по центру
		variableWidth: true, // true При включении сам контент определяет ширину
		rows: 1, //Количество етажей слайдера
	});
});
$(document).ready(function () {
	$('.slider__instructors').slick({ //==Обращаемся к слайдеру в HTML
		arrows: false, //Выключени стрелки
		dots: true, //Включает точки
		adaptiveHeight: false, //Включает разную висоту слайдам
		slidesToShow: 1, //Количество слайдов
		slidesToScroll: 1, //Количество слайдов пролистуемо за одно нажатие
		speed: 1000, //Скорость пролистования слайдов
		easing: 'linear', // Анимация появления слайдов
		infinite: true, // Разрешает бесконечную прокрутку слайдов
		initialSlide: 0, //Указует с какого слайда начинать просмотр
		autoplay: false, //Автоматическое проигривание слайдов
		autoplaySpeed: 3000, //Время проигривания слайдов
		pauseOnFocus: true, //Остановка слайдера при фокусе на слайд
		pauseOnHover: true, //Остановка слайдера при наведении на слайд
		pauseOnDotsHover: true, //Остановка слайдера при наведении на точку слайда
		draggable: true, //Отключает перемотку слайдов мишкой
		swipe: true, //Отключает перемотку слайдов на сенсорах
		touchThreshold: 5, //Длинна свайпа для перемотки слайдов
		touchMove: false, //false Включает или отключает возможности свайпа
		waitForAnimate: true, //false Виключает или отключает возможность по клику листать слайди
		centerMode: false, //true Виравнивает слайди по центру
		variableWidth: false, // true При включении сам контент определяет ширину
		rows: 1, //Количество етажей слайдера
		responsive: [{
			breakpoint: 1000,
			settings: {
				arrows: true, //Включени стрелки
				dots: false, //Включает точки
				//Указиваем параметри при ширине меньшей указаний
			}
		}],
	});
});
$(document).ready(function () {
	$('.slider__coments').slick({ //==Обращаемся к слайдеру в HTML
		arrows: true, //Выключени стрелки
		dots: true, //Включает точки
		adaptiveHeight: true, //Включает разную висоту слайдам
		slidesToShow: 1, //Количество слайдов
		slidesToScroll: 1, //Количество слайдов пролистуемо за одно нажатие
		speed: 1000, //Скорость пролистования слайдов
		easing: 'linear', // Анимация появления слайдов
		infinite: true, // Разрешает бесконечную прокрутку слайдов
		initialSlide: 0, //Указует с какого слайда начинать просмотр
		autoplay: false, //Автоматическое проигривание слайдов
		autoplaySpeed: 3000, //Время проигривания слайдов
		pauseOnFocus: true, //Остановка слайдера при фокусе на слайд
		pauseOnHover: true, //Остановка слайдера при наведении на слайд
		pauseOnDotsHover: true, //Остановка слайдера при наведении на точку слайда
		draggable: true, //Отключает перемотку слайдов мишкой
		swipe: true, //Отключает перемотку слайдов на сенсорах
		touchThreshold: 5, //Длинна свайпа для перемотки слайдов
		touchMove: true, //false Включает или отключает возможности свайпа
		waitForAnimate: true, //false Виключает или отключает возможность по клику листать слайди
		centerMode: false, //true Виравнивает слайди по центру
		variableWidth: false, // true При включении сам контент определяет ширину
		rows: 1, //Количество етажей слайдера
	});
});