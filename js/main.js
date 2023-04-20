"use strict"

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