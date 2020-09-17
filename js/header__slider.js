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