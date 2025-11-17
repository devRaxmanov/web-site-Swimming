window.addEventListener('DOMContentLoaded', () => {
	//	sliders js start
	function firstSlider() {
		let firstSwipper = new Swiper('.bannerSlider', {
			// Optional parameters
			slidesPerView: '1',
			centeredSlides: true,
			loop: true,
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		})
	}
	firstSlider()
	function secondSwipper() {
		var swiper = new Swiper('.secondSwiper', {
			slidesPerView: '2.8',
			centeredSlides: true,
			spaceBetween: 20,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		})
	}
	secondSwipper()
	function videoSwipper() {
		var swiper = new Swiper('.videoSwiper', {
			slidesPerView: 6,
			centeredSlides: true,
			spaceBetween: 20,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		})
	}
	videoSwipper()

	// sliders js end

	// window scroll down header style js
	window.addEventListener('scroll', function () {
		const header = this.document.querySelector('header')
		header.classList.toggle('sticky', window.scrollY > 0)
	})

	// tab content js start
	const tabs = document.querySelectorAll('.sorting .tabBtn'),
		tabContentPerrent = document.querySelector('.sorting .tabs'),
		contents = document.querySelectorAll('.sorting .item')

	function hideTabContent() {
		tabs.forEach(tabItem => {
			tabItem.classList.remove('active')
		})
		contents.forEach(item => {
			item.classList.remove('active')
			item.classList.add('hide')
			item.classList.remove('show')
		})
	}

	function showTabContent(index = 0) {
		tabs[index].classList.add('active')
		contents[index].classList.remove('hide')
		contents[index].classList.add('show', 'fade')
	}

	hideTabContent()
	showTabContent()

	tabContentPerrent.addEventListener('click', event => {
		const target = event.target
		if (target && target.classList.contains('tabBtn')) {
			tabs.forEach((item, index) => {
				if (target === item) {
					hideTabContent()
					showTabContent(index)
				}
			})
		}
	})
	// tab content js end

	// checkbox active noactive js start
	const checkbox01 = document.querySelector(
			'.contactPage .form form .btnCheck .checkbox .check01 input'
		),
		checkbox02 = document.querySelector(
			'.contactPage .form form .btnCheck .checkbox .check01:nth-child(2) input'
		)

	checkbox01.addEventListener('click', () => {
		checkbox01.classList.toggle('active')
	})
	checkbox02.addEventListener('click', () => {
		checkbox02.classList.toggle('active')
	})

	// video controls js start
	const playBtn = document.querySelectorAll('.videoSlider .playVideobtn img'),
		perentDiv = document.querySelectorAll('.videoSlider .playVideobtn')

	function hideVideoContent() {
		perentDiv.forEach((item, inx) => {
			perentDiv[inx].style.display = 'flex'
		})
	}

	function showVideoContent() {
		perentDiv.forEach((item, inx) => {
			item.addEventListener('click', () => {
				hideVideoContent()
				perentDiv[inx].style.display = 'none'
			})
		})
	}
	showVideoContent()
})
