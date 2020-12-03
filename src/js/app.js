window.$ = window.jQuery = require('jquery');
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


$(document).ready(function() {
	$('#MenuIcon.is-closed').click(function() {
		$('#MainMenu').toggleClass('is-open is-closed');
		$('#MenuIcon').toggleClass('is-open is-closed');
	});

	// $("#MenuIcon.is-open").click(function() {
	// 	// alert('veikia');
	// 	$('#MainMenu').removeClass('is-open');
	// 	$('#MenuIcon').addClass('is-closed');
	// });
});

window.onload = function() {
	var mySwiper = new Swiper('.swiper-container', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    slidesPerView: 1,
	    spaceBetween: 30,
	    // effect: 'coverflow',
	    breakpoints: {
		    767: {
		    	slidesPerView: 2,
			},
			960: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				centeredSlides: false
			}

		},
		// coverflow: {
  //           // rotate: 40,
  //           stretch: 0,
  //           // depth: 50,
  //           modifier: 1,
  //           slideShadows : false
  //       },
	    // centeredSlides: true,

	    // If we need pagination
	    // pagination: {
	    //   el: '.swiper-pagination',
	    // },

	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },

	    // And if we need scrollbar
	    // scrollbar: {
	    //   el: '.swiper-scrollbar',
	    // },
	});
}