// Mobile menu | Show or hide
// Menu icon | toggle
const primaryNav = document.querySelector('.primary-navigation');
const mobileNavBtn = document.querySelector('.mobile-nav-toggle');

const mobileNavBtnOpen = document.querySelector('.mobile-nav-open');
const mobileNavBtnClose = document.querySelector('.mobile-nav-close');

mobileNavBtn.addEventListener('click', ()=> {
	primaryNav.classList.toggle('true');
	mobileNavBtnOpen.classList.toggle('hide');
	mobileNavBtnClose.classList.toggle('show');
})

// Close mobile menu when link is clicked
// Minu icons reset
const links = document.querySelectorAll('.nav-list a');

links.forEach(l => {
	l.addEventListener('click', ()=> {
		primaryNav.classList.remove('true');
		mobileNavBtnOpen.classList.remove('hide');
		mobileNavBtnClose.classList.remove('show');
	})
})