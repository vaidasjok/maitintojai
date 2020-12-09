window.$ = window.jQuery = require('jquery');
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import {vj_paralax} from './vj_paralax.js';
import {vj_mouse_pointer} from './vj_mouse_pointer.js';
require('./jquery.fitvids.js');
import 'lightgallery.js/dist/js/lightgallery.js'; 


$(document).ready(function() {
	$('#MenuIcon.is-closed').click(function() {
		$('#MainMenu').toggleClass('is-open is-closed');
		$('#MenuIcon').toggleClass('is-open is-closed');
	});

	vj_paralax();

	vj_mouse_pointer();

	$(".vj_responsive_video").fitVids();

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

	var mySwiperTwo = new Swiper('.swiper-container-gallery', {
	    // Optional parameters

	    // effect: 'coverflow',
	    direction: 'horizontal',
		// loop: false,
		slidesPerView: 2,
		spaceBetween: 20,
		centeredSlides: true,
		mousewheel: false,
	  	keyboard: true,
	  	autoplay: false,
	  	loop: true,
	  	slidesPerGroup: 1,
	  	slidesPerGroupSkip: 0,
	    breakpoints: {
		    767: {
		    	slidesPerView: 3,
		    	spaceBetween: 20,
			},
			960: {
				slidesPerView: 5,
				slidesPerGroup: 1,
				spaceBetween: 10,
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
	    centeredSlides: true,

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


	lightGallery(document.getElementById('lightgallery'), {
	    selector: 'a' 
	});
}