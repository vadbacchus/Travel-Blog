AOS.init({
      offset: 200,
      duration: 1000,
      disable: window.innerWidth < 960,
    });


var searchBtn   = document.querySelector('.navbar__search'),
	searchForm  = document.querySelector('.navbar__form'),
	searchInput = document.querySelector('.navbar__input');

searchBtn.onclick = function () {
  searchForm.classList.toggle('show');
  searchInput.focus();
};

var navbar = document.querySelector('.navbar'),
	navBtn = document.querySelector('.nav-btn'),
	navBtnOffset = navBtn.offsetTop,
	windowHeight = Math.max(
  		document.body.scrollHeight, document.documentElement.scrollHeight,
  		document.body.offsetHeight, document.documentElement.offsetHeight,
  		document.body.clientHeight, document.documentElement.clientHeight
	);


window.onscroll = function () {
	resizeElem();
	loadMore();
};


	
function resizeElem() {
  if( document.body.scrollTop > navBtnOffset || 
	  document.documentElement.scrollTop  > navBtnOffset) {

	    navBtn.classList.add('resize');
		navbar.classList.add('invisible');

	} else {

		navBtn.classList.remove('resize');
		navbar.classList.remove('invisible');

	}
}

function loadMore() {
	var loader = document.querySelector('.loader');
	var content = document.querySelector('.content-js');

	setTimeout(function(){
	if (windowHeight >= windowHeight - 100) {
		loader.classList.add('hide');
		content.classList.add('show');
	
	}

	}, 2000)

}

var nav = document.querySelector('nav'),
	closeBtn = document.querySelector('.nav__closebtn');


navBtn.onclick = function() {
	nav.style.width = '100%';
};

closeBtn.onclick = function() {
	nav.style.width = 0;
};





//BracketHighlighter
//