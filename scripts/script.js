// Темная тема

const darkBlocks = document.querySelectorAll('.dark-blocks');
const themeSwitchers = document.querySelectorAll('.footer__theme-switcher');

themeSwitchers.forEach(el => el.addEventListener('click', toggleDarkBlocks));

function toggleDarkBlocks() {
    for (let i = 0; i < darkBlocks.length; i++) {
        const darkBlock = darkBlocks[i];
        darkBlock.classList.toggle('_theme_dark');
    }
}


// Бургерное меню

const burgerMenu = document.querySelector('.header__links');
const burgerButton = document.querySelector('.header__burger-menu');
const burgerLinks = document.querySelectorAll('.header__link');
const burgerThemeSwitcher = document.querySelector('.footer__theme-switcher_place_header');

function toggleBurger() {
    burgerMenu.classList.toggle('_active');
    burgerButton.classList.toggle('_active');
    burgerThemeSwitcher.classList.toggle('_active');
}

function closeBurger() {
    burgerMenu.classList.remove('_active');
    burgerButton.classList.remove('_active');
    burgerThemeSwitcher.classList.remove('_active');
}

burgerButton.addEventListener('click', toggleBurger);
burgerLinks.forEach(el => el.addEventListener('click', closeBurger));

//surface-types slider

const sliderBtnPrev = document.querySelector('.surface-types__prev-button');
const sliderBtnNext = document.querySelector('.surface-types__next-button');
let slideIndex = 1;

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function removeElements(elements) {
    elements.forEach(el => el.classList.remove('surface-types__slider_active'));
}

function showSlide(n) {
    const slides = document.querySelectorAll('.surface-types__slider');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    removeElements(slides);
    slides[slideIndex - 1].classList.add('surface-types__slider_active');
}

sliderBtnPrev.addEventListener(`click`, () => plusSlide(-1));
sliderBtnNext.addEventListener(`click`, () => plusSlide(1));

//bicycles toggle
const highwayBtn = document.querySelector('.bicycles__highway-button');
const gravelBtn = document.querySelector('.bicycles__gravel-button');
const ttBtn = document.querySelector('.bicycles__tt-button');
const bicyclesButtons = document.querySelectorAll('.bicycles__switch-button');
const bicyclesSelect = document.querySelector('.bicycles__select');
const bicyclesSlides = document.querySelectorAll('.bicycles__gallery');
let bicyclesSlideIndex = 1;


function currentBicyclesSlide(n) {
    showBicyclesSlide(bicyclesSlideIndex = n);
}

function removeBicyclesElements(elements) {
    elements.forEach(el => el.classList.remove('bicycles__gallery_active'));
}


function showBicyclesSlide(n) {
    if (n > bicyclesSlides.length) bicyclesSlideIndex = 1;
    if (n < 1) bicyclessSideIndex = bicyclesSlides.length;
    removeBicyclesElements(bicyclesSlides);
    bicyclesSlides[bicyclesSlideIndex - 1].classList.add('bicycles__gallery_active');
}

highwayBtn.addEventListener('click', () => currentBicyclesSlide(1));
gravelBtn.addEventListener('click', () => currentBicyclesSlide(2));
ttBtn.addEventListener('click', () => currentBicyclesSlide(3));

//кнопки переключения в блоке bicycles

function removeBtnActive() {
    bicyclesButtons.forEach(el => el.classList.remove('bicycles__switch-button_active'));
}

function setBtnActive(btn) {
    btn.classList.add('bicycles__switch-button_active');
}

function clickBtn(BtnClick) {
    removeBtnActive();
    const activeBtn = BtnClick.currentTarget;
    setBtnActive(activeBtn);
    BtnClick.preventDefault();
};

bicyclesButtons.forEach(el => el.addEventListener('click', clickBtn));

//открытие разных типов велосипедов по выпадающему меню на мобильных разрешениях

function selectOption(option) {
    removeBicyclesElements(bicyclesSlides);
    bicyclesSelect.value = option;
    const gallery = document.getElementById(option);
    removeDots(bicyclesDots);
    bicyclesDots[bicyclesSlideIndex - 1].classList.add('bicycles__dot_active');
    if (gallery instanceof Element) {
        gallery.classList.add('bicycles__gallery_active');
    } else {
        throw `Элемент с ID "${option}" не найден.`
    }
}

bicyclesSelect.addEventListener('change', function() {
    const option = this.value;
    selectOption(option)
});


//слайдер выбранного типа велосипедов на мобильных разрешениях
const bicyclesDots = document.querySelectorAll('.bicycles__dot');
const bicyclesFigures = document.querySelectorAll('.bicycles__figure');
const bicyclesFiguresActive = document.querySelectorAll('.bicycles__figure_active');
const bicyclesDotOne = document.getElementsByClassName('bicycles__dot')[0];
const bicyclesDotTwo = document.getElementsByClassName('bicycles__dot')[1];
const bicyclesDotThree = document.getElementsByClassName('bicycles__dot')[2];

function removeDots(dots) {
    dots.forEach(el => el.classList.remove('bicycles__dot_active'));
}


function selectPoint(index, event) {
    document.querySelector('.bicycles__gallery_active').querySelector('.bicycles__figure_active').classList.remove('bicycles__figure_active')
    document.querySelector('.bicycles__gallery_active').querySelectorAll('.bicycles__figure')[index].classList.add('bicycles__figure_active')
    document.querySelector('.bicycles__dot_active').classList.remove('bicycles__dot_active')
    event.classList.add('bicycles__dot_active')
}

bicyclesDots.forEach(element => element.addEventListener('click', function() {
    if (Array.from(element.parentNode.children).indexOf(element) === 1) {
        selectPoint(1, this)
    } else if (Array.from(element.parentNode.children).indexOf(element) === 2) {
        selectPoint(2, this)
    } else if (Array.from(element.parentNode.children).indexOf(element) === 0) {
        selectPoint(0, this)
    }
}))