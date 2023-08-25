// Swiper
const swiper = new Swiper('.swiper', {
	speed: 400,

	navigation: {
		nextEl: '.custom-next',
		prevEl: '.custom-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {},
		// when window width is >= 480px
		480: {},
		// when window width is >= 640px
		630: {
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
		},
	},
})

// PopUp
const openPop = document.querySelectorAll('.open__popup'),
	closePop = [
		document.querySelector('.popup__area'),
		document.querySelector('.popup__close'),
	],
	popUp = document.querySelector('.popup')
openPop.forEach(n => {
	n.addEventListener('click', function (n) {
		n.preventDefault()
		popUp.classList.add('active')
	})
})
closePop[0].addEventListener('click', () => {
	popUp.classList.remove('active')
})
closePop[1].addEventListener('click', () => {
	popUp.classList.remove('active')
})

// Burger Menu
$(document).ready(function () {
	$('.burger__body').click(function () {
		$('.burger__menu,.header__nav,.burger__bg').addClass('open_nav')
		$('body').addClass('lock')
	})
})

$(document).ready(function () {
	$('.nav__close').click(function () {
		$('.burger__menu,.header__nav,.burger__bg').removeClass('open_nav')
		$('body').removeClass('lock')
	})
})
