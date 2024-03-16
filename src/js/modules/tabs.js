const navTabs = document.querySelectorAll('.nav-works__item');
const worksBlock = document.querySelectorAll('.works__block');

function activehandler() {
	navTabs.forEach((item) => {
		item.addEventListener('click', navActive);
	});
}

function navActive(event) {
	const activeTarget = event.currentTarget;
	const currTarget = document.querySelector('.nav-works__item.active');
	const index = Array.from(navTabs).indexOf(activeTarget);

	if (!activeTarget.classList.contains('active')) {
		activeTarget.classList.add('active');
		currTarget.classList.remove('active');
		worksActive(index);
	}
}

function worksActive(index) {
	worksBlock.forEach((block) => {
		block.classList.remove('active__block');
	});

	worksBlock[index].classList.add('active__block');
}


export { activehandler };