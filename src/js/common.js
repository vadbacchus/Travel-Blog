var searchBtn = document.querySelector('.navbar__search'),
	searchForm = document.querySelector('.navbar__form'),
	searchInput = document.querySelector('.navbar__input');

searchBtn.onclick = function () {
	searchForm.classList.toggle('show');
	searchInput.focus();
}
