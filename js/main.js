// Toggle mobile menu
const navBtn = document.querySelector('.header__nav-trigger');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('header__nav-trigger--open');
	nav.classList.toggle('nav--open');
});

// Hide Menu on click
nav.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__link')) {
		navBtn.classList.remove('header__nav-trigger--open');
		nav.classList.remove('nav--open');
	}
});
