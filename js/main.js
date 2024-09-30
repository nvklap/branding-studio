// header
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const navLinks = document.querySelectorAll('.nav__item');

const intersectionOption = { rootMargin: '-50% 0px 0px 0px' };

const heroObserver = new IntersectionObserver(([entry]) => {
	const scrolled = !entry.isIntersecting;

	header.classList.toggle('header--fixed', scrolled);
	navLinks.forEach((link) =>
		link.classList.toggle('nav__item--fixed', scrolled)
	);
}, intersectionOption);

heroObserver.observe(hero);

// Toggle mobile menu
const navBtn = document.querySelector('.header__nav-trigger');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
	navBtn.classList.toggle('header__nav-trigger--open');
	nav.classList.toggle('nav--open');
	document.body.classList.toggle('locked');
});

// Hide Menu on click
nav.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav__link')) {
		navBtn.classList.remove('header__nav-trigger--open');
		nav.classList.remove('nav--open');
	}
});

// filter portfolio
const portfolioFilter = document.querySelector('.portfolio__filter-list');
const portfolioCards = document.querySelectorAll('.portfolio__card');

portfolioFilter.addEventListener('click', (e) => {
	if (e.target.tagName !== 'BUTTON') return;

	document
		.querySelector('.portfolio__filter-item--active')
		?.classList.remove('portfolio__filter-item--active');

	const currentFilter = e.target;
	const filterValue = currentFilter.dataset.filter;

	currentFilter.classList.add('portfolio__filter-item--active');

	portfolioCards.forEach((card) => {
		const matchesFilter =
			filterValue === 'all' || card.dataset.value === filterValue;

		if (matchesFilter) {
			card.classList.remove('hidden');
		} else {
			card.classList.add('hidden');
		}
	});
});

// slider
const swiperWrapper = document.querySelector('.testimonials__slider');
const slides = document.querySelectorAll('.testimonials__card');
const dotsWrapper = document.querySelector('.testimonials__nav-dots');
const dots = document.querySelectorAll('.testimonials__nav-dots button');
const prevButton = document.querySelector('.testimonials__slider-btn--prev');
const nextButton = document.querySelector('.testimonials__slider-btn--next');
let currentIndex = 0;

dotsWrapper.addEventListener('click', (e) => {
	if (e.target.tagName !== 'BUTTON') return;

	const index = Array.from(dots).indexOf(e.target);
	if (index === -1) return;

	document
		.querySelector('.testimonials__nav-dots .active')
		?.classList.remove('active');
	e.target.classList.add('active');

	currentIndex = index;
	updateSlider();
});

const updateSlider = () => {
	const slideWidth = slides[0].clientWidth;
	swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

	dots.forEach((dot, index) => {
		if (currentIndex === index) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
};

const showPrevSlide = () => {
	if (currentIndex > 0) {
		currentIndex--;
		updateSlider();
	}
};

const showNextSlide = () => {
	if (currentIndex < slides.length - 1) {
		currentIndex++;
		updateSlider();
	}
};

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

window.addEventListener('resize', updateSlider);
