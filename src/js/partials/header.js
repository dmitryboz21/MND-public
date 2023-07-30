jQuery(function () { 


	$('.sh-burger').on('click',function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-mob-menu').toggleClass('sh-mob-menu--shown');
		$('body').toggleClass('body-lock');
		$('html').toggleClass('body-lock');
	});

	$('.js-sh-mobmenu-l1__item--has-sub a').on('click',function (e) {
		e.stopPropagation();
	});

	$('.js-sh-mobmenu-l1__item--has-sub').on('click',function () {
		$(this).toggleClass('sh-mobmenu-l1__item--has-sub--active');
		$(this).find('.sh-mobmenu-l2').stop(true).slideToggle(300);
	});

	

	$('.js-sh-menu-l1__item').on('mouseover',function () {
		console.log(1);

		var attrTarget=$(this).attr('data-target');
		var l2Menus=$('.sh-menu-l2-menus');
		var target=typeof(attrTarget)!=='undefined'?$('#'+attrTarget):$('.sh-menu-l2').first();
		if(!target.hasClass('sh-menu-l2--shown')){
			l2Menus.css('min-height', l2Menus.height());
			console.log(target);
			target.siblings('.sh-menu-l2--shown').removeClass('sh-menu-l2--shown').stop(true).hide();
			target.addClass('sh-menu-l2--shown').stop(true).fadeIn(300);
			l2Menus.css('min-height', target.height());
		}
		

	});


});