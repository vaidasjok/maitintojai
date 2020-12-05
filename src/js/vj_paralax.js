export function vj_paralax() {
	const parallaxEls = document.querySelectorAll("[data-speed]");
 
	window.addEventListener("scroll", scrollHandler);
	 
	function scrollHandler() {
	  var i = 0;
	  for (const parallaxEl of parallaxEls) {

	  	if(isOnScreen(parallaxEl)) {
	  		const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
	    	let firstTop = parallaxEl.getBoundingClientRect().top;
	    	let transformY;
	    	if(i == 0 || i == 1) {
	    		transformY = (((firstTop - parallaxEl.getBoundingClientRect().top) - this.pageYOffset) * parallaxEl.dataset.speed);
	    	} else {
	    		transformY = (((firstTop + parallaxEl.getBoundingClientRect().top) - this.pageYOffset) * parallaxEl.dataset.speed);
	    	}
	    		    
		    if (parallaxEl.classList.contains("banner-title")) {
		      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
		    } else if (parallaxEl.classList.contains("banner-subtitle")) {
		      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
		    } else {
		    	
		      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;

		    }
		}
		i++;
	  }
	}


	const isOnScreen = el => {
		const scroll = window.scrollY || window.pageYOffset
		const boundsTop = el.getBoundingClientRect().top + scroll
		
		const viewport = {
			top: scroll,
			bottom: scroll + window.innerHeight,
		}
		
	    const bounds = {
			top: boundsTop,
			bottom: boundsTop + el.clientHeight,
		}
		
		return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
			|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
	}
}