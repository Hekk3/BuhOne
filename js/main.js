const track1 = document.querySelector('.header__slider-track'),
	 headerDot1 = document.querySelector('.header__dot1'),
	 headerDot2 = document.querySelector('.header__dot2'),
	 headerDot3 = document.querySelector('.header__dot3'),
	 headerDot4 = document.querySelector('.header__dot4'),
	 headerPrev = document.querySelector('.header__slider-button1'),
	 headerNext = document.querySelector('.header__slider-button2'),
	 headerSlide = document.querySelectorAll('.header__slides');
let counter = 0;
let position1 = 0;


headerDot1.classList.add('header__slider-btn_active');
headerPrev.style.pointerEvents = "none";
headerSlide[0].classList.add('header__slides_active');


let checkBtnforDots = function() { // check buttons - check when the button need stops
	position1 === 0 ? headerDot1.classList.add('header__slider-btn_active') : headerDot1.classList.remove('header__slider-btn_active') ;
	position1 === 1 ? headerDot2.classList.add('header__slider-btn_active') : headerDot2.classList.remove('header__slider-btn_active') ;
	position1 === 2 ? headerDot3.classList.add('header__slider-btn_active') : headerDot3.classList.remove('header__slider-btn_active') ;
	position1 === 3 ? headerDot4.classList.add('header__slider-btn_active') : headerDot4.classList.remove('header__slider-btn_active') ;

	position1 === 0 ? headerSlide[0].classList.add('header__slides_active') : headerSlide[0].classList.remove('header__slides_active') ;
	position1 === 1 ? headerSlide[1].classList.add('header__slides_active') : headerSlide[1].classList.remove('header__slides_active') ;
	position1 === 2 ? headerSlide[2].classList.add('header__slides_active') : headerSlide[2].classList.remove('header__slides_active') ;
	position1 === 3 ? headerSlide[3].classList.add('header__slides_active') : headerSlide[3].classList.remove('header__slides_active') ;
}


headerDot1.addEventListener('click', () => {
	position1 = 0; // take width the item;

	checkBtn();
	checkBtnforDots();
});
headerDot2.addEventListener('click', () => {
	position1 = 1; // take width the item;

	checkBtn();
	checkBtnforDots();
});


headerDot3.addEventListener('click', () => {
	position1 = 2; // take width the item;

	checkBtn();
	checkBtnforDots();
});

headerDot4.addEventListener('click', () => {
	position1 = 3; // take width the item;

	checkBtn();
	checkBtnforDots();
});



let checkBtn = function() { // check buttons - check when the button need stops
	position1 === 0 ? headerPrev.style.pointerEvents = "none" : headerPrev.style.pointerEvents = "auto" ;
	position1 === 3 ? headerNext.style.pointerEvents = "none" : headerNext.style.pointerEvents = "auto" ;
}

headerPrev.addEventListener('click', () => {
	position1--; // take width the item;

	checkBtn();
	checkBtnforDots();
});

headerNext.addEventListener('click', () => {
	position1++; // take width the item;

	checkBtn();
	checkBtnforDots();
});


// slider number two //////////////////////////////////////////////////////////////////

const clientTrack = document.querySelector('.clients__track'),
	  clientItem  = document.querySelectorAll('.clients__track-slides'),
	  clientPrev = document.querySelector('.clients__button-prev1'),
	  clientNext = document.querySelector('.clients__button-next2'),
	  clientDot1 = document.querySelector('.client__dots-1'),
	  clientDot2 = document.querySelector('.client__dots-2'),
	  clientDot3 = document.querySelector('.client__dots-3'),
	  clientDot4 = document.querySelector('.client__dots-4');

let clientItemWidth = clientItem[0].clientWidth;
let clientPosition = 0;
let clientStopNext = 0;

// default
clientPrev.style.pointerEvents = "none";
clientDot1.classList.add('clients__dot_active');


const clientMoveTrack = function() {
	clientTrack.style.transform = "translateX(" + clientPosition + "px)"; // When we click on the button, we move the "track" using translateX + position.
}


let clientCheckBtnforDots = () => { // check buttons - check when the button need stops
	clientPosition === 0 ? clientDot1.classList.add('clients__dot_active') : clientDot1.classList.remove('clients__dot_active') ;
	clientPosition === -clientItemWidth - 10 ? clientDot2.classList.add('clients__dot_active') : clientDot2.classList.remove('clients__dot_active') ;
	clientPosition === -clientItemWidth * 2 - 10 * 2 ? clientDot3.classList.add('clients__dot_active') : clientDot3.classList.remove('clients__dot_active') ;
	clientPosition === -clientItemWidth * 3 - 10 * 3 ? clientDot4.classList.add('clients__dot_active') : clientDot4.classList.remove('clients__dot_active') ;
}

