window.addEventListener('DOMContentLoaded', () => {
	//	sliders js start
	function firstSlider() {
		let firstSwipper = new Swiper('.bannerSlider', {
			slidesPerView: '1',
			centeredSlides: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
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

	function teacherSwipper() {
		var swiper = new Swiper('.teachersSlider', {
			slidesPerView: 7,
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
	teacherSwipper()

	function branchSwipper() {
		var swiper = new Swiper('.branchContents', {
			slidesPerView: 4,
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
	branchSwipper()
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

	// for second contanct page js
	const checkboxSecond01 = document.querySelector(
			'.contactPage.second .form form .btnCheck .checkbox .check01 input'
		),
		checkboxSecond02 = document.querySelector(
			'.contactPage.second .form form .btnCheck .checkbox .check01:nth-child(2) input'
		)

	checkboxSecond01.addEventListener('click', () => {
		checkboxSecond01.classList.toggle('active')
	})
	checkboxSecond02.addEventListener('click', () => {
		checkboxSecond02.classList.toggle('active')
	})

	// for input mask js
	function inputPhoneNumber(nameId) {
		const phoneInput = document.getElementById(nameId)

		IMask(phoneInput, {
			mask: '+{7} (000) 000-00-00',
		})
	}
	inputPhoneNumber('phone')

	// for select js
	function selectOption(perentclass, activeClass, optionClass) {
		const select = document.querySelector(perentclass)
		const trigger = select.querySelector(activeClass)
		const options = select.querySelectorAll(optionClass)

		trigger.addEventListener('click', () => {
			select.classList.toggle('active')
		})

		options.forEach(option => {
			option.addEventListener('click', () => {
				trigger.textContent = option.textContent
				select.classList.remove('active')
			})
		})
	}
	selectOption(
		'.contactPage .custom-select',
		'.contactPage .select-trigger',
		'.contactPage .select-options li'
	)
	selectOption(
		'.contactPage.second .custom-select',
		'.contactPage.second .select-trigger',
		'.contactPage.second .select-options li'
	)

	// for videoControl js
	const videos = document.querySelectorAll('.videoSlider video')
	const items = document.querySelectorAll('.slideItems')

	items.forEach(item => {
		const overlay = item.querySelector('.video-overlay')
		const video = item.querySelector('video')

		overlay.addEventListener('click', () => {
			videos.forEach(v => {
				if (v !== video) v.pause()
			})
			overlay.style.display = 'none'
			video.play()
		})
		video.addEventListener('pause', () => {
			overlay.style.display = 'flex'
		})
	})

	// gallery js start
	const lightbox = GLightbox({
		selector: '.glightbox',
		touchNavigation: true,
		loop: true,
	})
	// gallery js end

	// faqs section js start
	const faqItems = document.querySelectorAll('.faq-item')

	faqItems.forEach(item => {
		item.querySelector('.faq-header').addEventListener('click', () => {
			faqItems.forEach(i => {
				if (i !== item) i.classList.remove('active')
			})
			item.classList.toggle('active')
		})
	})
	// faqs section js end

	// animation js
	function animationContent(items) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('show')
					}
				})
			},
			{
				threshold: 0.2,
			}
		)

		items.forEach(item => observer.observe(item))
	}
	const animationContents = document.querySelectorAll('.services .content'),
		categoryAnimation = document.querySelectorAll('.category .item')

	animationContent(animationContents)
	animationContent(categoryAnimation)
})
