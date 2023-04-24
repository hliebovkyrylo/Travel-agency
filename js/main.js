"use strict"

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

////// slider for discover section //////
const images = document.querySelectorAll('.discoverImg');
const dots = document.querySelectorAll('.discoverDots');

dots.forEach((button) => {
    button.addEventListener('click', () => {
        const index = button.dataset.index;

        setActiveImage(index);
        setActiveDot(index);
    });
})

function setActiveImage (index) {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    images[index].classList.add('active');
}

function setActiveDot (index) {
    dots.forEach((button) => {
        button.classList.remove('active');
    });
    dots[index].classList.add('active');
}

setActiveImage(0);
setActiveDot(0);

////// swiper //////
let swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        270: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        348: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        999: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
      },
});

////// slider with buttons //////
const sliderContent = document.querySelector('.places__slider');
const sliderItems = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.preBtn');
const nextBtn = document.querySelector('.nextBtn');
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderItemMarginRight = parseInt(window.getComputedStyle(sliderItems[0]).marginRight);
let sliderVisibleItems = 1;
let sliderIndex = 0;

function moveSlider(direction) {
    if (direction === 'prev') {
        sliderIndex = Math.max(sliderIndex - 1, 0);
    } else {
        if (window.innerWidth > 1281) {
            sliderVisibleItems = 4;
        } else if (window.innerWidth > 428) {
            sliderVisibleItems = 2;
        } else {
            sliderVisibleItems = 1;
        }

        sliderIndex = Math.min(sliderIndex + 1, sliderItems.length - sliderVisibleItems);
    }
    sliderContent.style.transform = `translateX(-${sliderIndex * (sliderItemWidth + sliderItemMarginRight)}px)`;
}

prevBtn.addEventListener('click', () => {
    moveSlider('prev');
});

nextBtn.addEventListener('click', () => {
    moveSlider('next');
});