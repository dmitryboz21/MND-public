function setVw() {
	let vw = document.documentElement.clientWidth / 100;
	document.documentElement.style.setProperty('--vw', `${vw}px`);
}

setVw();
window.addEventListener('resize', setVw);


jQuery(function () {
	$(".js-ah-slider").each(function () {
		$(this).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
			prevArrow: '<button type="button" class="ah-arrow ah-arrow--prev"><svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1262 9.3862C16.8504 9.11609 16.4993 8.96875 16.0856 8.96875C15.2582 8.96875 14.5938 9.60721 14.5938 10.4176C14.5938 10.8227 14.7693 11.1911 15.0576 11.4735L23.8333 19.8717L15.0576 28.2453C14.7693 28.5277 14.5938 28.9083 14.5938 29.3012C14.5938 30.1115 15.2582 30.75 16.0856 30.75C16.4993 30.75 16.8504 30.6027 17.1262 30.3325L26.8797 21.0012C27.2307 20.682 27.3937 20.2891 27.4062 19.8594C27.4062 19.4296 27.2307 19.0613 26.8797 18.7298L17.1262 9.3862Z" fill="#2497D1"/></svg></button>',
			nextArrow: '<button type="button" class="ah-arrow ah-arrow--next"><svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1262 9.3862C16.8504 9.11609 16.4993 8.96875 16.0856 8.96875C15.2582 8.96875 14.5938 9.60721 14.5938 10.4176C14.5938 10.8227 14.7693 11.1911 15.0576 11.4735L23.8333 19.8717L15.0576 28.2453C14.7693 28.5277 14.5938 28.9083 14.5938 29.3012C14.5938 30.1115 15.2582 30.75 16.0856 30.75C16.4993 30.75 16.8504 30.6027 17.1262 30.3325L26.8797 21.0012C27.2307 20.682 27.3937 20.2891 27.4062 19.8594C27.4062 19.4296 27.2307 19.0613 26.8797 18.7298L17.1262 9.3862Z" fill="#2497D1"/></svg></button>',
			responsive: [{
					breakpoint: 900,
					settings: {
						variableWidth: true,
						slidesToScroll: 1,
						//slidesToShow: 2,
					}
				},

			]

		});
	});
	$(".js-long-slider").each(function () {
		$(this).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			variableWidth: true,
			autoplaySpeed: 2000,
			dots: false,
			prevArrow: '<button type="button" class="ah-arrow ah-arrow--prev"><svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1262 9.3862C16.8504 9.11609 16.4993 8.96875 16.0856 8.96875C15.2582 8.96875 14.5938 9.60721 14.5938 10.4176C14.5938 10.8227 14.7693 11.1911 15.0576 11.4735L23.8333 19.8717L15.0576 28.2453C14.7693 28.5277 14.5938 28.9083 14.5938 29.3012C14.5938 30.1115 15.2582 30.75 16.0856 30.75C16.4993 30.75 16.8504 30.6027 17.1262 30.3325L26.8797 21.0012C27.2307 20.682 27.3937 20.2891 27.4062 19.8594C27.4062 19.4296 27.2307 19.0613 26.8797 18.7298L17.1262 9.3862Z" fill="#2497D1"/></svg></button>',
			nextArrow: '<button type="button" class="ah-arrow ah-arrow--next"><svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1262 9.3862C16.8504 9.11609 16.4993 8.96875 16.0856 8.96875C15.2582 8.96875 14.5938 9.60721 14.5938 10.4176C14.5938 10.8227 14.7693 11.1911 15.0576 11.4735L23.8333 19.8717L15.0576 28.2453C14.7693 28.5277 14.5938 28.9083 14.5938 29.3012C14.5938 30.1115 15.2582 30.75 16.0856 30.75C16.4993 30.75 16.8504 30.6027 17.1262 30.3325L26.8797 21.0012C27.2307 20.682 27.3937 20.2891 27.4062 19.8594C27.4062 19.4296 27.2307 19.0613 26.8797 18.7298L17.1262 9.3862Z" fill="#2497D1"/></svg></button>',
			appendArrows: $(this).closest('.js-long-slider-section').find('.long-slider-arrows'),
			responsive: [{
					breakpoint: 1045,
					settings: {
						dots: true,
						//appendDots: $(this).closest('.js-long-slider-section').find('.js-long-slider-dots-mob'),


					}
				},

			]
		});
	});
	$(".js-gallery-slider").each(function () {
		$(this).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			variableWidth: true,
			autoplaySpeed: 2000,
			dots: false,
			prevArrow: '<button type="button" class="ah-arrow ah-arrow--prev"><svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1262 9.3862C16.8504 9.11609 16.4993 8.96875 16.0856 8.96875C15.2582 8.96875 14.5938 9.60721 14.5938 10.4176C14.5938 10.8227 14.7693 11.1911 15.0576 11.4735L23.8333 19.8717L15.0576 28.2453C14.7693 28.5277 14.5938 28.9083 14.5938 29.3012C14.5938 30.1115 15.2582 30.75 16.0856 30.75C16.4993 30.75 16.8504 30.6027 17.1262 30.3325L26.8797 21.0012C27.2307 20.682 27.3937 20.2891 27.4062 19.8594C27.4062 19.4296 27.2307 19.0613 26.8797 18.7298L17.1262 9.3862Z" fill="#2497D1"/></svg></button>',
			nextArrow: '<button type="button" class="ah-arrow ah-arrow--next"><svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1262 9.3862C16.8504 9.11609 16.4993 8.96875 16.0856 8.96875C15.2582 8.96875 14.5938 9.60721 14.5938 10.4176C14.5938 10.8227 14.7693 11.1911 15.0576 11.4735L23.8333 19.8717L15.0576 28.2453C14.7693 28.5277 14.5938 28.9083 14.5938 29.3012C14.5938 30.1115 15.2582 30.75 16.0856 30.75C16.4993 30.75 16.8504 30.6027 17.1262 30.3325L26.8797 21.0012C27.2307 20.682 27.3937 20.2891 27.4062 19.8594C27.4062 19.4296 27.2307 19.0613 26.8797 18.7298L17.1262 9.3862Z" fill="#2497D1"/></svg></button>',

		});
	});


});