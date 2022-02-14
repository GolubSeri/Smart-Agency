function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

function amh(){
	$(".amh").each(function () {
	  	var mh = 0, block_class = this.classList.item(0), lim = this.classList.item(2);
	  	if ($(window).width() >= Number(lim))
	  	{
			$("." + block_class).each(function () {
				$("." + block_class).css('min-height', 'auto');
				var h_block = $(this).height();
			  	if(h_block > mh) {
			     	mh = h_block;
			    };
			});
			$("." + block_class).css('min-height', mh + 'px');
	  	} else {
	  		$("." + block_class).each(function () {
				$("." + block_class).css('min-height', 'auto');
			});
	  	}
	});
}

amh();
jQuery(window).resize(function() { 
	amh();
 });

new Swiper('.clients-midle', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	loop: true,

	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},

	speed: 500,
});

const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.burger__body');
const mainLogo = document.querySelector('.main-header__logo');
if(iconMenu){
	iconMenu.addEventListener('click', function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

		// Если бургер закрыт
		if (!mainLogo.classList.contains('_disable')){
			mainLogo.classList.add('_disable');
			setTimeout(() => {
				mainLogo.classList.add('_display')
			}, 200);
		} else {
			mainLogo.classList.remove('_display')
			setTimeout(() => {
				mainLogo.classList.remove('_disable')
			}, 1);
		}
	});
}

// Прокрутка при клике 
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.main-header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();

			// Закрываем меню при переходе на блок
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
			mainLogo.classList.remove('_display')
			setTimeout(() => {
				mainLogo.classList.remove('_disable')
			}, 1);
		}
	}
}

const logoLink = document.querySelector('.logo__link');
if(logoLink){
	logoLink.addEventListener('click', function(e){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		e.preventDefault();
	});
}