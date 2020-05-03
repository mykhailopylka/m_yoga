// $(function () {

//   $('.header-slider').slick({
//     arrows: false,
//     vertical: true,
//     dots: true,
//     dotsClass: 'header-dots',
//     autoplay: 2000
//   });

//   // $('.header__burger').on('click', function () {
//   //   $('.header__list').slideToggle();
//   // });  
// });

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});