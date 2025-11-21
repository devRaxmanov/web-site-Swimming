window.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.loader')
	function loaderContent02() {
		window.addEventListener('load', function () {
			setTimeout(() => {
				loader.style.opacity = '0'

				setTimeout(() => {
					loader.style.display = 'none'
				}, 300)
			}, 2000)
		})
	}
	loaderContent02()

	// window scroll down header style js
	window.addEventListener('scroll', function () {
		const header = this.document.querySelector('header')
		header.classList.toggle('sticky', window.scrollY > 0)
	})
})
