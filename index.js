const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		delay: 3500,

	},
	keyboard: true,
	mousewheel: true,
	autoplay: {
		delay: 3500,
	},



})
