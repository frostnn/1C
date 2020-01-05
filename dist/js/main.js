
$(function(){
$('.advantages-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  speed: 600,
  dots: true,
});

$('.status-list_item.nav').on('click', function() {
  $(this).toggleClass('active')
 });

 $('.users-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  speed: 600,
  dots: true,
});

});