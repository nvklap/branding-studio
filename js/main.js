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
