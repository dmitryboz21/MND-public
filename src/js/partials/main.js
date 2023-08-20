function setVw() {
	let vw = document.documentElement.clientWidth / 100;
	document.documentElement.style.setProperty('--vw', `${vw}px`);
}

setVw();
window.addEventListener('resize', setVw);

//jQuery.extend(jQuery.fancybox.defaults, {
$('[data-fancybox-customized]').fancybox({
	baseTpl:
		'<div class="fancybox-container" role="dialog" tabindex="-1">' +
		'<div class="fancybox-bg"></div>' +
		'<div class="fancybox-inner">' +
		'<div class="fancybox-infobar fancybox-infobar--hidden">' +
		"<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>" +
		"</div>" +
		'<div class="fancybox-toolbar">{{buttons}}</div>' +
		'<div class="fancybox-navigation">{{arrows}}</div>' +
		'<div class="fancybox-stage"></div>' +
		'<div class="fancybox-caption"></div>' +
		"</div>" +
		"</div>",
		buttons:[],
		baseClass: "customized-fancybox-w-slides",
		
		btnTpl: {
			download:
				'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
				'<svg viewBox="0 0 40 40">' +
				'<path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" />' +
				"</svg>" +
				"</a>",
			zoom:
				'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
				'<svg viewBox="0 0 40 40">' +
				'<path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" />' +
				"</svg>" +
				"</button>",
	
			close:
				'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
				'<svg viewBox="0 0 40 40">' +
				'<path d="M10,10 L30,30 M30,10 L10,30" />' +
				"</svg>" +
				"</button>",
	
			// This small close button will be appended to your html/inline/ajax content by default,
			// if "smallBtn" option is not set to false
			smallBtn:
				'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
	
			// Arrows
			arrowLeft:
				'<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left fancy-custom-arrow fancy-custom-arrow--left" title="{{PREV}}" href="javascript:;">' +
				'<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.3738 31.6138C24.6496 31.8839 25.0007 32.0312 25.4144 32.0312C26.2418 32.0312 26.9062 31.3928 26.9062 30.5824C26.9062 30.1773 26.7307 29.8089 26.4424 29.5265L17.6667 21.1283L26.4424 12.7547C26.7307 12.4723 26.9062 12.0917 26.9062 11.6988C26.9062 10.8885 26.2418 10.25 25.4144 10.25C25.0007 10.25 24.6496 10.3973 24.3738 10.6675L14.6203 19.9988C14.2693 20.318 14.1063 20.7109 14.0937 21.1406C14.0937 21.5704 14.2693 21.9387 14.6203 22.2702L24.3738 31.6138Z" fill="#2497D1"/></svg>' +
				"</a>",
	
			arrowRight:
				'<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right fancy-custom-arrow fancy-custom-arrow--right" title="{{NEXT}}" href="javascript:;">' +
				'<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6262 9.3862C16.3504 9.11609 15.9993 8.96875 15.5856 8.96875C14.7582 8.96875 14.0938 9.60721 14.0938 10.4176C14.0938 10.8227 14.2693 11.1911 14.5576 11.4735L23.3333 19.8717L14.5576 28.2453C14.2693 28.5277 14.0938 28.9083 14.0938 29.3012C14.0938 30.1115 14.7582 30.75 15.5856 30.75C15.9993 30.75 16.3504 30.6027 16.6262 30.3325L26.3797 21.0012C26.7307 20.682 26.8937 20.2891 26.9062 19.8594C26.9062 19.4296 26.7307 19.0613 26.3797 18.7298L16.6262 9.3862Z" fill="#2497D1"/></svg>' +
				"</a>"
		},
		afterLoad : function(instance, current) {
			current.$content.prepend( '<div class="cust-fancy-slide-infobar cust-fancy-slide-infobar--top"><div class="fancybox-custom-close"><svg data-fancybox-close width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 9.5L9.5 22.5M9.5 9.5L22.5 22.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>').append( '<div  class="cust-fancy-slide-infobar cust-fancy-slide-infobar--bottom">'+(current.index+1)+' из '+instance.group.length+'</div>');
            //current.height = current.height +32+2+18+19;
		}

		  
});

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
			appendArrows: $(this).closest('.js-gallery-slider-section').find('.long-slider-arrows'),
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
	autosize($('.js-textarea-autosize'));


});