clientDot1.addEventListener('click', function() {
	clientPosition = 0;

	clientCheckBtnforDots();
	clientMoveTrack();
});
clientDot2.addEventListener('click', function() {
	clientPosition = -clientItemWidth - 10;

	clientCheckBtnforDots();
	clientMoveTrack();
});
clientDot3.addEventListener('click', function() {
	clientPosition = -clientItemWidth * 2 - 10 * 2;

	clientCheckBtnforDots();
	clientMoveTrack();
});
clientDot4.addEventListener('click', function() {
	clientPosition = -clientItemWidth * 3 - 10 * 3;

	clientCheckBtnforDots();
	clientMoveTrack();
});


let clientCheckBtn = function() { // check buttons - check when the button need stops
	clientPosition === 0 ? clientPrev.style.pointerEvents = "none" : clientPrev.style.pointerEvents = "auto" ;
	clientPosition <= -clientItemWidth * 3 ? clientNext.style.pointerEvents = "none" : clientNext.style.pointerEvents = "auto" ;
}

clientPrev.addEventListener('click', function () {
	clientPosition += clientItemWidth + 10;

	clientCheckBtn();
	clientMoveTrack();
	clientCheckBtnforDots();
});

clientNext.addEventListener('click', function () {
	clientPosition += -clientItemWidth - 10;

	clientCheckBtn();
	clientMoveTrack();
	clientCheckBtnforDots();
});


// slider number three //////////////////////////////////////////////////////////////////



const reviewsTrack = document.querySelector('.reviews__track'),
	  reviewsItem  = document.querySelectorAll('.reviews__track-slides'),
	  reviewsPrev = document.querySelector('.reviews__button-prev1'),
	  reviewsNext = document.querySelector('.reviews__button-next2'),
	  reviewsDot1 = document.querySelector('.reviews__dots-1'),
	  reviewsDot2 = document.querySelector('.reviews__dots-2'),
	  reviewsDot3 = document.querySelector('.reviews__dots-3'),
	  reviewsDot4 = document.querySelector('.reviews__dots-4');

let reviewsItemWidth = reviewsItem[0].clientWidth;
let reviewsPosition = 0;
let reviewsStopNext = 0;

// default
reviewsPrev.style.pointerEvents = "none";
reviewsDot1.classList.add('reviews__dot_active');


const reviewsMoveTrack = function() {
	reviewsTrack.style.transform = "translateX(" + reviewsPosition + "px)"; // When we click on the button, we move the "track" using translateX + position.
}


let reviewsCheckBtnforDots = () => { // check buttons - check when the button need stops
	reviewsPosition === 0 ? reviewsDot1.classList.add('reviews__dot_active') : reviewsDot1.classList.remove('reviews__dot_active') ;
	reviewsPosition === -reviewsItemWidth - 10 ? reviewsDot2.classList.add('reviews__dot_active') : reviewsDot2.classList.remove('reviews__dot_active') ;
	reviewsPosition === -reviewsItemWidth * 2 - 10 * 2 ? reviewsDot3.classList.add('reviews__dot_active') : reviewsDot3.classList.remove('reviews__dot_active') ;
	reviewsPosition === -reviewsItemWidth * 3 - 10 * 3 ? reviewsDot4.classList.add('reviews__dot_active') : reviewsDot4.classList.remove('reviews__dot_active') ;
}

reviewsDot1.addEventListener('click', function() {
	reviewsPosition = 0;

	reviewsCheckBtnforDots();
	reviewsMoveTrack();
});
reviewsDot2.addEventListener('click', function() {
	reviewsPosition = -reviewsItemWidth - 10;

	reviewsCheckBtnforDots();
	reviewsMoveTrack();
});
reviewsDot3.addEventListener('click', function() {
	reviewsPosition = -reviewsItemWidth * 2 - 10 * 2;

	reviewsCheckBtnforDots();
	reviewsMoveTrack();
});
reviewsDot4.addEventListener('click', function() {
	reviewsPosition = -reviewsItemWidth * 3 - 10 * 3;

	reviewsCheckBtnforDots();
	reviewsMoveTrack();
});


let reviewsCheckBtn = function() { // check buttons - check when the button need stops
	reviewsPosition === 0 ? reviewsPrev.style.pointerEvents = "none" : reviewsPrev.style.pointerEvents = "auto" ;
	reviewsPosition <= -reviewsItemWidth * 3 ? reviewsNext.style.pointerEvents = "none" : reviewsNext.style.pointerEvents = "auto" ;
}

reviewsPrev.addEventListener('click', function () {
	reviewsPosition += reviewsItemWidth + 10;

	reviewsCheckBtn();
	reviewsMoveTrack();
	reviewsCheckBtnforDots();
});

reviewsNext.addEventListener('click', function () {
	reviewsPosition += -reviewsItemWidth - 10;

	reviewsCheckBtn();
	reviewsMoveTrack();
	reviewsCheckBtnforDots();
});