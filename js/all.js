$(document).ready(function(){
	$('.top-menu .flip').mouseover(function(event) {
		$('.fa-caret-down').addClass('flip-icon');
    });
    $('.top-menu .flip').mouseout(function(event) {
		$('.fa-caret-down').removeClass('flip-icon');
    });
    $('.product').mouseover(function(event) {
    $('.fa-caret-down').addClass('flip-icon');
    });
    $('.product').mouseout(function(event) {
    $('.fa-caret-down').removeClass('flip-icon');
    });

    $('.top-menu .flip').mouseover(function(event) {
		$('.top-menu .flip').addClass('bg-white');
    });
    $('.top-menu .flip').mouseout(function(event) {
		$('.top-menu .flip').removeClass('bg-white');
    });
    $('.product').mouseover(function(event) {
    $('.top-menu .flip').addClass('bg-white');
    });
    $('.product').mouseout(function(event) {
    $('.top-menu .flip').removeClass('bg-white');
    });
});



$(document).ready(function(){
	$('.hover').mouseover(function(event) {
    event.preventDefault();
		$('.product').addClass('active');
    });
    $('.hover').mouseout(function(event) {
		$('.product').removeClass('active');
    });
    $('.product').mouseover(function(event) {
		$('.product').addClass('active');
    });
    $('.product').mouseout(function(event) {
		$('.product').removeClass('active');
    });
});


$(document).ready(function(){
	$('.product .product-list li').mouseover(function(event) {
		$(this).addClass('white-font');
    });
    $('.product .product-list li').mouseout(function(event) {
		$(this).removeClass('white-font');
    });
});


//產品列表 切換
$(document).ready(function(){
	$('.product-list .new').click(function() {
    event.preventDefault();
    $('.new-info').addClass('show');
    $('.new-info').removeClass('hidden');
    $('.popular-info').addClass('hidden');
    $('.type-info').addClass('hidden');
    });
});

$(document).ready(function(){
	$('.product-list .popular').click(function() {
    event.preventDefault();
    $('.popular-info').addClass('show');
    $('.popular-info').removeClass('hidden');
    $('.new-info').addClass('hidden');
    $('.type-info').addClass('hidden');
    });
});

$(document).ready(function(){
	$('.product-list .type').click(function() {
    event.preventDefault();
    $('.type-info').addClass('show');
    $('.type-info').removeClass('hidden');
    $('.new-info').addClass('hidden');
    $('.popular-info').addClass('hidden');
    });
});


//漢堡選單
$(document).ready(function() {
  $('.showmenu').on('click',  function(e){
     e.preventDefault();
     $('.menu').toggleClass('menu-show');
 });
});


