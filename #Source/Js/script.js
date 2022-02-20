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

// Бургер
const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.burger__body');
const mainLogo = document.querySelector('.main-header__logo');
if(iconMenu){
	iconMenu.addEventListener('click', function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

		// Если закрыт
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
			if(iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
				mainLogo.classList.remove('_display')
				setTimeout(() => {
					mainLogo.classList.remove('_disable')
				}, 1);
			}
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

// Анимация при скролле
const animItems = document.querySelectorAll('._animItems');
const hoverItems = document.querySelectorAll('._noHover');

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params){
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');

				if (animItem.classList.contains('_disableHover')){
					setTimeout(() => {
						animItem.classList.remove('_disableHover');
						animItem.classList.add('_activeHover');
					}, 1500);
				}
			}
			// } else {
			// 	if(!animItem.classList.contains('_anim-no-hide')){
			// 		animItem.classList.remove('_active');
			// 	}
			// }
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// Табы

const tabBtns = Array.from(document.querySelectorAll(".tabs-triggers__item"));

tabBtns[0].classList.add("_active");
let activeBtn = tabBtns[0];

const tabSlides = Array.from(document.querySelectorAll(".tabs-content-item"));

tabSlides[0].classList.add("_active");
tabSlides[0].classList.add("_enable");
let activeSlide = tabSlides[0];

tabBtns.forEach((element) => {
	element.addEventListener("click", onTabBtnClick);
});

function onTabBtnClick(e) {
	e.preventDefault();
	const btn = e.target.closest(".tabs-triggers__item");
	changeBtn(btn);
}

function changeBtn(btn){

	if (btn.classList.contains("_active")){
		return;
	}
	activeBtn.classList.remove("_active");
	btn.classList.add("_active");
	activeBtn = btn;

	const indexBtn = tabBtns.indexOf(btn);
	changeSlide(indexBtn);
}

function changeSlide(index){
	let slideImage = activeSlide.querySelector('.tabs-content-item__image');
	slideImage.classList.remove('_active');
	activeSlide.classList.remove("_active");

	setTimeout(() => {
		activeSlide.classList.remove("_enable");
		tabSlides[index].classList.add("_enable");
	}, 400);
	setTimeout(() => {
		tabSlides[index].classList.add("_active");
		activeSlide = tabSlides[index];

		slideImage = activeSlide.querySelector('.tabs-content-item__image');
		slideImage.classList.add("_active");
	}, 450);
}
