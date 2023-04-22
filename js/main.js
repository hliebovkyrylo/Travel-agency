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
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
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
